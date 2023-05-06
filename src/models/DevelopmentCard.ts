import { PartialRecord } from 'utils/PartialRecord';
import { Color, StandardColor } from './Color';
import { Level } from './Level';

interface ICard {
  color: StandardColor;
  points: 0 | 1 | 2 | 3 | 4 | 5;
  neededTokens: PartialRecord<StandardColor, number>;
  level: Level;
}

const BLACK_DEVELOPMENT_CARDS: ICard[] = [
  {
    color: StandardColor.Black,
    points: 0,
    neededTokens: { white: 1, blue: 1, green: 1, red: 1 },
    level: Level.Easy,
  },
  {
    color: StandardColor.Black,
    points: 0,
    level: Level.Easy,
    neededTokens: { white: 1, blue: 2, green: 1, red: 1 },
  },
  {
    color: StandardColor.Black,
    points: 0,
    level: Level.Easy,
    neededTokens: { white: 2, blue: 2, red: 1 },
  },
  {
    color: StandardColor.Black,
    points: 0,
    level: Level.Easy,
    neededTokens: { green: 1, red: 3, black: 1 },
  },
  {
    color: StandardColor.Black,
    points: 0,
    level: Level.Easy,
    neededTokens: { green: 2, red: 1 },
  },
  {
    color: StandardColor.Black,
    points: 0,
    level: Level.Easy,
    neededTokens: { white: 2, green: 2 },
  },
  {
    color: StandardColor.Black,
    points: 0,
    level: Level.Easy,
    neededTokens: { green: 3 },
  },
  {
    color: StandardColor.Black,
    points: 1,
    level: Level.Easy,
    neededTokens: { blue: 4 },
  },
  {
    color: StandardColor.Black,
    points: 1,
    level: Level.Medium,
    neededTokens: { white: 3, blue: 2, green: 2 },
  },
  {
    color: StandardColor.Black,
    points: 1,
    level: Level.Medium,
    neededTokens: { white: 3, green: 3, black: 2 },
  },
  {
    color: StandardColor.Black,
    points: 2,
    level: Level.Medium,
    neededTokens: { blue: 1, green: 4, red: 2 },
  },
  {
    color: StandardColor.Black,
    points: 2,
    level: Level.Medium,
    neededTokens: { green: 5, red: 3 },
  },
  {
    color: StandardColor.Black,
    points: 2,
    level: Level.Medium,
    neededTokens: { white: 5 },
  },
  {
    color: StandardColor.Black,
    points: 3,
    level: Level.Medium,
    neededTokens: { black: 6 },
  },
  {
    color: StandardColor.Black,
    points: 3,
    level: Level.Hard,
    neededTokens: { white: 3, blue: 3, green: 5, red: 3 },
  },
  {
    color: StandardColor.Black,
    points: 4,
    level: Level.Hard,
    neededTokens: { red: 7 },
  },
  {
    color: StandardColor.Black,
    points: 4,
    level: Level.Hard,
    neededTokens: { green: 3, red: 6, black: 3 },
  },
  {
    color: StandardColor.Black,
    points: 5,
    level: Level.Hard,
    neededTokens: { red: 7, black: 3 },
  },
];

const BLUE_DEVELOPMENT_CARDS: ICard[] = [
  {
    color: StandardColor.Blue,
    points: 0,
    neededTokens: { white: 1, black: 1, green: 1, red: 1 },
    level: Level.Easy,
  },
  {
    color: StandardColor.Blue,
    points: 0,
    level: Level.Easy,
    neededTokens: { white: 1, red: 2, green: 1, black: 1 },
  },
  {
    color: StandardColor.Blue,
    points: 0,
    level: Level.Easy,
    neededTokens: { green: 2, red: 2, white: 1 },
  },
  {
    color: StandardColor.Blue,
    points: 0,
    level: Level.Easy,
    neededTokens: { green: 3, red: 1, blue: 1 },
  },
  {
    color: StandardColor.Blue,
    points: 0,
    level: Level.Easy,
    neededTokens: { black: 2, white: 1 },
  },
  {
    color: StandardColor.Blue,
    points: 0,
    level: Level.Easy,
    neededTokens: { green: 2, black: 2 },
  },
  {
    color: StandardColor.Blue,
    points: 0,
    level: Level.Easy,
    neededTokens: { black: 3 },
  },
  {
    color: StandardColor.Blue,
    points: 1,
    level: Level.Easy,
    neededTokens: { red: 4 },
  },
  {
    color: StandardColor.Blue,
    points: 1,
    level: Level.Medium,
    neededTokens: { blue: 2, green: 2, red: 3 },
  },
  {
    color: StandardColor.Blue,
    points: 1,
    level: Level.Medium,
    neededTokens: { blue: 2, green: 3, black: 3 },
  },
  {
    color: StandardColor.Blue,
    points: 2,
    level: Level.Medium,
    neededTokens: { white: 5, blue: 3 },
  },
  {
    color: StandardColor.Blue,
    points: 2,
    level: Level.Medium,
    neededTokens: { white: 2, red: 1, black: 4 },
  },
  {
    color: StandardColor.Blue,
    points: 2,
    level: Level.Medium,
    neededTokens: { blue: 5 },
  },
  {
    color: StandardColor.Blue,
    points: 3,
    level: Level.Medium,
    neededTokens: { blue: 6 },
  },
  {
    color: StandardColor.Blue,
    points: 3,
    level: Level.Hard,
    neededTokens: { white: 3, green: 3, black: 5, red: 3 },
  },
  {
    color: StandardColor.Blue,
    points: 4,
    level: Level.Hard,
    neededTokens: { white: 7 },
  },
  {
    color: StandardColor.Blue,
    points: 4,
    level: Level.Hard,
    neededTokens: { blue: 3, white: 6, black: 3 },
  },
  {
    color: StandardColor.Blue,
    points: 5,
    level: Level.Hard,
    neededTokens: { white: 7, blue: 3 },
  },
];

const WHITE_DEVELOPMENT_CARDS: ICard[] = [
  {
    color: StandardColor.White,
    points: 0,
    neededTokens: { black: 1, blue: 1, green: 1, red: 1 },
    level: Level.Easy,
  },
  {
    color: StandardColor.White,
    points: 0,
    level: Level.Easy,
    neededTokens: { black: 1, blue: 1, green: 2, red: 1 },
  },
  {
    color: StandardColor.White,
    points: 0,
    level: Level.Easy,
    neededTokens: { black: 1, blue: 2, green: 2 },
  },
  {
    color: StandardColor.White,
    points: 0,
    level: Level.Easy,
    neededTokens: { black: 1, blue: 1, white: 3 },
  },
  {
    color: StandardColor.White,
    points: 0,
    level: Level.Easy,
    neededTokens: { black: 1, red: 2 },
  },
  {
    color: StandardColor.White,
    points: 0,
    level: Level.Easy,
    neededTokens: { black: 2, blue: 2 },
  },
  {
    color: StandardColor.White,
    points: 0,
    level: Level.Easy,
    neededTokens: { blue: 3 },
  },
  {
    color: StandardColor.White,
    points: 1,
    level: Level.Easy,
    neededTokens: { green: 4 },
  },
  {
    color: StandardColor.White,
    points: 1,
    level: Level.Medium,
    neededTokens: { black: 2, green: 3, red: 2 },
  },
  {
    color: StandardColor.White,
    points: 1,
    level: Level.Medium,
    neededTokens: { blue: 3, white: 2, red: 3 },
  },
  {
    color: StandardColor.White,
    points: 2,
    level: Level.Medium,
    neededTokens: { black: 2, green: 1, red: 4 },
  },
  {
    color: StandardColor.White,
    points: 2,
    level: Level.Medium,
    neededTokens: { black: 3, red: 5 },
  },
  {
    color: StandardColor.White,
    points: 2,
    level: Level.Medium,
    neededTokens: { red: 5 },
  },
  {
    color: StandardColor.White,
    points: 3,
    level: Level.Medium,
    neededTokens: { white: 6 },
  },
  {
    color: StandardColor.White,
    points: 3,
    level: Level.Hard,
    neededTokens: { black: 3, blue: 3, green: 3, red: 5 },
  },
  {
    color: StandardColor.White,
    points: 4,
    level: Level.Hard,
    neededTokens: { black: 7 },
  },
  {
    color: StandardColor.White,
    points: 4,
    level: Level.Hard,
    neededTokens: { black: 6, white: 3, red: 3 },
  },
  {
    color: StandardColor.White,
    points: 5,
    level: Level.Hard,
    neededTokens: { black: 7, white: 3 },
  },
];

const GREEN_DEVELOPMENT_CARDS: ICard[] = [
  {
    color: StandardColor.Green,
    points: 0,
    neededTokens: { black: 1, blue: 1, white: 1, red: 1 },
    level: Level.Easy,
  },
  {
    color: StandardColor.Green,
    points: 0,
    level: Level.Easy,
    neededTokens: { black: 2, blue: 1, white: 1, red: 1 },
  },
  {
    color: StandardColor.Green,
    points: 0,
    level: Level.Easy,
    neededTokens: { black: 2, blue: 1, red: 2 },
  },
  {
    color: StandardColor.Green,
    points: 0,
    level: Level.Easy,
    neededTokens: { blue: 3, white: 1, green: 1 },
  },
  {
    color: StandardColor.Green,
    points: 0,
    level: Level.Easy,
    neededTokens: { blue: 1, white: 2 },
  },
  {
    color: StandardColor.Green,
    points: 0,
    level: Level.Easy,
    neededTokens: { blue: 2, red: 2 },
  },
  {
    color: StandardColor.Green,
    points: 0,
    level: Level.Easy,
    neededTokens: { red: 3 },
  },
  {
    color: StandardColor.Green,
    points: 1,
    level: Level.Easy,
    neededTokens: { black: 4 },
  },
  {
    color: StandardColor.Green,
    points: 1,
    level: Level.Medium,
    neededTokens: { white: 3, green: 2, red: 3 },
  },
  {
    color: StandardColor.Green,
    points: 1,
    level: Level.Medium,
    neededTokens: { black: 2, blue: 3, white: 2 },
  },
  {
    color: StandardColor.Green,
    points: 2,
    level: Level.Medium,
    neededTokens: { black: 1, blue: 2, white: 4 },
  },
  {
    color: StandardColor.Green,
    points: 2,
    level: Level.Medium,
    neededTokens: { blue: 5, green: 3 },
  },
  {
    color: StandardColor.Green,
    points: 2,
    level: Level.Medium,
    neededTokens: { green: 5 },
  },
  {
    color: StandardColor.Green,
    points: 3,
    level: Level.Medium,
    neededTokens: { green: 6 },
  },
  {
    color: StandardColor.Green,
    points: 3,
    level: Level.Hard,
    neededTokens: { black: 3, blue: 3, white: 5, red: 3 },
  },
  {
    color: StandardColor.Green,
    points: 4,
    level: Level.Hard,
    neededTokens: { blue: 7 },
  },
  {
    color: StandardColor.Green,
    points: 4,
    level: Level.Hard,
    neededTokens: { blue: 6, white: 3, green: 3 },
  },
  {
    color: StandardColor.Green,
    points: 5,
    level: Level.Hard,
    neededTokens: { blue: 7, green: 3 },
  },
];

const RED_DEVELOPMENT_CARDS: ICard[] = [
  {
    color: StandardColor.Red,
    points: 0,
    neededTokens: { black: 1, blue: 1, white: 1, green: 1 },
    level: Level.Easy,
  },
  {
    color: StandardColor.Red,
    points: 0,
    level: Level.Easy,
    neededTokens: { black: 1, blue: 1, white: 2, green: 1 },
  },
  {
    color: StandardColor.Red,
    points: 0,
    level: Level.Easy,
    neededTokens: { black: 2, white: 2, green: 1 },
  },
  {
    color: StandardColor.Red,
    points: 0,
    level: Level.Easy,
    neededTokens: { black: 3, white: 1, red: 1 },
  },
  {
    color: StandardColor.Red,
    points: 0,
    level: Level.Easy,
    neededTokens: { blue: 2, green: 1 },
  },
  {
    color: StandardColor.Red,
    points: 0,
    level: Level.Easy,
    neededTokens: { white: 2, red: 2 },
  },
  {
    color: StandardColor.Red,
    points: 0,
    level: Level.Easy,
    neededTokens: { white: 3 },
  },
  {
    color: StandardColor.Red,
    points: 1,
    level: Level.Easy,
    neededTokens: { white: 4 },
  },
  {
    color: StandardColor.Red,
    points: 1,
    level: Level.Medium,
    neededTokens: { black: 3, white: 2, red: 2 },
  },
  {
    color: StandardColor.Red,
    points: 1,
    level: Level.Medium,
    neededTokens: { black: 3, blue: 3, red: 2 },
  },
  {
    color: StandardColor.Red,
    points: 2,
    level: Level.Medium,
    neededTokens: { blue: 4, white: 1, green: 2 },
  },
  {
    color: StandardColor.Red,
    points: 2,
    level: Level.Medium,
    neededTokens: { black: 5, white: 3 },
  },
  {
    color: StandardColor.Red,
    points: 2,
    level: Level.Medium,
    neededTokens: { black: 5 },
  },
  {
    color: StandardColor.Red,
    points: 3,
    level: Level.Medium,
    neededTokens: { red: 6 },
  },
  {
    color: StandardColor.Red,
    points: 3,
    level: Level.Hard,
    neededTokens: { black: 3, blue: 5, white: 3, green: 3 },
  },
  {
    color: StandardColor.Red,
    points: 4,
    level: Level.Hard,
    neededTokens: { green: 7 },
  },
  {
    color: StandardColor.Red,
    points: 4,
    level: Level.Hard,
    neededTokens: { blue: 3, green: 6, red: 3 },
  },
  {
    color: StandardColor.Red,
    points: 5,
    level: Level.Hard,
    neededTokens: { green: 7, red: 3 },
  },
];

export class DevelopmentCard implements ICard {
  color: StandardColor;
  points: 0 | 1 | 2 | 3 | 4 | 5;
  neededTokens: PartialRecord<StandardColor, number>;
  level: Level;

  constructor({ color, points, neededTokens, level }: DevelopmentCard) {
    this.color = color;
    this.points = points;
    this.neededTokens = neededTokens;
    this.level = level;
  }

  toString() {
    return `level: ${this.level}, color: ${this.color}, points: ${this.points}, red: ${this.neededTokens.red}, green: ${this.neededTokens.green}, blue: ${this.neededTokens.blue}, white: ${this.neededTokens.white}, black: ${this.neededTokens.black}`;
  }
}

export const ALL_DEVELOPMENT_CARDS: DevelopmentCard[] = [
  ...BLACK_DEVELOPMENT_CARDS.map((c) => new DevelopmentCard(c)),
  ...BLUE_DEVELOPMENT_CARDS.map((c) => new DevelopmentCard(c)),
  ...WHITE_DEVELOPMENT_CARDS.map((c) => new DevelopmentCard(c)),
  ...GREEN_DEVELOPMENT_CARDS.map((c) => new DevelopmentCard(c)),
  ...RED_DEVELOPMENT_CARDS.map((c) => new DevelopmentCard(c)),
];
