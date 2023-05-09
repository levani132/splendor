import { DevelopmentCard } from 'models/DevelopmentCard';
import { Noble } from 'models/Noble';
import { Gem } from 'models/Gem';

export interface BoardStateInterface {
  redGems: Gem[];
  greenGems: Gem[];
  blueGems: Gem[];
  whiteGems: Gem[];
  blackGems: Gem[];

  goldGems: Gem[];

  transaction: Gem[];

  easyCards: DevelopmentCard[];
  easyCardsOpen: (DevelopmentCard | undefined)[];
  mediumCards: DevelopmentCard[];
  mediumCardsOpen: (DevelopmentCard | undefined)[];
  hardCards: DevelopmentCard[];
  hardCardsOpen: (DevelopmentCard | undefined)[];

  nobles: (Noble | undefined)[];
}
