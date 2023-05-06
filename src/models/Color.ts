import red from 'public/gems/red.png';
import green from 'public/gems/green.png';
import blue from 'public/gems/blue.png';
import white from 'public/gems/white.png';
import black from 'public/gems/black.png';
import gold from 'public/gems/gold.png';

export enum StandardColor {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
  White = 'white',
  Black = 'black',
}

export const STANDARD_COLORS = [
  StandardColor.Red,
  StandardColor.Green,
  StandardColor.Blue,
  StandardColor.White,
  StandardColor.Black,
];

export enum SpecialColor {
  Gold = 'gold',
}

export type Color = StandardColor | SpecialColor;

export const COLORS: Color[] = [...STANDARD_COLORS, SpecialColor.Gold];

export const Gems = {
  [StandardColor.Red]: red,
  [StandardColor.Green]: green,
  [StandardColor.Blue]: blue,
  [StandardColor.White]: white,
  [StandardColor.Black]: black,
  [SpecialColor.Gold]: gold,
};
