import { FC } from 'react';
import { observer } from 'mobx-react-lite';

import { useGame } from 'contexts/GameContext';
import { useOffsetTop, usePerspective, useScale } from 'utils/sizes';
import { Gems } from './Gems/Gems';
import { Cards } from './Cards/Cards';
import { Nobles } from './Nobles/Nobles';
import { Transaction } from './Gems/Transaction';

interface IBoardProps {}

export const Board: FC<IBoardProps> = observer(() => {
  const game = useGame();
  const boardState = game.boardState;
  const { perspective, rotation } = usePerspective();
  const scale = useScale();
  const top = useOffsetTop();

  const allCards = (
    <div className="cards relative grid grid-cols-5-auto grid-rows-3 gap-4 portrait:grid-flow-col portrait:grid-cols-3 portrait:grid-rows-5">
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
    <div className="flex justify-between portrait:flex-col">
      <Gems gems={boardState.redGems} />
      <Gems gems={boardState.greenGems} />
      <Gems gems={boardState.blueGems} />
      <Gems gems={boardState.whiteGems} />
      <Gems gems={boardState.blackGems} />
      <Gems gems={boardState.goldGems} />
    </div>
  );

  return (
    <div
      className="flex justify-center items-center h-screen relative z-20 pointer-events-none"
      style={{
        perspective,
      }}
    >
      <div
        className="relative"
        style={{
          transform: `scale(${scale}) rotateX(${rotation}deg)`,
          top,
        }}
      >
        <div className="all-cards flex gap-4 items-center relative z-0 portrait:flex-col-reverse pointer-events-auto">
          <div className="flex flex-col gap-7 portrait:flex-row-reverse relative z-10">
            {allCards}
            {allGems}
          </div>
          <Nobles />
        </div>
        <Transaction />
      </div>
    </div>
  );
});
