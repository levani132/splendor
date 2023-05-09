import { NOBLE_TILES, Noble } from 'models/Noble';
import { BoardStateInterface } from './BoardStateInterface';
import {
  MAX_OPEN_CARDS,
  getRandomCoordinates as randCoords,
  randomize,
} from './BoardStateUtils';
import { ALL_DEVELOPMENT_CARDS, DevelopmentCard } from 'models/DevelopmentCard';
import { Gem } from 'models/Gem';
import { Color, SpecialColor, StandardColor } from 'models/Color';
import { makeObservable, observable } from 'mobx';
import { Level } from 'models/Level';

export class GameStateInitializer implements BoardStateInterface {
  @observable redGems: Gem[];
  @observable greenGems: Gem[];
  @observable blueGems: Gem[];
  @observable whiteGems: Gem[];
  @observable blackGems: Gem[];
  @observable goldGems: Gem[];

  @observable transaction: Gem[];

  @observable easyCards: DevelopmentCard[];
  @observable easyCardsOpen: (DevelopmentCard | undefined)[];
  @observable mediumCards: DevelopmentCard[];
  @observable mediumCardsOpen: (DevelopmentCard | undefined)[];
  @observable hardCards: DevelopmentCard[];
  @observable hardCardsOpen: (DevelopmentCard | undefined)[];
  @observable nobles: (Noble | undefined)[];

  constructor(players: number);
  constructor(boardState: BoardStateInterface);
  constructor(param1: number | BoardStateInterface);
  constructor(param1: number | BoardStateInterface) {
    const players = typeof param1 === 'number' ? param1 : undefined;
    const boardState = typeof param1 !== 'number' ? param1 : undefined;
    if (players) {
      const nGems = players === 2 ? 5 : players === 3 ? 6 : 8;
      const nGoldenGems = 5;
      const nNobles = Math.min(NOBLE_TILES.length, players + 1);

      this.transaction = [];
      this.randomizeGems(nGems, nGoldenGems);
      this.nobles = randomize(NOBLE_TILES, nNobles);
      this.randomizeCards();
      this.initOpenCards();
    }
    if (boardState) {
      this.copyFromOldState(boardState);
    }
    makeObservable(this);
  }

  protected openCards(nCardsToOpen, cardType: Level) {
    const cards = this[cardType + 'Cards'] as DevelopmentCard[];
    const cardsOpen = this[
      cardType + 'CardsOpen'
    ] as (DevelopmentCard | null)[];
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
        cardsOpen[i] = newCards.pop() ?? null;
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

  private randomizeGems(nGems, nGoldenGems) {
    const gems = (color: Color, n: number) =>
      new Array(n).fill(color).map(Gem.createGem);
    this.redGems = gems(StandardColor.Red, nGems);
    this.greenGems = gems(StandardColor.Green, nGems);
    this.blueGems = gems(StandardColor.Blue, nGems);
    this.whiteGems = gems(StandardColor.White, nGems);
    this.blackGems = gems(StandardColor.Black, nGems);
    // Golden gem
    this.goldGems = gems(SpecialColor.Gold, nGoldenGems);
  }

  private copyFromOldState(boardState: BoardStateInterface) {
    const copyCards = <T extends DevelopmentCard | undefined>(cards: T[]) =>
      cards.map((c) => c && new DevelopmentCard(c));
    this.transaction = boardState.transaction;
    this.redGems = boardState.redGems;
    this.greenGems = boardState.greenGems;
    this.blueGems = boardState.blueGems;
    this.whiteGems = boardState.whiteGems;
    this.blackGems = boardState.blackGems;
    this.goldGems = boardState.goldGems;
    this.nobles = boardState.nobles;
    this.easyCards = copyCards(boardState.easyCards);
    this.mediumCards = copyCards(boardState.mediumCards);
    this.hardCards = copyCards(boardState.hardCards);
    this.easyCardsOpen = copyCards(boardState.easyCardsOpen);
    this.mediumCardsOpen = copyCards(boardState.mediumCardsOpen);
    this.hardCardsOpen = copyCards(boardState.hardCardsOpen);
  }
}
