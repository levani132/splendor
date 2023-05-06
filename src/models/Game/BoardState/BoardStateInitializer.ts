import { NOBLE_TILES, Noble } from 'models/Noble';
import { BoardStateInterface } from './BoardStateInterface';
import {
  MAX_OPEN_CARDS,
  getRandomCoordinates as randCoords,
  randomize,
} from './BoardStateUtils';
import { ALL_DEVELOPMENT_CARDS, DevelopmentCard } from 'models/DevelopmentCard';
import { Token } from 'models/Token';
import { Color, SpecialColor, StandardColor } from 'models/Color';
import { makeObservable, observable } from 'mobx';
import { Level } from 'models/Level';

export class GameStateInitializer implements BoardStateInterface {
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

  constructor(players: number);
  constructor(boardState: BoardStateInterface);
  constructor(param1: number | BoardStateInterface);
  constructor(param1: number | BoardStateInterface) {
    const players = typeof param1 === 'number' ? param1 : undefined;
    const boardState = typeof param1 !== 'number' ? param1 : undefined;
    if (players) {
      const nTokens = players === 2 ? 5 : players === 3 ? 6 : 8;
      const nGoldenTokens = 5;
      const nNobles = Math.min(NOBLE_TILES.length, players + 1);

      this.transaction = [];
      this.randomizeTokens(nTokens, nGoldenTokens);
      this.nobles = randomize(NOBLE_TILES, nNobles);
      this.randomizeCards();
      this.initOpenCards();
    }
    if (boardState) {
      this.copyFromOldState(boardState);
    }
    makeObservable(this, {
      redTokens: observable,
      greenTokens: observable,
      blueTokens: observable,
      whiteTokens: observable,
      blackTokens: observable,
      goldTokens: observable,
      transaction: observable,
      easyCards: observable,
      easyCardsOpen: observable,
      mediumCards: observable,
      mediumCardsOpen: observable,
      hardCards: observable,
      hardCardsOpen: observable,
      nobles: observable,
    });
  }

  protected openCards(nCardsToOpen, cardType: Level) {
    const cards = this[cardType + 'Cards'] as DevelopmentCard[];
    const cardsOpen = this[cardType + 'CardsOpen'] as (
      | DevelopmentCard
      | undefined
    )[];
    const nOpenCards = cardsOpen.filter((c) => !!c).length;
    if (
      // Open cards after this action will exceed max allowed cards.
      nOpenCards + nCardsToOpen > MAX_OPEN_CARDS ||
      // There are not enough cards in the closed cards to open.
      cards.length < nCardsToOpen
    ) {
      return false;
    }

    const newCards = cards.slice(cards.length - nCardsToOpen, cards.length);
    this[cardType + 'Cards'] = cards.slice(0, cards.length - nCardsToOpen);
    for (let i = 0; i < cardsOpen.length; i++) {
      if (!cardsOpen[i]) {
        cardsOpen[i] = newCards.pop();
        if (!cardsOpen[i]) {
          return false;
        }
      }
    }
    return true;
  }

  private initOpenCards() {
    const init = () => new Array(MAX_OPEN_CARDS).fill(undefined);
    this.easyCardsOpen = init();
    this.mediumCardsOpen = init();
    this.hardCardsOpen = init();
    this.openCards(MAX_OPEN_CARDS, Level.Easy);
    this.openCards(MAX_OPEN_CARDS, Level.Medium);
    this.openCards(MAX_OPEN_CARDS, Level.Hard);
  }

  private randomizeCards() {
    const getCards = (l) => ALL_DEVELOPMENT_CARDS.filter((c) => c.level === l);
    const [easy, medium, hard] = [
      getCards(Level.Easy),
      getCards(Level.Medium),
      getCards(Level.Hard),
    ];
    this.easyCards = randomize(easy, easy.length);
    this.mediumCards = randomize(medium, medium.length);
    this.hardCards = randomize(hard, hard.length);
  }

  private randomizeTokens(nTokens, nGoldenTokens) {
    const tokens = (color: Color, n: number) =>
      new Array(n).fill(color).map(Token.createToken);
    this.redTokens = tokens(StandardColor.Red, nTokens);
    this.greenTokens = tokens(StandardColor.Green, nTokens);
    this.blueTokens = tokens(StandardColor.Blue, nTokens);
    this.whiteTokens = tokens(StandardColor.White, nTokens);
    this.blackTokens = tokens(StandardColor.Black, nTokens);
    // Golden token
    this.goldTokens = tokens(SpecialColor.Gold, nGoldenTokens);
  }

  private copyFromOldState(boardState: BoardStateInterface) {
    const copyCards = <T extends DevelopmentCard | undefined>(cards: T[]) =>
      cards.map((c) => c && new DevelopmentCard(c));
    this.transaction = boardState.transaction;
    this.redTokens = boardState.redTokens;
    this.greenTokens = boardState.greenTokens;
    this.blueTokens = boardState.blueTokens;
    this.whiteTokens = boardState.whiteTokens;
    this.blackTokens = boardState.blackTokens;
    this.goldTokens = boardState.goldTokens;
    this.nobles = boardState.nobles;
    this.easyCards = copyCards(boardState.easyCards);
    this.mediumCards = copyCards(boardState.mediumCards);
    this.hardCards = copyCards(boardState.hardCards);
    this.easyCardsOpen = copyCards(boardState.easyCardsOpen);
    this.mediumCardsOpen = copyCards(boardState.mediumCardsOpen);
    this.hardCardsOpen = copyCards(boardState.hardCardsOpen);
  }
}
