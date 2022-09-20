import { CSSProperties, FC } from 'react';

import { Color, SpecialColor, StandardColor, Gems } from 'models/Color';
import { concatClasses } from 'utils/concatClasses';
import Image from 'next/image';

export interface IGemProps {
  color: Color;
  className?: string;
  style?: CSSProperties;
}

export const Gem: FC<IGemProps> = ({ color, className, style }) => {
  const border = {
    [StandardColor.Red]: 'border-red-600',
    [StandardColor.Green]: 'border-green-600',
    [StandardColor.Blue]: 'border-blue-600',
    [StandardColor.White]: 'border-white',
    [StandardColor.Black]: 'border-black',
    [SpecialColor.Gold]: 'border-yellow-300',
  }[color];
  const outline = {
    [StandardColor.Red]: 'outline-red-700',
    [StandardColor.Green]: 'outline-green-700',
    [StandardColor.Blue]: 'outline-blue-700',
    [StandardColor.White]: 'outline-slate-200',
    [StandardColor.Black]: 'outline-stone-600',
    [SpecialColor.Gold]: 'outline-yellow-500',
  }[color];

  return (
    <div
      className={concatClasses(
        'w-15 h-15 rounded-full border-4 drop-shadow-md bg-orange-100 flex justify-center items-center outline outline-[0.5px]',
        border,
        outline,
        className
      )}
      style={style}
    >
      <div
        className={concatClasses(
          'w-10 h-10',
          color === StandardColor.White && 'relative -left-1'
        )}
      >
        <Image src={Gems[color]} />
      </div>
    </div>
  );
};
