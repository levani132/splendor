import { FC } from 'react';

import { Token } from 'models/Token';
import { Gem } from './Gem';

export interface IGemsProps {
  gems: Token[];
}

export const Gems: FC<IGemsProps> = ({ gems }) => {
  return (
    <div className="relative flex gap-2">
      <div className="relative w-15 h-15">
        {gems.map((gem, i) => {
          return (
            <Gem
              key={i}
              color={gem.color}
              className="absolute"
              style={{
                bottom: `${gem.bottom}px`,
                left: `${gem.left}px`,
              }}
            />
          );
        })}
      </div>
      <div className="self-end">{gems.length}</div>
    </div>
  );
};
