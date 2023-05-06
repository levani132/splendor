import { DevelopmentCard } from 'models/DevelopmentCard';
import { Noble } from 'models/Noble';
import { Token } from 'models/Token';
import {
  COLORS,
  Color,
  STANDARD_COLORS,
  SpecialColor,
  StandardColor,
} from 'models/Color';
import { MyObject } from 'utils/MyObject';
import { BoardState } from '../BoardState/BoardState';

export class Player {
  redTokens: Token[];
  greenTokens: Token[];
  blueTokens: Token[];
  whiteTokens: Token[];
  blackTokens: Token[];

  goldTokens: Token[];

  redDevelopmentCards: DevelopmentCard[];
  greenDevelopmentCards: DevelopmentCard[];
  blueDevelopmentCards: DevelopmentCard[];
  whiteDevelopmentCards: DevelopmentCard[];
  blackDevelopmentCards: DevelopmentCard[];

  bookedCards: [DevelopmentCard?, DevelopmentCard?, DevelopmentCard?];

  nobles: Noble[];

  constructor(player?: Player) {
    if (player) {
      this.redTokens = player.redTokens;
      this.greenTokens = player.greenTokens;
      this.blueTokens = player.blueTokens;
      this.whiteTokens = player.whiteTokens;
      this.blackTokens = player.blackTokens;
      this.goldTokens = player.goldTokens;
      this.redDevelopmentCards = player.redDevelopmentCards;
      this.greenDevelopmentCards = player.greenDevelopmentCards;
      this.blueDevelopmentCards = player.blueDevelopmentCards;
      this.whiteDevelopmentCards = player.whiteDevelopmentCards;
      this.blackDevelopmentCards = player.blackDevelopmentCards;
      this.nobles = [];
    } else {
      this.redTokens = [];
      this.greenTokens = [];
      this.blueTokens = [];
      this.whiteTokens = [];
      this.blackTokens = [];
      this.goldTokens = [];
      this.redDevelopmentCards = [];
      this.greenDevelopmentCards = [];
      this.blueDevelopmentCards = [];
      this.whiteDevelopmentCards = [];
      this.blackDevelopmentCards = [];
      this.nobles = [];
    }
  }

  takeCard(cardToTake: DevelopmentCard): Record<Color, number> | null {
    const paid = this.payForCard(cardToTake);
    if (paid) {
      this.saveCard(cardToTake);
    }
    return paid;
  }

  bookCard(card: DevelopmentCard, openIndex?: number) {}

  takeToken(tokens: Token[]) {
    for (let token of tokens) {
      this[token.color + 'Tokens'].push(token);
    }
  }

  private saveCard(cardToSave: DevelopmentCard) {
    this[cardToSave.color + 'DevelopmentCards'].push(cardToSave);
  }

  private payForCard(cardToTake: DevelopmentCard) {
    let goldTokensRemaining = this.goldTokens.length;
    const tokensRemaining: Record<Color, number> = STANDARD_COLORS.reduce<
      Record<Color, number>
    >((res, color) => {
      const tokensLeft = this.checkTokens(cardToTake, color);
      if (tokensLeft < 0 && goldTokensRemaining > 0) {
        goldTokensRemaining += tokensLeft;
        return {
          ...res,
          [color]: goldTokensRemaining >= 0 ? 0 : goldTokensRemaining,
        };
      }
      return { ...res, [color]: tokensLeft };
    }, MyObject.fromEntries(COLORS.map((c) => [c, 0])));
    tokensRemaining[SpecialColor.Gold] = goldTokensRemaining;
    if (COLORS.every((color) => (tokensRemaining[color] || 0) >= 0)) {
      const tokensSpent = MyObject.fromEntries(
        MyObject.entries(tokensRemaining).map(([color, remaining]) => {
          const cost = this[color + 'Tokens'].length - remaining;
          this[color + 'Tokens'].splice(0, cost);
          return [color, cost];
        })
      );
      return tokensSpent;
    } else {
      return null;
    }
  }

  private checkTokens(cardToTake: DevelopmentCard, color: StandardColor) {
    const freeTokens = this[color + 'DevelopmentCards'].length;
    const myTokens = this[color + 'Tokens'].length;
    const neededTokens = cardToTake.neededTokens[color] || 0;
    if (freeTokens > neededTokens) {
      return myTokens;
    }
    return myTokens + freeTokens - neededTokens;
  }
}
