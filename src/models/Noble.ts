import { PartialRecord } from 'utils/PartialRecord';
import { StandardColor } from './Color';

export const NOBLE_NAMES = [
  'Mary Stuart',
  'Machiavelli',
  'Isabel of Castille',
  'Soliman the Magnificent',
  'Henry VIII',
  'Charles Quint',
  'Catherine of Medicis',
  'Anne of Brittany',
  'Elisabeth of Austria',
  'Francis I od France',
] as const;

export const NOBLE_TILES: Noble[] = [
  {
    points: 3,
    name: 'Mary Stuart',
    neededCards: {
      green: 4,
      red: 4,
    },
  },
  {
    points: 3,
    name: 'Machiavelli',
    neededCards: {
      white: 4,
      blue: 4,
    },
  },
  {
    points: 3,
    name: 'Isabel of Castille',
    neededCards: {
      white: 4,
      black: 4,
    },
  },
  {
    points: 3,
    name: 'Soliman the Magnificent',
    neededCards: {
      blue: 4,
      green: 4,
    },
  },
  {
    points: 3,
    name: 'Henry VIII',
    neededCards: {
      black: 4,
      red: 4,
    },
  },
  {
    points: 3,
    name: 'Charles Quint',
    neededCards: {
      black: 3,
      white: 3,
      red: 3,
    },
  },
  {
    points: 3,
    name: 'Catherine of Medicis',
    neededCards: {
      green: 3,
      blue: 3,
      red: 3,
    },
  },
  {
    points: 3,
    name: 'Anne of Brittany',
    neededCards: {
      white: 3,
      green: 3,
      blue: 3,
    },
  },
  {
    points: 3,
    name: 'Elisabeth of Austria',
    neededCards: {
      white: 3,
      black: 3,
      blue: 3,
    },
  },
  {
    points: 3,
    name: 'Francis I od France',
    neededCards: {
      black: 3,
      green: 3,
      red: 3,
    },
  },
];

export interface Noble {
  points: 3;
  neededCards: PartialRecord<StandardColor, number>;
  name: (typeof NOBLE_NAMES)[number];
}
