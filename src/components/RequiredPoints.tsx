import { FC } from 'react';

import { StandardColor } from 'models/Color';
import { PartialRecord } from 'utils/PartialRecord';
import { concatClasses } from 'utils/concatClasses';
import { RequiredPoint } from './RequiredPoint';

export interface IRequiredPointsProps {
  neededColors: PartialRecord<StandardColor, number>;
  type?: 'card' | 'gem';
  className?: string;
}

export const RequiredPoints: FC<IRequiredPointsProps> = ({
  neededColors,
  type = 'gem',
  className,
}) => {
  return (
    <div
      className={concatClasses('flex flex-col gap-1 font-pacifico', className)}
    >
      <RequiredPoint
        color={StandardColor.Red}
        number={neededColors.Red}
        type={type}
      />
      <RequiredPoint
        color={StandardColor.Green}
        number={neededColors.Green}
        type={type}
      />
      <RequiredPoint
        color={StandardColor.Blue}
        number={neededColors.Blue}
        type={type}
      />
      <RequiredPoint
        color={StandardColor.White}
        number={neededColors.White}
        type={type}
      />
      <RequiredPoint
        color={StandardColor.Black}
        number={neededColors.Black}
        type={type}
      />
    </div>
  );
};
