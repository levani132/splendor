import { Level } from 'models/Level';
import { BoardState } from './BoardState/BoardState';
import { Player } from './Player/Player';
import { Logger } from 'utils/Logger';
import { Color } from 'models/Color';
import { action, makeAutoObservable } from 'mobx';

export class Game {
  boardState: BoardState;
  players: Player[];
  currentPlayerIndex = 0;

  get currentPlayer() {
    return this.players[this.currentPlayerIndex];
  }

  constructor(players: number);
  constructor(game: Game);
  constructor(param1: number | Game) {
    if (typeof param1 === 'number') {
      this.boardState = new BoardState(param1);
      this.players = new Array<Player>(
        ...new Array(param1).fill(0).map((_i) => new Player())
      );
    } else {
      this.boardState = new BoardState(param1.boardState);
      this.players = param1.players.map((player) => new Player(player));
    }
    makeAutoObservable(this, {
      takeCard: action,
    });
  }

  takeCard(cardType: Level, index: number): void {
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
    this.boardState.putTokens(paid);
  }

  takeToken(color: Color): void {
    const tokenToTake = this.boardState.takeToken(color);
    if (tokenToTake) {
      this.currentPlayer.takeToken(tokenToTake);
    }
  }
}
