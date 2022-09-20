import { PartialRecord } from 'utils/PartialRecord';
import { Color, StandardColor } from './Color';
import { Level } from './Level';

const BLACK_DEVELOPMENT_CARDS: {
  color: StandardColor.Black;
  points: 0 | 1 | 2 | 3 | 4 | 5;
  neededTokens: PartialRecord<StandardColor, number>;
  level: Level;
}[] = [
  {
    color: StandardColor.Black,
    points: 0,
    neededTokens: { White: 1, Blue: 1, Green: 1, Red: 1 },
    level: Level.Easy,
  },
  {
    color: StandardColor.Black,
    points: 0,
    level: Level.Easy,
    neededTokens: { White: 1, Blue: 2, Green: 1, Red: 1 },
  },
  {
    color: StandardColor.Black,
    points: 0,
    level: Level.Easy,
    neededTokens: { White: 2, Blue: 2, Red: 1 },
  },
  {
    color: StandardColor.Black,
    points: 0,
    level: Level.Easy,
    neededTokens: { Green: 1, Red: 3, Black: 1 },
  },
  {
    color: StandardColor.Black,
    points: 0,
    level: Level.Easy,
    neededTokens: { Green: 2, Red: 1 },
  },
  {
    color: StandardColor.Black,
    points: 0,
    level: Level.Easy,
    neededTokens: { White: 2, Green: 2 },
  },
  {
    color: StandardColor.Black,
    points: 0,
    level: Level.Easy,
    neededTokens: { Green: 3 },
  },
  {
    color: StandardColor.Black,
    points: 1,
    level: Level.Easy,
    neededTokens: { Blue: 4 },
  },
  {
    color: StandardColor.Black,
    points: 1,
    level: Level.Medium,
    neededTokens: { White: 3, Blue: 2, Green: 2 },
  },
  {
    color: StandardColor.Black,
    points: 1,
    level: Level.Medium,
    neededTokens: { White: 3, Green: 3, Black: 2 },
  },
  {
    color: StandardColor.Black,
    points: 2,
    level: Level.Medium,
    neededTokens: { Blue: 1, Green: 4, Red: 2 },
  },
  {
    color: StandardColor.Black,
    points: 2,
    level: Level.Medium,
    neededTokens: { Green: 5, Red: 3 },
  },
  {
    color: StandardColor.Black,
    points: 2,
    level: Level.Medium,
    neededTokens: { White: 5 },
  },
  {
    color: StandardColor.Black,
    points: 3,
    level: Level.Medium,
    neededTokens: { Black: 6 },
  },
  {
    color: StandardColor.Black,
    points: 3,
    level: Level.Hard,
    neededTokens: { White: 3, Blue: 3, Green: 5, Red: 3 },
  },
  {
    color: StandardColor.Black,
    points: 4,
    level: Level.Hard,
    neededTokens: { Red: 7 },
  },
  {
    color: StandardColor.Black,
    points: 4,
    level: Level.Hard,
    neededTokens: { Green: 3, Red: 6, Black: 3 },
  },
  {
    color: StandardColor.Black,
    points: 5,
    level: Level.Hard,
    neededTokens: { Red: 7, Black: 3 },
  },
];

const BLUE_DEVELOPMENT_CARDS: {
  color: StandardColor.Blue;
  points: 0 | 1 | 2 | 3 | 4 | 5;
  neededTokens: PartialRecord<StandardColor, number>;
  level: Level;
}[] = [
  {
    color: StandardColor.Blue,
    points: 0,
    neededTokens: { White: 1, Black: 1, Green: 1, Red: 1 },
    level: Level.Easy,
  },
  {
    color: StandardColor.Blue,
    points: 0,
    level: Level.Easy,
    neededTokens: { White: 1, Red: 2, Green: 1, Black: 1 },
  },
  {
    color: StandardColor.Blue,
    points: 0,
    level: Level.Easy,
    neededTokens: { Green: 2, Red: 2, White: 1 },
  },
  {
    color: StandardColor.Blue,
    points: 0,
    level: Level.Easy,
    neededTokens: { Green: 3, Red: 1, Blue: 1 },
  },
  {
    color: StandardColor.Blue,
    points: 0,
    level: Level.Easy,
    neededTokens: { Black: 2, White: 1 },
  },
  {
    color: StandardColor.Blue,
    points: 0,
    level: Level.Easy,
    neededTokens: { Green: 2, Black: 2 },
  },
  {
    color: StandardColor.Blue,
    points: 0,
    level: Level.Easy,
    neededTokens: { Black: 3 },
  },
  {
    color: StandardColor.Blue,
    points: 1,
    level: Level.Easy,
    neededTokens: { Red: 4 },
  },
  {
    color: StandardColor.Blue,
    points: 1,
    level: Level.Medium,
    neededTokens: { Blue: 2, Green: 2, Red: 3 },
  },
  {
    color: StandardColor.Blue,
    points: 1,
    level: Level.Medium,
    neededTokens: { Blue: 2, Green: 3, Black: 3 },
  },
  {
    color: StandardColor.Blue,
    points: 2,
    level: Level.Medium,
    neededTokens: { White: 5, Blue: 3 },
  },
  {
    color: StandardColor.Blue,
    points: 2,
    level: Level.Medium,
    neededTokens: { White: 2, Red: 1, Black: 4 },
  },
  {
    color: StandardColor.Blue,
    points: 2,
    level: Level.Medium,
    neededTokens: { Blue: 5 },
  },
  {
    color: StandardColor.Blue,
    points: 3,
    level: Level.Medium,
    neededTokens: { Blue: 6 },
  },
  {
    color: StandardColor.Blue,
    points: 3,
    level: Level.Hard,
    neededTokens: { White: 3, Green: 3, Black: 5, Red: 3 },
  },
  {
    color: StandardColor.Blue,
    points: 4,
    level: Level.Hard,
    neededTokens: { White: 7 },
  },
  {
    color: StandardColor.Blue,
    points: 4,
    level: Level.Hard,
    neededTokens: { Blue: 3, White: 6, Black: 3 },
  },
  {
    color: StandardColor.Blue,
    points: 5,
    level: Level.Hard,
    neededTokens: { White: 7, Blue: 3 },
  },
];

const WHITE_DEVELOPMENT_CARDS: {
  color: StandardColor.White;
  points: 0 | 1 | 2 | 3 | 4 | 5;
  neededTokens: PartialRecord<StandardColor, number>;
  level: Level;
}[] = [
  {
    color: StandardColor.White,
    points: 0,
    neededTokens: { Black: 1, Blue: 1, Green: 1, Red: 1 },
    level: Level.Easy,
  },
  {
    color: StandardColor.White,
    points: 0,
    level: Level.Easy,
    neededTokens: { Black: 1, Blue: 1, Green: 2, Red: 1 },
  },
  {
    color: StandardColor.White,
    points: 0,
    level: Level.Easy,
    neededTokens: { Black: 1, Blue: 2, Green: 2 },
  },
  {
    color: StandardColor.White,
    points: 0,
    level: Level.Easy,
    neededTokens: { Black: 1, Blue: 1, White: 3 },
  },
  {
    color: StandardColor.White,
    points: 0,
    level: Level.Easy,
    neededTokens: { Black: 1, Red: 2 },
  },
  {
    color: StandardColor.White,
    points: 0,
    level: Level.Easy,
    neededTokens: { Black: 2, Blue: 2 },
  },
  {
    color: StandardColor.White,
    points: 0,
    level: Level.Easy,
    neededTokens: { Blue: 3 },
  },
  {
    color: StandardColor.White,
    points: 1,
    level: Level.Easy,
    neededTokens: { Green: 4 },
  },
  {
    color: StandardColor.White,
    points: 1,
    level: Level.Medium,
    neededTokens: { Black: 2, Green: 3, Red: 2 },
  },
  {
    color: StandardColor.White,
    points: 1,
    level: Level.Medium,
    neededTokens: { Blue: 3, White: 2, Red: 3 },
  },
  {
    color: StandardColor.White,
    points: 2,
    level: Level.Medium,
    neededTokens: { Black: 2, Green: 1, Red: 4 },
  },
  {
    color: StandardColor.White,
    points: 2,
    level: Level.Medium,
    neededTokens: { Black: 3, Red: 5 },
  },
  {
    color: StandardColor.White,
    points: 2,
    level: Level.Medium,
    neededTokens: { Red: 5 },
  },
  {
    color: StandardColor.White,
    points: 3,
    level: Level.Medium,
    neededTokens: { White: 6 },
  },
  {
    color: StandardColor.White,
    points: 3,
    level: Level.Hard,
    neededTokens: { Black: 3, Blue: 3, Green: 3, Red: 5 },
  },
  {
    color: StandardColor.White,
    points: 4,
    level: Level.Hard,
    neededTokens: { Black: 7 },
  },
  {
    color: StandardColor.White,
    points: 4,
    level: Level.Hard,
    neededTokens: { Black: 6, White: 3, Red: 3 },
  },
  {
    color: StandardColor.White,
    points: 5,
    level: Level.Hard,
    neededTokens: { Black: 7, White: 3 },
  },
];

const GREEN_DEVELOPMENT_CARDS: {
  color: StandardColor.Green;
  points: 0 | 1 | 2 | 3 | 4 | 5;
  neededTokens: PartialRecord<StandardColor, number>;
  level: Level;
}[] = [
  {
    color: StandardColor.Green,
    points: 0,
    neededTokens: { Black: 1, Blue: 1, White: 1, Red: 1 },
    level: Level.Easy,
  },
  {
    color: StandardColor.Green,
    points: 0,
    level: Level.Easy,
    neededTokens: { Black: 2, Blue: 1, White: 1, Red: 1 },
  },
  {
    color: StandardColor.Green,
    points: 0,
    level: Level.Easy,
    neededTokens: { Black: 2, Blue: 1, Red: 2 },
  },
  {
    color: StandardColor.Green,
    points: 0,
    level: Level.Easy,
    neededTokens: { Blue: 3, White: 1, Green: 1 },
  },
  {
    color: StandardColor.Green,
    points: 0,
    level: Level.Easy,
    neededTokens: { Blue: 1, White: 2 },
  },
  {
    color: StandardColor.Green,
    points: 0,
    level: Level.Easy,
    neededTokens: { Blue: 2, Red: 2 },
  },
  {
    color: StandardColor.Green,
    points: 0,
    level: Level.Easy,
    neededTokens: { Red: 3 },
  },
  {
    color: StandardColor.Green,
    points: 1,
    level: Level.Easy,
    neededTokens: { Black: 4 },
  },
  {
    color: StandardColor.Green,
    points: 1,
    level: Level.Medium,
    neededTokens: { White: 3, Green: 2, Red: 3 },
  },
  {
    color: StandardColor.Green,
    points: 1,
    level: Level.Medium,
    neededTokens: { Black: 2, Blue: 3, White: 2 },
  },
  {
    color: StandardColor.Green,
    points: 2,
    level: Level.Medium,
    neededTokens: { Black: 1, Blue: 2, White: 4 },
  },
  {
    color: StandardColor.Green,
    points: 2,
    level: Level.Medium,
    neededTokens: { Blue: 5, Green: 3 },
  },
  {
    color: StandardColor.Green,
    points: 2,
    level: Level.Medium,
    neededTokens: { Green: 5 },
  },
  {
    color: StandardColor.Green,
    points: 3,
    level: Level.Medium,
    neededTokens: { Green: 6 },
  },
  {
    color: StandardColor.Green,
    points: 3,
    level: Level.Hard,
    neededTokens: { Black: 3, Blue: 3, White: 5, Red: 3 },
  },
  {
    color: StandardColor.Green,
    points: 4,
    level: Level.Hard,
    neededTokens: { Blue: 7 },
  },
  {
    color: StandardColor.Green,
    points: 4,
    level: Level.Hard,
    neededTokens: { Blue: 6, White: 3, Green: 3 },
  },
  {
    color: StandardColor.Green,
    points: 5,
    level: Level.Hard,
    neededTokens: { Blue: 7, Green: 3 },
  },
];

const RED_DEVELOPMENT_CARDS: {
  color: StandardColor.Red;
  points: 0 | 1 | 2 | 3 | 4 | 5;
  neededTokens: PartialRecord<StandardColor, number>;
  level: Level;
}[] = [
  {
    color: StandardColor.Red,
    points: 0,
    neededTokens: { Black: 1, Blue: 1, White: 1, Green: 1 },
    level: Level.Easy,
  },
  {
    color: StandardColor.Red,
    points: 0,
    level: Level.Easy,
    neededTokens: { Black: 1, Blue: 1, White: 2, Green: 1 },
  },
  {
    color: StandardColor.Red,
    points: 0,
    level: Level.Easy,
    neededTokens: { Black: 2, White: 2, Green: 1 },
  },
  {
    color: StandardColor.Red,
    points: 0,
    level: Level.Easy,
    neededTokens: { Black: 3, White: 1, Red: 1 },
  },
  {
    color: StandardColor.Red,
    points: 0,
    level: Level.Easy,
    neededTokens: { Blue: 2, Green: 1 },
  },
  {
    color: StandardColor.Red,
    points: 0,
    level: Level.Easy,
    neededTokens: { White: 2, Red: 2 },
  },
  {
    color: StandardColor.Red,
    points: 0,
    level: Level.Easy,
    neededTokens: { White: 3 },
  },
  {
    color: StandardColor.Red,
    points: 1,
    level: Level.Easy,
    neededTokens: { White: 4 },
  },
  {
    color: StandardColor.Red,
    points: 1,
    level: Level.Medium,
    neededTokens: { Black: 3, White: 2, Red: 2 },
  },
  {
    color: StandardColor.Red,
    points: 1,
    level: Level.Medium,
    neededTokens: { Black: 3, Blue: 3, Red: 2 },
  },
  {
    color: StandardColor.Red,
    points: 2,
    level: Level.Medium,
    neededTokens: { Blue: 4, White: 1, Green: 2 },
  },
  {
    color: StandardColor.Red,
    points: 2,
    level: Level.Medium,
    neededTokens: { Black: 5, White: 3 },
  },
  {
    color: StandardColor.Red,
    points: 2,
    level: Level.Medium,
    neededTokens: { Black: 5 },
  },
  {
    color: StandardColor.Red,
    points: 3,
    level: Level.Medium,
    neededTokens: { Red: 6 },
  },
  {
    color: StandardColor.Red,
    points: 3,
    level: Level.Hard,
    neededTokens: { Black: 3, Blue: 5, White: 3, Green: 3 },
  },
  {
    color: StandardColor.Red,
    points: 4,
    level: Level.Hard,
    neededTokens: { Green: 7 },
  },
  {
    color: StandardColor.Red,
    points: 4,
    level: Level.Hard,
    neededTokens: { Blue: 3, Green: 6, Red: 3 },
  },
  {
    color: StandardColor.Red,
    points: 5,
    level: Level.Hard,
    neededTokens: { Green: 7, Red: 3 },
  },
];

export class DevelopmentCard {
  color: Color;
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
    return `level: ${this.level}, color: ${this.color}, points: ${this.points}, red: ${this.neededTokens.Red}, green: ${this.neededTokens.Green}, blue: ${this.neededTokens.Blue}, white: ${this.neededTokens.White}, black: ${this.neededTokens.Black}`;
  }
}

export const ALL_DEVELOPMENT_CARDS: DevelopmentCard[] = [
  ...BLACK_DEVELOPMENT_CARDS.map((c) => new DevelopmentCard(c)),
  ...BLUE_DEVELOPMENT_CARDS.map((c) => new DevelopmentCard(c)),
  ...WHITE_DEVELOPMENT_CARDS.map((c) => new DevelopmentCard(c)),
  ...GREEN_DEVELOPMENT_CARDS.map((c) => new DevelopmentCard(c)),
  ...RED_DEVELOPMENT_CARDS.map((c) => new DevelopmentCard(c)),
];
