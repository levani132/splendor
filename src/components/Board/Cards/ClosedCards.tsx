import { FC } from 'react';

import { DevelopmentCard } from 'models/DevelopmentCard';
import { BoardState } from 'models/Game/BoardState/BoardState';
import { Card } from './Card';

export interface IClosedCardsProps {
  cards: DevelopmentCard[];
  boardState: BoardState;
}

export const ClosedCards: FC<IClosedCardsProps> = ({ cards, boardState }) => {
  return (
    <div className="relative w-25 h-35">
      {cards.map((card, i) => (
        <Card
          key={card.toString()}
          card={card}
          className="absolute"
          style={{ left: `${-i / 4}px`, bottom: `${i / 2}px` }}
          closed
        />
      ))}
    </div>
  );
};
