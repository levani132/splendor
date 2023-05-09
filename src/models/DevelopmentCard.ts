import { PartialRecord } from 'utils/PartialRecord';
import { Color, StandardColor } from './Color';
import { Level } from './Level';

interface ICard {
  color: StandardColor;
  points: 0 | 1 | 2 | 3 | 4 | 5;
  neededGems: PartialRecord<StandardColor, number>;
  level: Level;
}

const BLACK_DEVELOPMENT_CARDS: ICard[] = [
  {
    color: StandardColor.Black,
    points: 0,
    neededGems: { white: 1, blue: 1, green: 1, red: 1 },
    level: Level.Easy,
  },
  {
    color: StandardColor.Black,
    points: 0,
    level: Level.Easy,
    neededGems: { white: 1, blue: 2, green: 1, red: 1 },
  },
  {
    color: StandardColor.Black,
    points: 0,
    level: Level.Easy,
    neededGems: { white: 2, blue: 2, red: 1 },
  },
  {
    color: StandardColor.Black,
    points: 0,
    level: Level.Easy,
    neededGems: { green: 1, red: 3, black: 1 },
  },
  {
    color: StandardColor.Black,
    points: 0,
    level: Level.Easy,
    neededGems: { green: 2, red: 1 },
  },
  {
    color: StandardColor.Black,
    points: 0,
    level: Level.Easy,
    neededGems: { white: 2, green: 2 },
  },
  {
    color: StandardColor.Black,
    points: 0,
    level: Level.Easy,
    neededGems: { green: 3 },
  },
  {
    color: StandardColor.Black,
    points: 1,
    level: Level.Easy,
    neededGems: { blue: 4 },
  },
  {
    color: StandardColor.Black,
    points: 1,
    level: Level.Medium,
    neededGems: { white: 3, blue: 2, green: 2 },
  },
  {
    color: StandardColor.Black,
    points: 1,
    level: Level.Medium,
    neededGems: { white: 3, green: 3, black: 2 },
  },
  {
    color: StandardColor.Black,
    points: 2,
    level: Level.Medium,
    neededGems: { blue: 1, green: 4, red: 2 },
  },
  {
    color: StandardColor.Black,
    points: 2,
    level: Level.Medium,
    neededGems: { green: 5, red: 3 },
  },
  {
    color: StandardColor.Black,
    points: 2,
    level: Level.Medium,
    neededGems: { white: 5 },
  },
  {
    color: StandardColor.Black,
    points: 3,
    level: Level.Medium,
    neededGems: { black: 6 },
  },
  {
    color: StandardColor.Black,
    points: 3,
    level: Level.Hard,
    neededGems: { white: 3, blue: 3, green: 5, red: 3 },
  },
  {
    color: StandardColor.Black,
    points: 4,
    level: Level.Hard,
    neededGems: { red: 7 },
  },
  {
    color: StandardColor.Black,
    points: 4,
    level: Level.Hard,
    neededGems: { green: 3, red: 6, black: 3 },
  },
  {
    color: StandardColor.Black,
    points: 5,
    level: Level.Hard,
    neededGems: { red: 7, black: 3 },
  },
];

const BLUE_DEVELOPMENT_CARDS: ICard[] = [
  {
    color: StandardColor.Blue,
    points: 0,
    neededGems: { white: 1, black: 1, green: 1, red: 1 },
    level: Level.Easy,
  },
  {
    color: StandardColor.Blue,
    points: 0,
    level: Level.Easy,
    neededGems: { white: 1, red: 2, green: 1, black: 1 },
  },
  {
    color: StandardColor.Blue,
    points: 0,
    level: Level.Easy,
    neededGems: { green: 2, red: 2, white: 1 },
  },
  {
    color: StandardColor.Blue,
    points: 0,
    level: Level.Easy,
    neededGems: { green: 3, red: 1, blue: 1 },
  },
  {
    color: StandardColor.Blue,
    points: 0,
    level: Level.Easy,
    neededGems: { black: 2, white: 1 },
  },
  {
    color: StandardColor.Blue,
    points: 0,
    level: Level.Easy,
    neededGems: { green: 2, black: 2 },
  },
  {
    color: StandardColor.Blue,
    points: 0,
    level: Level.Easy,
    neededGems: { black: 3 },
  },
  {
    color: StandardColor.Blue,
    points: 1,
    level: Level.Easy,
    neededGems: { red: 4 },
  },
  {
    color: StandardColor.Blue,
    points: 1,
    level: Level.Medium,
    neededGems: { blue: 2, green: 2, red: 3 },
  },
  {
    color: StandardColor.Blue,
    points: 1,
    level: Level.Medium,
    neededGems: { blue: 2, green: 3, black: 3 },
  },
  {
    color: StandardColor.Blue,
    points: 2,
    level: Level.Medium,
    neededGems: { white: 5, blue: 3 },
  },
  {
    color: StandardColor.Blue,
    points: 2,
    level: Level.Medium,
    neededGems: { white: 2, red: 1, black: 4 },
  },
  {
    color: StandardColor.Blue,
    points: 2,
    level: Level.Medium,
    neededGems: { blue: 5 },
  },
  {
    color: StandardColor.Blue,
    points: 3,
    level: Level.Medium,
    neededGems: { blue: 6 },
  },
  {
    color: StandardColor.Blue,
    points: 3,
    level: Level.Hard,
    neededGems: { white: 3, green: 3, black: 5, red: 3 },
  },
  {
    color: StandardColor.Blue,
    points: 4,
    level: Level.Hard,
    neededGems: { white: 7 },
  },
  {
    color: StandardColor.Blue,
    points: 4,
    level: Level.Hard,
    neededGems: { blue: 3, white: 6, black: 3 },
  },
  {
    color: StandardColor.Blue,
    points: 5,
    level: Level.Hard,
    neededGems: { white: 7, blue: 3 },
  },
];

const WHITE_DEVELOPMENT_CARDS: ICard[] = [
  {
    color: StandardColor.White,
    points: 0,
    neededGems: { black: 1, blue: 1, green: 1, red: 1 },
    level: Level.Easy,
  },
  {
    color: StandardColor.White,
    points: 0,
    level: Level.Easy,
    neededGems: { black: 1, blue: 1, green: 2, red: 1 },
  },
  {
    color: StandardColor.White,
    points: 0,
    level: Level.Easy,
    neededGems: { black: 1, blue: 2, green: 2 },
  },
  {
    color: StandardColor.White,
    points: 0,
    level: Level.Easy,
    neededGems: { black: 1, blue: 1, white: 3 },
  },
  {
    color: StandardColor.White,
    points: 0,
    level: Level.Easy,
    neededGems: { black: 1, red: 2 },
  },
  {
    color: StandardColor.White,
    points: 0,
    level: Level.Easy,
    neededGems: { black: 2, blue: 2 },
  },
  {
    color: StandardColor.White,
    points: 0,
    level: Level.Easy,
    neededGems: { blue: 3 },
  },
  {
    color: StandardColor.White,
    points: 1,
    level: Level.Easy,
    neededGems: { green: 4 },
  },
  {
    color: StandardColor.White,
    points: 1,
    level: Level.Medium,
    neededGems: { black: 2, green: 3, red: 2 },
  },
  {
    color: StandardColor.White,
    points: 1,
    level: Level.Medium,
    neededGems: { blue: 3, white: 2, red: 3 },
  },
  {
    color: StandardColor.White,
    points: 2,
    level: Level.Medium,
    neededGems: { black: 2, green: 1, red: 4 },
  },
  {
    color: StandardColor.White,
    points: 2,
    level: Level.Medium,
    neededGems: { black: 3, red: 5 },
  },
  {
    color: StandardColor.White,
    points: 2,
    level: Level.Medium,
    neededGems: { red: 5 },
  },
  {
    color: StandardColor.White,
    points: 3,
    level: Level.Medium,
    neededGems: { white: 6 },
  },
  {
    color: StandardColor.White,
    points: 3,
    level: Level.Hard,
    neededGems: { black: 3, blue: 3, green: 3, red: 5 },
  },
  {
    color: StandardColor.White,
    points: 4,
    level: Level.Hard,
    neededGems: { black: 7 },
  },
  {
    color: StandardColor.White,
    points: 4,
    level: Level.Hard,
    neededGems: { black: 6, white: 3, red: 3 },
  },
  {
    color: StandardColor.White,
    points: 5,
    level: Level.Hard,
    neededGems: { black: 7, white: 3 },
  },
];

const GREEN_DEVELOPMENT_CARDS: ICard[] = [
  {
    color: StandardColor.Green,
    points: 0,
    neededGems: { black: 1, blue: 1, white: 1, red: 1 },
    level: Level.Easy,
  },
  {
    color: StandardColor.Green,
    points: 0,
    level: Level.Easy,
    neededGems: { black: 2, blue: 1, white: 1, red: 1 },
  },
  {
    color: StandardColor.Green,
    points: 0,
    level: Level.Easy,
    neededGems: { black: 2, blue: 1, red: 2 },
  },
  {
    color: StandardColor.Green,
    points: 0,
    level: Level.Easy,
    neededGems: { blue: 3, white: 1, green: 1 },
  },
  {
    color: StandardColor.Green,
    points: 0,
    level: Level.Easy,
    neededGems: { blue: 1, white: 2 },
  },
  {
    color: StandardColor.Green,
    points: 0,
    level: Level.Easy,
    neededGems: { blue: 2, red: 2 },
  },
  {
    color: StandardColor.Green,
    points: 0,
    level: Level.Easy,
    neededGems: { red: 3 },
  },
  {
    color: StandardColor.Green,
    points: 1,
    level: Level.Easy,
    neededGems: { black: 4 },
  },
  {
    color: StandardColor.Green,
    points: 1,
    level: Level.Medium,
    neededGems: { white: 3, green: 2, red: 3 },
  },
  {
    color: StandardColor.Green,
    points: 1,
    level: Level.Medium,
    neededGems: { black: 2, blue: 3, white: 2 },
  },
  {
    color: StandardColor.Green,
    points: 2,
    level: Level.Medium,
    neededGems: { black: 1, blue: 2, white: 4 },
  },
  {
    color: StandardColor.Green,
    points: 2,
    level: Level.Medium,
    neededGems: { blue: 5, green: 3 },
  },
  {
    color: StandardColor.Green,
    points: 2,
    level: Level.Medium,
    neededGems: { green: 5 },
  },
  {
    color: StandardColor.Green,
    points: 3,
    level: Level.Medium,
    neededGems: { green: 6 },
  },
  {
    color: StandardColor.Green,
    points: 3,
    level: Level.Hard,
    neededGems: { black: 3, blue: 3, white: 5, red: 3 },
  },
  {
    color: StandardColor.Green,
    points: 4,
    level: Level.Hard,
    neededGems: { blue: 7 },
  },
  {
    color: StandardColor.Green,
    points: 4,
    level: Level.Hard,
    neededGems: { blue: 6, white: 3, green: 3 },
  },
  {
    color: StandardColor.Green,
    points: 5,
    level: Level.Hard,
    neededGems: { blue: 7, green: 3 },
  },
];

const RED_DEVELOPMENT_CARDS: ICard[] = [
  {
    color: StandardColor.Red,
    points: 0,
    neededGems: { black: 1, blue: 1, white: 1, green: 1 },
    level: Level.Easy,
  },
  {
    color: StandardColor.Red,
    points: 0,
    level: Level.Easy,
    neededGems: { black: 1, blue: 1, white: 2, green: 1 },
  },
  {
    color: StandardColor.Red,
    points: 0,
    level: Level.Easy,
    neededGems: { black: 2, white: 2, green: 1 },
  },
  {
    color: StandardColor.Red,
    points: 0,
    level: Level.Easy,
    neededGems: { black: 3, white: 1, red: 1 },
  },
  {
    color: StandardColor.Red,
    points: 0,
    level: Level.Easy,
    neededGems: { blue: 2, green: 1 },
  },
  {
    color: StandardColor.Red,
    points: 0,
    level: Level.Easy,
    neededGems: { white: 2, red: 2 },
  },
  {
    color: StandardColor.Red,
    points: 0,
    level: Level.Easy,
    neededGems: { white: 3 },
  },
  {
    color: StandardColor.Red,
    points: 1,
    level: Level.Easy,
    neededGems: { white: 4 },
  },
  {
    color: StandardColor.Red,
    points: 1,
    level: Level.Medium,
    neededGems: { black: 3, white: 2, red: 2 },
  },
  {
    color: StandardColor.Red,
    points: 1,
    level: Level.Medium,
    neededGems: { black: 3, blue: 3, red: 2 },
  },
  {
    color: StandardColor.Red,
    points: 2,
    level: Level.Medium,
    neededGems: { blue: 4, white: 1, green: 2 },
  },
  {
    color: StandardColor.Red,
    points: 2,
    level: Level.Medium,
    neededGems: { black: 5, white: 3 },
  },
  {
    color: StandardColor.Red,
    points: 2,
    level: Level.Medium,
    neededGems: { black: 5 },
  },
  {
    color: StandardColor.Red,
    points: 3,
    level: Level.Medium,
    neededGems: { red: 6 },
  },
  {
    color: StandardColor.Red,
    points: 3,
    level: Level.Hard,
    neededGems: { black: 3, blue: 5, white: 3, green: 3 },
  },
  {
    color: StandardColor.Red,
    points: 4,
    level: Level.Hard,
    neededGems: { green: 7 },
  },
  {
    color: StandardColor.Red,
    points: 4,
    level: Level.Hard,
    neededGems: { blue: 3, green: 6, red: 3 },
  },
  {
    color: StandardColor.Red,
    points: 5,
    level: Level.Hard,
    neededGems: { green: 7, red: 3 },
  },
];

export class DevelopmentCard implements ICard {
  color: StandardColor;
  points: 0 | 1 | 2 | 3 | 4 | 5;
  neededGems: PartialRecord<StandardColor, number>;
  level: Level;

  constructor({ color, points, neededGems, level }: DevelopmentCard) {
    this.color = color;
    this.points = points;
    this.neededGems = neededGems;
    this.level = level;
  }

  toString() {
    return `level: ${this.level}, color: ${this.color}, points: ${this.points}, red: ${this.neededGems.red}, green: ${this.neededGems.green}, blue: ${this.neededGems.blue}, white: ${this.neededGems.white}, black: ${this.neededGems.black}`;
  }
}

export const ALL_DEVELOPMENT_CARDS: DevelopmentCard[] = [
  ...BLACK_DEVELOPMENT_CARDS.map((c) => new DevelopmentCard(c)),
  ...BLUE_DEVELOPMENT_CARDS.map((c) => new DevelopmentCard(c)),
  ...WHITE_DEVELOPMENT_CARDS.map((c) => new DevelopmentCard(c)),
  ...GREEN_DEVELOPMENT_CARDS.map((c) => new DevelopmentCard(c)),
  ...RED_DEVELOPMENT_CARDS.map((c) => new DevelopmentCard(c)),
];
