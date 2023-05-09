import { FC, useCallback, useMemo, useState } from 'react';

import { RequiredPoint } from 'components/shared/RequiredPoints/RequiredPoint';
import { Color } from 'models/Color';
import { DevelopmentCard } from 'models/DevelopmentCard';
import { Card } from 'components/Board/Cards/Card';
import { observer } from 'mobx-react-lite';
import { concatClasses } from 'utils/concatClasses';
import { Direction } from 'models/Direction';

interface MiniCardProps {
  color: Color;
  cards: DevelopmentCard[];
  direction: Direction;
}

const DIRECTIONS = {
  [Direction.TOP]: 'justify-start left-1/2 -translate-x-1/2 top-0',
  [Direction.BOTTOM]: 'justifx-end left-1/2 -translate-x-1/2 bottom-0',
  [Direction.LEFT]: 'justify-start top-1/2 -translate-y-1/2 left-0',
  [Direction.RIGHT]: 'justify-end top-1/2 -translate-y-1/2 right-0',
};

const INNER_DIRECTIONS = {
  [Direction.TOP]: 'top-0',
  [Direction.BOTTOM]: 'bottom-0',
  [Direction.LEFT]: 'left-0',
  [Direction.RIGHT]: 'right-0',
};

export const MiniCard: FC<MiniCardProps> = observer(
  ({ color, cards, direction }) => {
    const isVertical = useMemo(() => direction % 2 === 1, [direction]);
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = useCallback(() => setHovered(true), []);
    const handleMouseLeave = useCallback(() => setHovered(false), []);

    return (
      <div
        className={concatClasses(
          'flex items-end justify-center relative',
          !!cards.length && 'group'
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div>
          <RequiredPoint color={color} number={cards.length} type="card" />
        </div>
        <div
          className={concatClasses(
            'absolute',
            'flex gap-2 z-10',
            'invisible group-hover:visible',
            'w-4 h-5',
            'group-hover:w-25',
            'transition-all',
            'overflow-hidden',
            DIRECTIONS[direction],
            isVertical ? '' : 'flex-col'
          )}
          style={{
            height: hovered ? 140 + (cards.length - 1) * 36 : 20,
          }}
        >
          <div
            className={concatClasses(
              'absolute w-25 overflow-hidden',
              isVertical && 'top-1/2 -translate-y-1/2',
              !isVertical && 'left-1/2 -translate-x-1/2',
              INNER_DIRECTIONS[direction]
            )}
            style={{ height: 140 + (cards.length - 1) * 36 }}
          >
            {cards.map((card, index) => (
              <Card
                key={card.toString()}
                card={card}
                scaleOnHover={false}
                style={{
                  bottom: direction < 2 ? `${index * 36}px` : '',
                  top: direction >= 2 ? `${index * 36}px` : '',
                  zIndex: direction < 2 ? cards.length - index : index,
                }}
                className="absolute hover:!z-20"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
);
