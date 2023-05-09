import { useCallback } from 'react';
import { observer } from 'mobx-react-lite';

import { useGame } from 'contexts/GameContext';
import { NobleTile } from './NobleTile';

export const Nobles = observer(() => {
  const game = useGame();
  const boardState = game.boardState;

  const handleClick = useCallback(
    (noble, index) => noble && game.takeNoble(noble, index),
    []
  );

  return (
    <div className="nobles flex flex-col justify-between gap-1 portrait:flex-row">
      {boardState.nobles.map((noble, i) => (
        <NobleTile
          key={noble?.name ?? i}
          noble={noble}
          onClick={() => handleClick(noble, i)}
        />
      ))}
    </div>
  );
});
