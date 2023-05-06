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
        number={neededColors.red}
        type={type}
      />
      <RequiredPoint
        color={StandardColor.Green}
        number={neededColors.green}
        type={type}
      />
      <RequiredPoint
        color={StandardColor.Blue}
        number={neededColors.blue}
        type={type}
      />
      <RequiredPoint
        color={StandardColor.White}
        number={neededColors.white}
        type={type}
      />
      <RequiredPoint
        color={StandardColor.Black}
        number={neededColors.black}
        type={type}
      />
    </div>
  );
};
