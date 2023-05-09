import { action, computed, makeObservable, observable } from 'mobx';

import { DevelopmentCard } from 'models/DevelopmentCard';
import { Gem } from 'models/Gem';
import type { Noble } from 'models/Noble';
import type { Color } from 'models/Color';
import {
  COLORS,
  STANDARD_COLORS,
  SpecialColor,
  StandardColor,
} from 'models/Color';
import { MyObject } from 'utils/MyObject';
import { Level } from 'models/Level';

const MAX_BOOKED_CARDS = 3;

export class Player {
  @observable redGems: Gem[];
  @observable greenGems: Gem[];
  @observable blueGems: Gem[];
  @observable whiteGems: Gem[];
  @observable blackGems: Gem[];

  @observable goldGems: Gem[];

  @observable redDevelopmentCards: DevelopmentCard[];
  @observable greenDevelopmentCards: DevelopmentCard[];
  @observable blueDevelopmentCards: DevelopmentCard[];
  @observable whiteDevelopmentCards: DevelopmentCard[];
  @observable blackDevelopmentCards: DevelopmentCard[];

  @observable bookedCards: DevelopmentCard[] = [];

  @observable nobles: Noble[];

  @computed get allGems() {
    return COLORS.map((color) => this[color + 'Gems'] as Gem).flat();
  }

  constructor(player?: Player) {
    if (player) {
      this.redGems = player.redGems;
      this.greenGems = player.greenGems;
      this.blueGems = player.blueGems;
      this.whiteGems = player.whiteGems;
      this.blackGems = player.blackGems;
      this.goldGems = player.goldGems;
      this.redDevelopmentCards = player.redDevelopmentCards;
      this.greenDevelopmentCards = player.greenDevelopmentCards;
      this.blueDevelopmentCards = player.blueDevelopmentCards;
      this.whiteDevelopmentCards = player.whiteDevelopmentCards;
      this.blackDevelopmentCards = player.blackDevelopmentCards;
      this.bookedCards = player.bookedCards;
      this.nobles = [];
    } else {
      this.redGems = [];
      this.greenGems = [];
      this.blueGems = [];
      this.whiteGems = [];
      this.blackGems = [];
      this.goldGems = [];
      this.redDevelopmentCards = [];
      this.greenDevelopmentCards = [];
      this.blueDevelopmentCards = [];
      this.whiteDevelopmentCards = [];
      this.blackDevelopmentCards = [];
      this.bookedCards = [];
      this.nobles = [];
    }
    makeObservable(this);
  }

  @action takeCard(cardToTake: DevelopmentCard): Record<Color, number> | null {
    const paid = this.payForCard(cardToTake);
    if (paid) {
      this.saveCard(cardToTake);
    }
    return paid;
  }

  @action bookCard(cardToBook: DevelopmentCard) {
    if (this.bookedCards.length >= MAX_BOOKED_CARDS) {
      return false;
    }
    this.bookedCards.push(cardToBook);
    return true;
  }

  @action takeGem(gems: Gem[]) {
    for (let gem of gems) {
      this[gem.color + 'Gems'].push(gem);
    }
    return !!gems.length && this.allGems.length <= 10;
  }

  @action returnGem(color: Color): Gem | undefined {
    return this[color + 'Gems'].pop();
  }

  @action takeNoble(noble: Noble) {
    if (
      MyObject.entries(noble.neededCards).every(
        ([color, count]) => this[color + 'DevelopmentCards'].length >= count
      )
    ) {
      this.nobles.push(noble);
      return true;
    }
    return false;
  }

  private saveCard(cardToSave: DevelopmentCard) {
    this[cardToSave.color + 'DevelopmentCards'].push(cardToSave);
  }

  private payForCard(cardToTake: DevelopmentCard) {
    let goldGemsRemaining = this.goldGems.length;
    const gemsRemaining: Record<Color, number> = STANDARD_COLORS.reduce<
      Record<Color, number>
    >((res, color) => {
      const gemsLeft = this.checkGems(cardToTake, color);
      if (gemsLeft < 0 && goldGemsRemaining > 0) {
        goldGemsRemaining += gemsLeft;
        return {
          ...res,
          [color]: goldGemsRemaining >= 0 ? 0 : goldGemsRemaining,
        };
      }
      return { ...res, [color]: gemsLeft };
    }, MyObject.fromEntries(COLORS.map((c) => [c, 0])));
    gemsRemaining[SpecialColor.Gold] = goldGemsRemaining;
    if (COLORS.every((color) => (gemsRemaining[color] || 0) >= 0)) {
      const gemsSpent = MyObject.fromEntries(
        MyObject.entries(gemsRemaining).map(([color, remaining]) => {
          const cost = this[color + 'Gems'].length - remaining;
          this[color + 'Gems'].splice(0, cost);
          return [color, cost];
        })
      );
      return gemsSpent;
    } else {
      return null;
    }
  }

  private checkGems(cardToTake: DevelopmentCard, color: StandardColor) {
    const freeGems = this[color + 'DevelopmentCards'].length;
    const myGems = this[color + 'Gems'].length;
    const neededGems = cardToTake.neededGems[color] || 0;
    if (freeGems > neededGems) {
      return myGems;
    }
    return myGems + freeGems - neededGems;
  }
}
