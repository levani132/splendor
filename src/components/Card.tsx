import { CSSProperties, FC, useEffect, useState } from 'react';
import Image from 'next/image';

import { concatClasses } from 'utils/concatClasses';
import { DevelopmentCard } from 'models/DevelopmentCard';
import { GameState } from 'models/GameState';
import { Level } from 'models/Level';
import { Gems, StandardColor } from 'models/Color';
import { RequiredPoints } from './RequiredPoints';

import hand from 'public/icons/hand.png';
import coinHand from 'public/icons/coin-hand.png';
import money from 'public/icons/money.png';
import { reaction } from 'mobx';

export interface ICardProps {
  gameState: GameState;
  card: DevelopmentCard;
  initialX?: number;
  closed?: boolean;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
  onHandClick?: () => void;
}

export const Card: FC<ICardProps> = ({
  card,
  gameState,
  closed = false,
  className,
  style,
  initialX = 0,
  onClick,
  onHandClick,
}) => {
  // 5x7
  const closedBackground = {
    [Level.Easy]: 'bg-green-400',
    [Level.Medium]: 'bg-amber-500',
    [Level.Hard]: 'bg-blue-400',
  }[card.level];
  const [animationStyles, setAnimationStyles] = useState<CSSProperties>(
    closed
      ? {}
      : {
          transform: `translateX(${initialX}px)`,
        }
  );
  const [tempClosed, setTempClosed] = useState(!closed);

  useEffect(() => {
    setAnimationStyles(
      closed ? {} : { transform: 'translateX(0) rotateY(180deg) scale(1)' }
    );
    const timeout = setTimeout(() => {
      if (!closed) setTempClosed(false);
    }, 150);
    return () => clearTimeout(timeout);
  }, [closed]);

  const openBackground = {
    [StandardColor.Red]: 'bg-red-400',
    [StandardColor.Green]: 'bg-green-400',
    [StandardColor.Blue]: 'bg-blue-400',
    [StandardColor.Black]: 'bg-gray-900',
    [StandardColor.White]: 'bg-slate-300',
  }[card.color];

  return (
    <div
      className={concatClasses(
        'w-25 h-35 bg-white drop-shadow-md rounded-lg overflow-hidden',
        'transition-transform cursor-pointer duration-300 ease-linear group',
        className,
        (closed || tempClosed) && 'p-2'
      )}
      style={{ ...style, ...animationStyles, ...{} }}
      onClick={onClick}
      onMouseEnter={() => {
        console.log('mouse enter');
        setAnimationStyles(
          closed
            ? {}
            : {
                transform: 'translateX(0) rotateY(180deg) scale(1.1)',
              }
        );
      }}
      onMouseLeave={() =>
        setAnimationStyles(
          closed
            ? {}
            : {
                transform: 'translateX(0) rotateY(180deg) scale(1)',
              }
        )
      }
    >
      {closed || tempClosed ? (
        <div
          className={concatClasses(
            'w-full h-full flex flex-col justify-center items-end gap-2 p-2 rounded',
            closedBackground
          )}
        >
          <div className="flex-1 flex items-center text-yellow-300 font-pacifico">
            Splendor
          </div>
          <div className="w-full flex gap-2 justify-center">
            {new Array(
              { [Level.Easy]: 1, [Level.Medium]: 2, [Level.Hard]: 3 }[
                card.level
              ]
            )
              .fill(0)
              .map((_x) => (
                <div className="h-1.5 w-1.5 bg-white rounded-full"></div>
              ))}
          </div>
        </div>
      ) : (
        <div
          className={concatClasses(
            'w-full h-full flex flex-col rotate-y-180 cursor-pointer',
            openBackground
          )}
        >
          <div className="h-9 bg-neutral-300/50 flex justify-between items-center p-2">
            <div className="font-pacifico relative -top-1 text-white">
              {card.points || ''}
            </div>
            <div className="h-5 w-5">
              <Image src={Gems[card.color]} alt="" aria-hidden />
            </div>
          </div>
          <div className="flex justify-between h-full items-end">
            <RequiredPoints
              className="grow-3 justify-end p-1 px-1.5"
              neededColors={card.neededTokens}
            />
            <div className="flex flex-col justify-end items-end p-3 h-full transition-opacity duration-300 opacity-0 group-hover:opacity-100">
              <div
                className="w-8 h-8 cursor-pointer hover:h-9 hover:w-9 transition-all"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onHandClick?.();
                }}
              >
                <Image
                  src={gameState.goldTokens?.length ? coinHand : hand}
                  className="hover:drop-shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
