import { FC } from 'react';

import { Gem as GemModel } from 'models/Gem';
import { useGame } from 'contexts/GameContext';
import { Gem } from './Gem';

export interface IGemsProps {
  gems: GemModel[];
}

export const Gems: FC<IGemsProps> = ({ gems }) => {
  const game = useGame();

  return (
    <div className="relative flex gap-2">
      <div className="relative w-15 h-15">
        {gems.map((gem, i) => {
          const prev = gems[i - 1] ?? { bottom: 0, left: 0 };
          return (
            <Gem
              key={i}
              color={gem.color}
              className="absolute cursor-pointer"
              style={{
                bottom: `${prev.bottom + gem.bottom}px`,
                left: `${prev.left + gem.left}px`,
              }}
              onClick={() => game.takeGem(gem.color)}
            />
          );
        })}
      </div>
      <div className="self-end select-none">{gems.length}</div>
    </div>
  );
};
