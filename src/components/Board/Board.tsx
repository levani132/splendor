import { FC } from 'react';
import { observer } from 'mobx-react-lite';

import { Gems } from './Gems/Gems';
import { NobleTile } from './Nobles/NobleTile';
import { Cards } from './Cards/Cards';
import { useGame } from 'contexts/GameContext';
import { Gem } from './Gems/Gem';

export interface IBoardProps {}

export const Board: FC<IBoardProps> = observer(() => {
  const game = useGame();
  const boardState = game.boardState;

  return (
    <div className="flex justify-center items-center h-[100vh] relative">
      <div className="all-cards flex gap-4 items-center">
        <div className="flex flex-col gap-7">
          <div className="cards relative grid grid-cols-5-auto grid-rows-3 gap-4">
            <Cards
              cards={boardState.hardCards}
              openCards={boardState.hardCardsOpen}
            />
            <Cards
              cards={boardState.mediumCards}
              openCards={boardState.mediumCardsOpen}
            />
            <Cards
              cards={boardState.easyCards}
              openCards={boardState.easyCardsOpen}
            />
          </div>
          <div className="flex justify-between">
            <Gems gems={boardState.redTokens} />
            <Gems gems={boardState.greenTokens} />
            <Gems gems={boardState.blueTokens} />
            <Gems gems={boardState.whiteTokens} />
            <Gems gems={boardState.blackTokens} />
            <Gems gems={boardState.goldTokens} />
          </div>
        </div>
        <div className="nobles flex flex-col justify-between gap-1">
          {boardState.nobles.map((noble) => (
            <NobleTile key={noble.name} noble={noble} />
          ))}
        </div>
      </div>
      {boardState.transaction.length ? (
        <div className="coins absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="shadow-extra-overlay absolute top-1/2 left-1/2 w-0 h-0" />
          <div className="coins flex gap-1">
            {boardState.transaction.map((token, i) => (
              <Gem key={i} color={token.color} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
});
