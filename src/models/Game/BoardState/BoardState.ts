import { action, computed, makeObservable } from 'mobx';

import { STANDARD_COLORS, SpecialColor, StandardColor } from '../../Color';
import type { Color } from '../../Color';
import { DevelopmentCard } from '../../DevelopmentCard';
import { Level } from '../../Level';
import { Gem } from '../../Gem';
import { BoardStateInterface } from './BoardStateInterface';
import { GameStateInitializer as BoardStateInitializer } from './BoardStateInitializer';
import { Logger } from 'utils/Logger';
import { MyObject } from 'utils/MyObject';

export class BoardState
  extends BoardStateInitializer
  implements BoardStateInterface
{
  @computed get uniqueStandardGems() {
    return STANDARD_COLORS.filter((color) => !!this[color + 'Gems'].length).map(
      (color) => this[color + 'Gems'][0] as Gem
    );
  }

  constructor(players: number | BoardStateInterface) {
    super(players);
    makeObservable(this);
  }

  @action getCard(cardType: Level, index: number): DevelopmentCard | null {
    return this[cardType + 'CardsOpen'][index] as DevelopmentCard;
  }

  @action takeCard(cardType: Level, index: number): DevelopmentCard | null {
    const takenCard = this[cardType + 'CardsOpen'][index];
    if (!takenCard) {
      Logger.error('BoardState tried to use takeCard on empty card holder');
      return null;
    }
    this[cardType + 'CardsOpen'][index] = null;
    this[cardType + 'CardsOpen'] = [...this[cardType + 'CardsOpen']];
    this.openCards(1, cardType);
    return takenCard;
  }

  @action takeClosedCard(level: Level) {
    return this[level + 'CardsOpen'].pop();
  }

  @action takeGem(color: StandardColor) {
    if (this[color + 'Gems'].length == 0) {
      Logger.error(
        'Unknown error appeared, someone tried to take gem from empty pile'
      );
      return false;
    }

    if (this.transaction.length === 1 && this.transaction[0].color === color) {
      if (this[color + 'Gems'].length > 2) {
        return this.finishTransaction(color);
      } else if (this.uniqueStandardGems.length === 1) {
        return this.finishTransaction();
      } else {
        Logger.error(
          "You can't take two same colored gems if there's not at least four of those gems on the board."
        );
        this.revertTransaction();
        return false;
      }
    } else if (
      this.transaction.length === 1 &&
      this.transaction[0].color !== color
    ) {
      this.addToTransaction(color);
      if (
        this.uniqueStandardGems.every((gem) =>
          this.transaction.some(
            (transactionGem) => transactionGem.color === gem.color
          )
        )
      ) {
        return this.finishTransaction();
      }
      return [];
    } else if (
      this.transaction.length === 2 &&
      this.transaction.every((t) => t.color !== color)
    ) {
      return this.finishTransaction(color);
    } else if (this.transaction.length === 2) {
      Logger.error(
        "You can't take two same colored gems along with third gem."
      );
      this.revertTransaction();
      return false;
    } else if (this.transaction.length === 0) {
      this.addToTransaction(color);
      if (this.uniqueStandardGems.length === 0) {
        return this.finishTransaction();
      }
      return [];
    }
    this.revertTransaction();
    return false;
  }

  @action takeSpecialGem(color: SpecialColor) {
    return this[color + 'Gems'].pop() as Gem;
  }

  @action returnGem(gem: Gem) {
    this[gem.color + 'Gems'] = [...this[gem.color + 'Gems'], gem];
  }

  @action putGems(gems: Record<Color, number>) {
    for (let color of MyObject.keys(gems)) {
      (this[color + 'Gems'] as Gem[]).push(
        ...new Array(gems[color]).fill(0).map(() => Gem.createGem(color))
      );
    }
  }

  @action takeNoble(index: number) {
    this.nobles[index] = undefined;
  }

  private revertTransaction() {
    for (let gem of this.transaction) {
      this[gem.color + 'Gems'].push(gem);
    }
    this.transaction = [];
  }

  private finishTransaction(color?: Color) {
    const res = this.transaction;
    if (color) {
      res.push(this[color + 'Gems'].pop() as Gem);
    }
    this.transaction = [];
    return res;
  }

  private addToTransaction(color: Color) {
    this.transaction.push(this[color + 'Gems'].pop() as Gem);
    return [];
  }
}
