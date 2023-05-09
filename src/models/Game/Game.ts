import { action, computed, makeObservable, observable } from 'mobx';

import { Logger } from 'utils/Logger';
import { Level } from 'models/Level';
import { SpecialColor, StandardColor } from 'models/Color';
import type { Color } from 'models/Color';
import type { Noble } from 'models/Noble';
import { BoardState } from './BoardState/BoardState';
import { Player } from './Player/Player';
import { MyObject } from 'utils/MyObject';

enum Action {
  Base,
  TakingGems,
  ReturningGems,
  TakingNobles,
}

export class Game {
  @observable boardState: BoardState;
  @observable players: Player[];
  @observable currentPlayerIndex = 0;
  @observable action: Action = Action.Base;

  @computed get currentPlayer() {
    return this.players[this.currentPlayerIndex];
  }

  @computed get canTakeNoble() {
    return this.boardState.nobles.some(
      (noble) =>
        noble &&
        MyObject.entries(noble.neededCards).every(
          ([color, count]) =>
            this.currentPlayer[color + 'DevelopmentCards'].length >= count
        )
    );
  }

  constructor(players: number);
  constructor(game: Game);
  constructor(param1: number | Game) {
    if (typeof param1 === 'number') {
      this.boardState = new BoardState(param1);
      this.players = new Array<Player>(
        ...new Array(param1).fill(0).map(() => new Player())
      );
    } else {
      this.boardState = new BoardState(param1.boardState);
      this.players = param1.players.map((player) => new Player(player));
    }
    makeObservable(this);
  }

  @action takeCard(cardType: Level, index: number): void {
    if (this.action !== Action.Base) {
      return;
    }
    const cardToTake = this.boardState.getCard(cardType, index);
    if (!cardToTake) {
      Logger.error("Can't take empty card");
      return;
    }
    const paid = this.currentPlayer.takeCard(cardToTake);
    if (!paid) {
      Logger.error("Cant't pay, not enough money");
      return;
    }
    this.boardState.takeCard(cardType, index);
    this.boardState.putGems(paid);
    this.nextPlayer();
  }

  @action bookCard(cardType: Level, index: number) {
    if (this.action !== Action.Base) {
      return;
    }
    const cardToBook = this.boardState.getCard(cardType, index);
    if (!cardToBook) {
      Logger.error("Can't book empty card");
      return;
    }
    const booked = this.currentPlayer.bookCard(cardToBook);
    if (!booked) {
      Logger.error('You can only book up to three cards!');
      return;
    }
    this.boardState.takeCard(cardType, index);
    const gold = this.boardState.takeSpecialGem(SpecialColor.Gold);
    if (!gold) {
      Logger.error(
        'Sorry no more golden coins, but you have successfully booked the card without them.'
      );
      return this.nextPlayer();
    }
    const tookGems = this.currentPlayer.takeGem([gold]);
    if (!tookGems && this.currentPlayer.allGems.length > 10) {
      const n = this.currentPlayer.allGems.length - 10;
      Logger.error(
        `You can only have 10 gems, please return ${n} gem${n > 1 ? 's' : ''}.`
      );
      this.action = Action.ReturningGems;
    } else {
      this.nextPlayer();
    }
  }

  @action takeGem(color: StandardColor): void {
    if (this.action !== Action.Base && this.action !== Action.TakingGems) {
      return;
    }
    const gemToTake = this.boardState.takeGem(color);
    if (gemToTake) {
      if (this.currentPlayer.takeGem(gemToTake)) {
        if (
          gemToTake.length < 3 &&
          gemToTake[0]?.color !== gemToTake[1]?.color
        ) {
          Logger.error(
            "You wouldn't be able to take any more gems anyway, so your turn is over."
          );
        }
        this.nextPlayer();
      } else if (this.currentPlayer.allGems.length > 10) {
        const n = this.currentPlayer.allGems.length - 10;
        Logger.error(
          `You can only have 10 gems, please return ${n} gem${
            n > 1 ? 's' : ''
          }.`
        );
        this.action = Action.ReturningGems;
      } else {
        this.action = Action.TakingGems;
      }
    }
  }

  @action returnTransactionGem(i: number) {
    const gem = this.boardState.transaction[i];
    this.boardState.transaction.splice(i, 1);
    this.boardState.returnGem(gem);
  }

  @action returnGem(color: Color): void {
    if (this.action !== Action.ReturningGems) {
      return;
    }
    const gem = this.currentPlayer.returnGem(color);
    if (gem) {
      this.boardState.returnGem(gem);
    }
    if (this.currentPlayer.allGems.length <= 10) {
      return this.nextPlayer();
    } else {
      const n = this.currentPlayer.allGems.length - 10;
      Logger.error(`Please return ${n} more gem${n > 1 ? 's' : ''}.`);
    }
  }

  @action takeNoble(noble: Noble, index: number) {
    if (this.action !== Action.TakingNobles) {
      return;
    }
    if (this.currentPlayer.takeNoble(noble)) {
      this.boardState.takeNoble(index);
      this.nextPlayer();
    } else {
      Logger.error("You can't recruit this noble, try someone else.");
    }
  }

  private nextPlayer() {
    if (this.canTakeNoble && this.action !== Action.TakingNobles) {
      this.action = Action.TakingNobles;
      Logger.error(
        'Congratulations! You can recruit a noble, please choose which noble you would like to recruit!'
      );
      return;
    }
    this.action = Action.Base;
    this.currentPlayerIndex =
      (this.currentPlayerIndex + 1) % this.players.length;
  }
}
