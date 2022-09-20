import { observer } from 'mobx-react-lite';
import { SpecialColor, StandardColor } from 'models/Color';
import { GameState } from 'models/GameState';
import { FC } from 'react';
import { Card } from './Card';
import { ClosedCards } from './ClosedCards';
import { Gem } from './Gem';
import { Gems } from './Gems';
import { NobleTile } from './NobleTile';

export interface IBoardProps {
  gameState: GameState;
}

export const Board: FC<IBoardProps> = observer(({ gameState }) => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="all-cards flex gap-4 items-center">
        <div className="flex flex-col gap-7">
          <div className="cards relative grid grid-cols-5-auto grid-rows-3 gap-4">
            <ClosedCards cards={gameState.hardCards} gameState={gameState} />
            {gameState.hardCardsOpen.map((card, i) => (
              <Card
                gameState={gameState}
                key={card.toString()}
                card={card}
                initialX={-128 - 116 * i + gameState.hardCards.length}
                onClick={() => gameState.takeHardCard(i)}
              />
            ))}
            <ClosedCards cards={gameState.mediumCards} gameState={gameState} />
            {gameState.mediumCardsOpen.map((card, i) => (
              <Card
                gameState={gameState}
                key={card.toString()}
                card={card}
                initialX={-128 - 116 * i + gameState.mediumCards.length}
                onClick={() => gameState.takeMediumCard(i)}
              />
            ))}
            <ClosedCards cards={gameState.easyCards} gameState={gameState} />
            {gameState.easyCardsOpen.map((card, i) => (
              <Card
                gameState={gameState}
                key={card.toString()}
                card={card}
                initialX={-128 - 116 * i + gameState.mediumCards.length}
                onClick={() => gameState.takeEasyCard(i)}
              />
            ))}
          </div>
          <div className="flex justify-between">
            <Gems gems={gameState.redTokens} />
            <Gems gems={gameState.greenTokens} />
            <Gems gems={gameState.blueTokens} />
            <Gems gems={gameState.whiteTokens} />
            <Gems gems={gameState.blackTokens} />
            <Gems gems={gameState.goldTokens} />
          </div>
        </div>
        <div className="nobles flex flex-col justify-between gap-1">
          {gameState.nobles.map((noble) => (
            <NobleTile key={noble.name} noble={noble} />
          ))}
        </div>
      </div>
      <div className="coins"></div>
    </div>
  );
});
