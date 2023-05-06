import { FC } from 'react';

import { Noble } from 'models/Noble';
import { RequiredPoints } from '../../shared/RequiredPoints/RequiredPoints';

export interface INobleTileProps {
  noble: Noble;
}

export const NobleTile: FC<INobleTileProps> = ({ noble }) => {
  return (
    <div className="w-25 h-25 flex bg-purple-500 rounded-lg overflow-hidden drop-shadow-md">
      <div className="w-9 bg-neutral-300/50 flex flex-col justify-between items-center pb-1">
        <div className="font-pacifico text-white">{noble.points}</div>
        <RequiredPoints
          neededColors={noble.neededCards}
          className="items-center"
          type="card"
        />
      </div>
    </div>
  );
};
