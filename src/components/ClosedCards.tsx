import { FC } from 'react';

import { DevelopmentCard } from 'models/DevelopmentCard';
import { GameState } from 'models/GameState';
import { Card } from './Card';

export interface IClosedCardsProps {
  cards: DevelopmentCard[];
  gameState: GameState;
}

export const ClosedCards: FC<IClosedCardsProps> = ({ cards, gameState }) => {
  return (
    <div className="relative w-32 h-35">
      {cards.map((card, i) => (
        <Card
          key={card.toString()}
          gameState={gameState}
          card={card}
          className="absolute"
          style={{ left: `${i}px` }}
          closed
        />
      ))}
    </div>
  );
};
