import { FC } from 'react';
import { observer } from 'mobx-react-lite';

import { useGame } from 'contexts/GameContext';
import { useWindowSize } from 'utils/useWindowSize';
import { Gems } from './Gems/Gems';
import { Cards } from './Cards/Cards';
import { Nobles } from './Nobles/Nobles';
import { Transaction } from './Gems/Transaction';

export interface IBoardProps {}

export const Board: FC<IBoardProps> = observer(() => {
  const game = useGame();
  const boardState = game.boardState;
  const { width = 1, height = 1 } = useWindowSize();

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

  // 708 540
  // Orientation: landscape
  // Width: 800 // One player width 40, two 80 + 12
  // Height: 640 // One player height 44, two 88 + 12
  // 516 880
  // Orientation: portrait 590 990
  // Width: 590 // One player width 40, two 80 - 6 // 510
  // Height: 990 // One player height 44, two 88 + 22 // 902
  const scale =
    width > height
      ? Math.min((width - 92) / 708, (height - 100) / 540, 1)
      : Math.min((width - 74) / 516, (height - 110) / 880, 1);

  return (
    <div className="flex justify-center items-center h-screen relative z-10 pointer-events-none perspective">
      <div
        className="rounded-[200px] bg-lime-900 py-20 px-64 border-[100px] border-black pointer-events-auto board"
        style={{ transform: `scale(${scale}) rotateX(2deg) translateZ(-15px)` }}
      >
        <div className="all-cards flex gap-4 items-center relative z-0 portrait:flex-col-reverse">
          <div className="flex flex-col gap-7 portrait:flex-row-reverse">
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
