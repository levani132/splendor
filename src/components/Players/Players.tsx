import { observer } from 'mobx-react-lite';

import { useGame } from 'contexts/GameContext';
import { Direction } from 'models/Direction';
import { Player } from './Player';

const DIRECTIONS = [
  Direction.BOTTOM,
  Direction.LEFT,
  Direction.TOP,
  Direction.RIGHT,
];

export const Players = observer(() => {
  const game = useGame();

  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      {game.players.map((player, i) => (
        <Player
          key={i}
          player={player}
          direction={DIRECTIONS[i]}
          isCurrentPlayer={i === game.currentPlayerIndex}
        />
      ))}
    </div>
  );
});
