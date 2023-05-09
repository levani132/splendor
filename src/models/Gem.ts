import { Color } from './Color';
import { getRandomCoordinates } from './Game/BoardState/BoardStateUtils';

export class Gem {
  color: Color;
  left: number;
  bottom: number;

  static createGem(color: Color): Gem {
    const [[x, y]] = getRandomCoordinates(1);
    return { color, left: x, bottom: y };
  }
}
