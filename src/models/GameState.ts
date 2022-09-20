import { makeAutoObservable, makeObservable, observable } from 'mobx';
import { Color, SpecialColor, StandardColor } from './Color';
import { ALL_DEVELOPMENT_CARDS, DevelopmentCard } from './DevelopmentCard';
import { Level } from './Level';
import { Noble, NOBLE_TILES } from './Noble';
import { Token } from './Token';

const MAX_CARDS_ON_THE_DESK = 4;

const getRandom = <T>(array: T[], n: number): T[] => {
  return [...array].sort((_a, _b) => 0.5 - Math.random()).slice(0, n);
};

const getRandomCoordinates = (n: number) => {
  let { x, y } = { x: 0, y: 0 };
  const res: [number, number][] = [];
  while (n--) {
    if (Math.random() > 0.5) {
      x += Math.random() > 0.5 ? -4 : 4;
    } else {
      y += Math.random() > 0.5 ? -4 : 4;
    }
    res.push([x, y]);
  }
  return res;
};

export class Game {
  gameState: GameState;
  players: Player[];
  currentPlayer = 0;

  constructor(players: number | Game) {
    if (typeof players === 'number') {
      this.gameState = new GameState(players);
      this.players = new Array<Player>(
        ...new Array(players).fill(0).map((_i) => new Player(this.gameState))
      );
    } else {
      this.gameState = new GameState(players.gameState);
      this.players = players.players.map(
        (player) => new Player(this.gameState, player)
      );
    }
  }
}

export class GameState {
  redTokens: Token[];
  greenTokens: Token[];
  blueTokens: Token[];
  whiteTokens: Token[];
  blackTokens: Token[];

  goldTokens: Token[];

  transaction: Token[];

  easyCards: DevelopmentCard[];
  easyCardsOpen: DevelopmentCard[];
  mediumCards: DevelopmentCard[];
  mediumCardsOpen: DevelopmentCard[];
  hardCards: DevelopmentCard[];
  hardCardsOpen: DevelopmentCard[];

  nobles: Noble[];

  constructor(players: number | GameState) {
    makeAutoObservable(this);
    if (typeof players === 'number') {
      const nTokens = players === 2 ? 5 : players === 3 ? 6 : 8;
      const nGoldenTokens = 5;
      const nNobles = Math.min(NOBLE_TILES.length, players + 1);
      this.redTokens = getRandomCoordinates(nTokens).map((token) => ({
        color: StandardColor.Red,
        left: token[1],
        bottom: token[0],
      }));
      this.greenTokens = getRandomCoordinates(nTokens).map((token) => ({
        color: StandardColor.Green,
        left: token[1],
        bottom: token[0],
      }));
      this.blueTokens = getRandomCoordinates(nTokens).map((token) => ({
        color: StandardColor.Blue,
        left: token[1],
        bottom: token[0],
      }));
      this.whiteTokens = getRandomCoordinates(nTokens).map((token) => ({
        color: StandardColor.White,
        left: token[1],
        bottom: token[0],
      }));
      this.blackTokens = getRandomCoordinates(nTokens).map((token) => ({
        color: StandardColor.Black,
        left: token[1],
        bottom: token[0],
      }));
      this.goldTokens = getRandomCoordinates(nGoldenTokens).map((token) => ({
        color: SpecialColor.Gold,
        left: token[1],
        bottom: token[0],
      }));
      this.nobles = getRandom(NOBLE_TILES, nNobles);
      const getCards = (l) =>
        ALL_DEVELOPMENT_CARDS.filter((c) => c.level === l);
      this.easyCards = observable(
        ((c) => getRandom(c, c.length))(getCards(Level.Easy))
      );
      this.mediumCards = observable(
        ((c) => getRandom(c, c.length))(getCards(Level.Medium))
      );
      this.hardCards = observable(
        ((c) => getRandom(c, c.length))(getCards(Level.Hard))
      );
      this.easyCardsOpen = observable([]);
      this.mediumCardsOpen = observable([]);
      this.hardCardsOpen = observable([]);
      this.openEasyCards(MAX_CARDS_ON_THE_DESK);
      this.openMediumCards(MAX_CARDS_ON_THE_DESK);
      this.openHardCards(MAX_CARDS_ON_THE_DESK);
    } else {
      const gameState = players;
      this.redTokens = gameState.redTokens;
      this.greenTokens = gameState.greenTokens;
      this.blueTokens = gameState.blueTokens;
      this.whiteTokens = gameState.whiteTokens;
      this.blackTokens = gameState.blackTokens;
      this.goldTokens = gameState.goldTokens;
      this.nobles = gameState.nobles;
      this.easyCards = observable(
        gameState.easyCards.map((card) => new DevelopmentCard(card))
      );
      this.mediumCards = observable(
        gameState.mediumCards.map((card) => new DevelopmentCard(card))
      );
      this.hardCards = observable(
        gameState.hardCards.map((card) => new DevelopmentCard(card))
      );
      this.easyCardsOpen = observable(
        gameState.easyCardsOpen.map((card) => new DevelopmentCard(card))
      );
      this.mediumCardsOpen = observable(
        gameState.mediumCardsOpen.map((card) => new DevelopmentCard(card))
      );
      this.hardCardsOpen = observable(
        gameState.hardCardsOpen.map((card) => new DevelopmentCard(card))
      );
    }
  }

  private openCards(nCardsToOpen, cardType: Level) {
    const cards = this[cardType + 'Cards'] as DevelopmentCard[];
    const cardsOpen = this[cardType + 'CardsOpen'];
    if (
      cardsOpen.filter((c) => !!c).length + nCardsToOpen >
        MAX_CARDS_ON_THE_DESK ||
      cards.length < nCardsToOpen
    ) {
      return false;
    }
    const newCards = this[cardType + 'Cards'].splice(
      cards.length - nCardsToOpen,
      nCardsToOpen
    );
    for (let i = 0; i < MAX_CARDS_ON_THE_DESK; i++) {
      if (!cardsOpen[i]) {
        cardsOpen[i] = newCards.pop();
        if (!cardsOpen[i]) {
          return false;
        }
      }
    }
    return true;
  }

  private takeCard(cardType: Level, index: number) {
    const takenCard = this[cardType + 'CardsOpen'][index];
    this[cardType + 'CardsOpen'][index] = undefined;
    if (!this.openCards(1, cardType)) {
      this.easyCardsOpen.splice(index, 1);
    }
    return takenCard;
  }

  openEasyCards(nCardsToOpen: number = 1): boolean {
    return this.openCards(nCardsToOpen, Level.Easy);
  }

  openMediumCards(nCardsToOpen: number = 1): boolean {
    return this.openCards(nCardsToOpen, Level.Medium);
  }

  openHardCards(nCardsToOpen: number = 1): boolean {
    return this.openCards(nCardsToOpen, Level.Hard);
  }

  takeEasyCard(index: number) {
    return this.takeCard(Level.Easy, index);
  }

  takeMediumCard(index: number) {
    return this.takeCard(Level.Medium, index);
  }

  takeHardCard(index: number) {
    return this.takeCard(Level.Hard, index);
  }

  takeClosedCard(level: Level) {
    return this[level + 'CardsOpen'].pop();
  }

  finishTransaction(color: Color) {
    const res = [...this.transaction, this[color + 'Tokens'].pop()];
    this.transaction = [];
    return res;
  }

  addToTransaction(color: Color) {
    this.transaction.push(this[color + 'Tokens'].pop());
    return [];
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
    return false;
  }
}

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

  gameState: GameState;

  constructor(gameState: GameState, player?: Player) {
    this.gameState = gameState;
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

  takeCard(card: DevelopmentCard, openIndex: number) {}

  bookCard(card: DevelopmentCard, openIndex?: number) {}

  takeToken(token: Token) {
    const res = this.gameState.takeToken(token.color);
    this[token.color + 'Tokens'].push();
  }
}
