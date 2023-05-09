import { CSSProperties, FC, useCallback, useMemo } from 'react';

import { Noble } from 'models/Noble';
import { RequiredPoints } from '../../shared/RequiredPoints/RequiredPoints';
import { observer } from 'mobx-react-lite';
import { useGame } from 'contexts/GameContext';
import { MyObject } from 'utils/MyObject';
import { concatClasses } from 'utils/concatClasses';

export interface INobleTileProps {
  noble?: Noble;
  onClick?: () => void;
  className?: string;
  style?: CSSProperties;
  glow?: boolean;
}

export const NobleTile: FC<INobleTileProps> = observer(
  ({ noble, onClick, style, className, glow = true }) => {
    const game = useGame();
    const currentPlayerCanTakeNoble = useMemo(
      () =>
        noble &&
        MyObject.entries(noble.neededCards).every(
          ([color, count]) =>
            game.currentPlayer[color + 'DevelopmentCards'].length >= count
        ),
      [noble, game.currentPlayer]
    );

    return (
      <div className={concatClasses('w-25 h-25', className)} style={style}>
        {noble ? (
          <div
            className="w-25 h-25 flex bg-purple-500 rounded-lg drop-shadow-md cursor-pointer relative"
            onClick={onClick}
          >
            {currentPlayerCanTakeNoble && glow && (
              <div className="absolute w-25 h-25 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-md shadow-amber-300 animate-pulse duration-1000 rounded-lg"></div>
            )}
            <div className="w-9 bg-neutral-300/50 flex flex-col justify-between items-center pb-1 relative z-10 rounded-l-lg">
              <div className="font-pacifico text-white select-none">
                {noble.points}
              </div>
              <RequiredPoints
                neededColors={noble.neededCards}
                className="items-center"
                type="card"
              />
            </div>
          </div>
        ) : null}
      </div>
    );
  }
);
