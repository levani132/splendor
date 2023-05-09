import {
  CSSProperties,
  FC,
  ReactElement,
  useEffect,
  useMemo,
  useState,
} from 'react';
import Image from 'next/image';

import { concatClasses } from 'utils/concatClasses';
import { DevelopmentCard } from 'models/DevelopmentCard';
import { Level } from 'models/Level';
import { Gems, StandardColor } from 'models/Color';
import { RequiredPoints } from '../../shared/RequiredPoints/RequiredPoints';

import { HandIcon } from './HandIcon';

export interface ICardProps {
  card?: DevelopmentCard;
  initialX?: number;
  initialY?: number;
  closed?: boolean;
  className?: string;
  style?: CSSProperties;
  /**
   * Defaults to true.
   */
  scaleOnHover?: boolean;
  onClick?: () => void;
  onHandClick?: () => void;
}

export const Card: FC<ICardProps> = ({
  card,
  closed = false,
  className,
  style,
  initialX = 0,
  initialY = 0,
  scaleOnHover = true,
  onClick,
  onHandClick,
}) => {
  // 5x7
  const closedBackground =
    card &&
    {
      [Level.Easy]: 'bg-green-400',
      [Level.Medium]: 'bg-amber-500',
      [Level.Hard]: 'bg-blue-400',
    }[card.level];
  const [animationStyles, setAnimationStyles] = useState<CSSProperties>(
    closed || !card
      ? {}
      : {
          transform: `translateX(${initialX}px) translateY(${initialY}px)`,
        }
  );
  const [tempClosed, setTempClosed] = useState(!closed);

  useEffect(() => {
    setAnimationStyles(
      closed
        ? {}
        : { transform: 'translateX(0) translateY(0) rotateY(180deg) scale(1)' }
    );
    const timeout = setTimeout(() => {
      if (!closed) setTempClosed(false);
    }, 150);
    return () => clearTimeout(timeout);
  }, [closed]);

  const openBackground =
    card &&
    {
      [StandardColor.Red]: 'bg-red-400',
      [StandardColor.Green]: 'bg-green-400',
      [StandardColor.Blue]: 'bg-blue-400',
      [StandardColor.Black]: 'bg-gray-900',
      [StandardColor.White]: 'bg-slate-300',
    }[card.color];

  const wrapperBackground = useMemo(
    () => (closed || tempClosed ? 'bg-white' : ''),
    [closed, tempClosed]
  );

  const handleMouseEnter = () => {
    setAnimationStyles(
      closed
        ? {}
        : {
            transform: `translateX(0) translateY(0) rotateY(180deg) scale(${
              scaleOnHover ? '1.1' : '1'
            })`,
          }
    );
  };

  const handleMouseLeave = () => {
    setAnimationStyles(
      closed
        ? {}
        : {
            transform: 'translateX(0) translateY(0) rotateY(180deg) scale(1)',
          }
    );
  };

  let content: ReactElement | null = null;

  if (card) {
    content = (
      <div
        className={concatClasses(
          'w-full h-full flex flex-col rotate-y-180 cursor-pointer',
          openBackground
        )}
      >
        <div className="h-9 bg-neutral-300/50 flex justify-between items-center p-2">
          <div className="font-pacifico relative -top-1 text-white select-none">
            {card.points || ''}
          </div>
          <div className="h-5 w-5 select-none">
            <Image src={Gems[card.color]} alt="" aria-hidden />
          </div>
        </div>
        <div className="flex justify-between h-full items-end">
          <RequiredPoints
            className="grow-3 justify-end p-1 px-1.5"
            neededColors={card.neededGems}
          />
          {scaleOnHover && (
            <div className="flex flex-col justify-end items-end p-3 h-full transition-opacity duration-300 opacity-0 group-hover:opacity-100">
              <HandIcon
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onHandClick?.();
                }}
              />
            </div>
          )}
        </div>
      </div>
    );

    if (closed || tempClosed) {
      content = (
        <div
          className={concatClasses(
            'w-full h-full flex flex-col justify-center items-end gap-2 p-2 rounded',
            closedBackground
          )}
        >
          <div className="flex-1 flex items-center text-yellow-300 font-pacifico select-none">
            Splendor
          </div>
          <div className="w-full flex gap-2 justify-center">
            {new Array(
              { [Level.Easy]: 1, [Level.Medium]: 2, [Level.Hard]: 3 }[
                card.level
              ]
            )
              .fill(0)
              .map((_x, i) => (
                <div
                  key={i}
                  className="h-1.5 w-1.5 bg-white rounded-full"
                ></div>
              ))}
          </div>
        </div>
      );
    }
  }

  return (
    <div
      className={concatClasses(
        'w-25 h-35',
        card && 'drop-shadow-md rounded-lg overflow-hidden',
        card &&
          'transition-transform cursor-pointer duration-300 ease-linear group',
        card && wrapperBackground,
        className,
        (closed || tempClosed) && 'p-2'
      )}
      style={{ ...style, ...animationStyles, ...{} }}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {content}
    </div>
  );
};
