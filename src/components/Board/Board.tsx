import { FC } from 'react';
import { observer } from 'mobx-react-lite';

import { useGame } from 'contexts/GameContext';
import { COLORS } from 'models/Color';
import { Gems } from './Gems/Gems';
import { NobleTile } from './Nobles/NobleTile';
import { Cards } from './Cards/Cards';
import { Gem } from './Gems/Gem';
import { Nobles } from './Nobles/Nobles';

export interface IBoardProps {}

export const Board: FC<IBoardProps> = observer(() => {
  const game = useGame();
  const boardState = game.boardState;

  const allCards = (
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
  );

  const allGems = (
    <div className="flex justify-between">
      <Gems gems={boardState.redGems} />
      <Gems gems={boardState.greenGems} />
      <Gems gems={boardState.blueGems} />
      <Gems gems={boardState.whiteGems} />
      <Gems gems={boardState.blackGems} />
      <Gems gems={boardState.goldGems} />
    </div>
  );

  const transactionsMaybe = boardState.transaction.length ? (
    <div className="coins absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="shadow-extra-overlay absolute top-1/2 left-1/2 w-0 h-0" />
      <div className="coins flex gap-1">
        {boardState.transaction.map((gem, i) => (
          <Gem key={i} color={gem.color} />
        ))}
      </div>
    </div>
  ) : null;

  return (
    <div className="flex justify-center items-center h-screen relative z-10 pointer-events-none perspective">
      <div className="rounded-[200px] bg-lime-900 py-20 px-64 border-[100px] border-black pointer-events-auto">
        <div className="all-cards flex gap-4 items-center">
          <div className="flex flex-col gap-7">
            {allCards}
            {allGems}
          </div>
          <Nobles />
        </div>
        {transactionsMaybe}
      </div>
    </div>
  );
});
