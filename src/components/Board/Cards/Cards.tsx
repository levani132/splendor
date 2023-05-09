import { FC } from 'react';

import { ClosedCards } from 'components/Board/Cards/ClosedCards';
import { BoardState } from 'models/Game/BoardState/BoardState';
import { DevelopmentCard } from 'models/DevelopmentCard';
import { Card } from 'components/Board/Cards/Card';
import { useGame } from 'contexts/GameContext';

interface CardsProps {
  cards: DevelopmentCard[];
  openCards: (DevelopmentCard | undefined)[];
}

export const Cards: FC<CardsProps> = ({ cards, openCards }) => {
  const game = useGame();
  const boardState = game.boardState;
  return (
    <>
      <ClosedCards cards={cards} boardState={boardState} />
      {openCards.map((card, i) => (
        <Card
          key={card?.toString() ?? i}
          card={card}
          initialX={-128 - 116 * i + cards.length}
          initialY={-cards.length / 2}
          onClick={() => card && game.takeCard(card.level, i)}
          onHandClick={() => card && game.bookCard(card.level, i)}
        />
      ))}
    </>
  );
};
