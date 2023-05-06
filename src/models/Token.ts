import { Color } from './Color';
import { getRandomCoordinates } from './Game/BoardState/BoardStateUtils';

export class Token {
  color: Color;
  left: number;
  bottom: number;

  static createToken(color: Color): Token {
    const [[x, y]] = getRandomCoordinates(1);
    return { color, left: x, bottom: y };
  }
}
