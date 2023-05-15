import { FC } from 'react';

import { GameContext } from 'contexts/GameContext';
import { Game as GameModel } from 'models/Game/Game';
import { Board } from './Board/Board';
import { Logs } from './Logs';
import { Players } from './Players/Players';
import { BoardBackground } from './Board/BoardBackground';
import { useWindowSize } from 'utils/useWindowSize';

interface GameProps {
  game: GameModel;
}

export const Game: FC<GameProps> = ({ game }) => {
  const { width, height } = useWindowSize();
  return (
    <GameContext.Provider value={game}>
      <div className="w-screen h-screen fixed pb-4">
        <BoardBackground />
        <Board />
        <Players />
        <Logs />
        <div className="absolute inset-0 z-40 text-xl">
          {width}x{height}
        </div>
      </div>
    </GameContext.Provider>
  );
};
