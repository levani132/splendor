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
      Green: 4,
      Red: 4,
    },
  },
  {
    points: 3,
    name: 'Machiavelli',
    neededCards: {
      White: 4,
      Blue: 4,
    },
  },
  {
    points: 3,
    name: 'Isabel of Castille',
    neededCards: {
      White: 4,
      Black: 4,
    },
  },
  {
    points: 3,
    name: 'Soliman the Magnificent',
    neededCards: {
      Blue: 4,
      Green: 4,
    },
  },
  {
    points: 3,
    name: 'Henry VIII',
    neededCards: {
      Black: 4,
      Red: 4,
    },
  },
  {
    points: 3,
    name: 'Charles Quint',
    neededCards: {
      Black: 3,
      White: 3,
      Red: 3,
    },
  },
  {
    points: 3,
    name: 'Catherine of Medicis',
    neededCards: {
      Green: 3,
      Blue: 3,
      Red: 3,
    },
  },
  {
    points: 3,
    name: 'Anne of Brittany',
    neededCards: {
      White: 3,
      Green: 3,
      Blue: 3,
    },
  },
  {
    points: 3,
    name: 'Elisabeth of Austria',
    neededCards: {
      White: 3,
      Black: 3,
      Blue: 3,
    },
  },
  {
    points: 3,
    name: 'Francis I od France',
    neededCards: {
      Black: 3,
      Green: 3,
      Red: 3,
    },
  },
];

export interface Noble {
  points: 3;
  neededCards: PartialRecord<StandardColor, number>;
  name: typeof NOBLE_NAMES[number];
}
