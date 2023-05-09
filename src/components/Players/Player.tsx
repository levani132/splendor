import { FC, useMemo } from 'react';
import { observer } from 'mobx-react-lite';

import { Player as PlayerModel } from 'models/Game/Player/Player';
import { SpecialColor, StandardColor } from 'models/Color';
import { Direction } from 'models/Direction';
import { MiniCard } from './MiniCard';
import { MiniGem } from './MiniGem';
import { concatClasses } from 'utils/concatClasses';
import { MiniNoble } from './MiniNoble';

const DIRECTIONS: Record<Direction, string> = [
  'justify-center items-end',
  'justify-start items-center',
  'justify-center items-start',
  'justify-end items-center',
];

interface PlayerProps {
  player: PlayerModel;
  direction: Direction;
  isCurrentPlayer: boolean;
}

export const Player: FC<PlayerProps> = observer(
  ({ player, direction, isCurrentPlayer }) => {
    const isVertical = useMemo(() => direction % 2 === 1, [direction]);
    const shouldReverse = useMemo(() => direction > 1, [direction]);
    const flexVerticalDirection = useMemo(
      () =>
        isVertical
          ? shouldReverse
            ? 'flex-col-reverse items-end'
            : 'flex-col items-start'
          : shouldReverse
          ? 'flex-row-reverse items-start'
          : 'items-end',
      [isVertical]
    );
    const flexHorizontalDirection = useMemo(
      () =>
        !isVertical
          ? shouldReverse
            ? 'flex-col'
            : 'flex-col-reverse'
          : shouldReverse
          ? 'flex-row-reverse'
          : '',
      [isVertical]
    );

    return (
      <div
        className={concatClasses(
          `absolute pointer-events-none flex inset-0`,
          DIRECTIONS[direction]
        )}
      >
        <div
          className={concatClasses(
            'relative pointer-events-auto flex gap-1 justify-start',
            flexHorizontalDirection
          )}
        >
          <div
            className={concatClasses(
              'w-full h-0 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
              isCurrentPlayer && 'shadow-extra-overlay shadow-amber-300'
            )}
          ></div>
          <div className={concatClasses('flex gap-10', flexVerticalDirection)}>
            <MiniCard
              color={SpecialColor.Gold}
              direction={direction}
              cards={player.bookedCards}
            />
            <div
              className={concatClasses(
                'relative pointer-events-auto flex gap-1 justify-start',
                flexHorizontalDirection
              )}
            >
              <div
                className={`cards flex gap-1 justify-around ${flexVerticalDirection}`}
              >
                <MiniCard
                  color={StandardColor.Red}
                  cards={player.redDevelopmentCards}
                  direction={direction}
                />
                <MiniCard
                  color={StandardColor.Green}
                  cards={player.greenDevelopmentCards}
                  direction={direction}
                />
                <MiniCard
                  color={StandardColor.Blue}
                  cards={player.blueDevelopmentCards}
                  direction={direction}
                />
                <MiniCard
                  color={StandardColor.White}
                  cards={player.whiteDevelopmentCards}
                  direction={direction}
                />
                <MiniCard
                  color={StandardColor.Black}
                  cards={player.blackDevelopmentCards}
                  direction={direction}
                />
              </div>
              <div
                className={`gems flex gap-1 justify-around ${flexVerticalDirection}`}
              >
                <MiniGem color={StandardColor.Red} gems={player.redGems} />
                <MiniGem color={StandardColor.Green} gems={player.greenGems} />
                <MiniGem color={StandardColor.Blue} gems={player.blueGems} />
                <MiniGem color={StandardColor.White} gems={player.whiteGems} />
                <MiniGem color={StandardColor.Black} gems={player.blackGems} />
                <MiniGem color={SpecialColor.Gold} gems={player.goldGems} />
              </div>
            </div>
            <MiniNoble direction={direction} nobles={player.nobles} />
          </div>
        </div>
      </div>
    );
  }
);
