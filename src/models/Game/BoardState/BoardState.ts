import { Color } from '../../Color';
import { DevelopmentCard } from '../../DevelopmentCard';
import { Level } from '../../Level';
import { Noble } from '../../Noble';
import { Token } from '../../Token';
import { BoardStateInterface } from './BoardStateInterface';
import { GameStateInitializer as BoardStateInitializer } from './BoardStateInitializer';
import { Logger } from 'utils/Logger';
import { MyObject } from 'utils/MyObject';
import { action, makeObservable } from 'mobx';

export class BoardState
  extends BoardStateInitializer
  implements BoardStateInterface
{
  constructor(players: number | BoardStateInterface) {
    super(players);
    makeObservable(this, {
      getCard: action,
      takeCard: action,
      takeClosedCard: action,
      takeToken: action,
      putTokens: action,
    });
  }

  getCard(cardType: Level, index: number) {
    return this[cardType + 'CardsOpen'][index];
  }

  takeCard(cardType: Level, index: number): DevelopmentCard | null {
    const takenCard = this[cardType + 'CardsOpen'][index];
    if (!takenCard) {
      Logger.error('BoardState tried to use takeCard on empty card holder');
      return null;
    }
    this[cardType + 'CardsOpen'][index] = undefined;
    this.openCards(1, cardType);
    return takenCard;
  }

  takeClosedCard(level: Level) {
    return this[level + 'CardsOpen'].pop();
  }

  takeToken(color: Color) {
    if (
      this.transaction.length === 1 &&
      this.transaction[0].color === color &&
      this[color + 'Tokens'].length > 2
    ) {
      return this.finishTransaction(color);
    } else if (
      this.transaction.length === 1 &&
      this.transaction[0].color !== color &&
      this[color + 'Tokens'].length > 0
    ) {
      return this.addToTransaction(color);
    } else if (
      this.transaction.length === 2 &&
      this.transaction.every((t) => t.color !== color) &&
      this[color + 'Tokens'].length > 0
    ) {
      return this.finishTransaction(color);
    } else if (
      this.transaction.length === 0 &&
      this[color + 'Tokens'].length > 0
    ) {
      return this.addToTransaction(color);
    }
    this.revertTransaction();
    return false;
  }

  putTokens(tokens: Record<Color, number>) {
    for (let color of MyObject.keys(tokens)) {
      (this[color + 'Tokens'] as Token[]).push(
        ...new Array(tokens[color]).fill(0).map(() => Token.createToken(color))
      );
    }
  }

  private revertTransaction() {
    for (let token of this.transaction) {
      this[token.color + 'Tokens'].push(token);
    }
    this.transaction = [];
  }

  private finishTransaction(color: Color) {
    const res = [...this.transaction, this[color + 'Tokens'].pop() as Token];
    this.transaction = [];
    return res;
  }

  private addToTransaction(color: Color) {
    this.transaction.push(this[color + 'Tokens'].pop() as Token);
    return [];
  }
}
