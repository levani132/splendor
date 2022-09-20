import { FC } from 'react';

import { Gems, StandardColor } from 'models/Color';
import { concatClasses } from 'utils/concatClasses';
import Image from 'next/image';

export interface IRequiredPointProps {
  color: StandardColor;
  number?: number;
  type?: 'card' | 'gem';
}

export const RequiredPoint: FC<IRequiredPointProps> = ({
  color,
  number,
  type = 'gem',
}) => {
  const background = {
    [StandardColor.Red]: 'bg-red-600',
    [StandardColor.Green]: 'bg-green-600',
    [StandardColor.Blue]: 'bg-blue-600',
    [StandardColor.White]: 'bg-slate-300',
    [StandardColor.Black]: 'bg-gray-900',
  }[color];
  return (
    <>
      {number && (
        <div className="flex items-center">
          <div
            className={concatClasses(
              'flex justify-center items-center border-2 border-white text-xs text-white relative pb-0.5',
              type === 'gem' ? 'h-5 w-5 rounded-full' : 'w-4 h-5 rounded',
              background
            )}
          >
            {number}
          </div>
          <div
            className={concatClasses(
              'h-2.5 w-2.5 flex',
              type === 'gem' ? '-ml-2' : '-ml-1'
            )}
          >
            {type === 'gem' && <Image src={Gems[color]} />}
          </div>
        </div>
      )}
    </>
  );
};
