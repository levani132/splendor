import { DevelopmentCard } from 'models/DevelopmentCard';
import { Noble } from 'models/Noble';
import { Token } from 'models/Token';

export interface BoardStateInterface {
  redTokens: Token[];
  greenTokens: Token[];
  blueTokens: Token[];
  whiteTokens: Token[];
  blackTokens: Token[];

  goldTokens: Token[];

  transaction: Token[];

  easyCards: DevelopmentCard[];
  easyCardsOpen: (DevelopmentCard | undefined)[];
  mediumCards: DevelopmentCard[];
  mediumCardsOpen: (DevelopmentCard | undefined)[];
  hardCards: DevelopmentCard[];
  hardCardsOpen: (DevelopmentCard | undefined)[];

  nobles: Noble[];
}
