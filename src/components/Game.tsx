import { FC } from 'react';

import { GameContext } from 'contexts/GameContext';
import { Game as GameModel } from 'models/Game/Game';
import { Board } from './Board/Board';
import { Logs } from './Logs';
import { Players } from './Players/Players';
import { BoardBackground } from './Board/BoardBackground';

interface GameProps {
  game: GameModel;
}

export const Game: FC<GameProps> = ({ game }) => {
  return (
    <GameContext.Provider value={game}>
      <div className="w-screen h-screen fixed pb-4">
        <BoardBackground />
        <Board />
        <Players />
        <Logs />
      </div>
    </GameContext.Provider>
  );
};
