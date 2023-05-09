import { FC } from 'react';

import { Color, Gems, SpecialColor, StandardColor } from 'models/Color';
import { concatClasses } from 'utils/concatClasses';
import Image from 'next/image';

export interface IRequiredPointProps {
  color?: Color;
  number?: number;
  type?: 'card' | 'gem';
  showGem?: boolean;
  className?: string;
  onClick?: () => void;
}

export const RequiredPoint: FC<IRequiredPointProps> = ({
  color,
  number,
  type = 'gem',
  showGem = true,
  className,
  onClick,
}) => {
  const background = color
    ? {
        [StandardColor.Red]: 'bg-red-600',
        [StandardColor.Green]: 'bg-green-600',
        [StandardColor.Blue]: 'bg-blue-600',
        [StandardColor.White]: 'bg-slate-300',
        [StandardColor.Black]: 'bg-gray-900',
        [SpecialColor.Gold]: 'bg-yellow-300',
      }[color]
    : 'bg-purple-500';
  return (
    <>
      {number !== undefined ? (
        <div
          className={concatClasses('flex items-center', className)}
          onClick={onClick}
        >
          <div
            className={concatClasses(
              'flex justify-center items-center border-2 border-white',
              'text-xs text-white relative pb-0.5 select-none h-5',
              type === 'gem' ? 'rounded-full' : 'rounded',
              type !== 'gem' && color ? 'w-4' : 'w-5',
              background
            )}
          >
            {number}
          </div>
          {type === 'gem' && showGem && color && (
            <div
              className={concatClasses(
                'h-2.5 w-2.5 flex select-none',
                type === 'gem' ? '-ml-2' : '-ml-1'
              )}
            >
              <Image src={Gems[color]} />
            </div>
          )}
        </div>
      ) : null}
    </>
  );
};
