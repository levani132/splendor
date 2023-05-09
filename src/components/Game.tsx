import { FC } from 'react';

import { GameContext } from 'contexts/GameContext';
import { Game as GameModel } from 'models/Game/Game';
import { Board } from './Board/Board';
import { Logs } from './Logs';
import { Players } from './Players/Players';

interface GameProps {
  game: GameModel;
}

export const Game: FC<GameProps> = ({ game }) => {
  return (
    <GameContext.Provider value={game}>
      <div>
        <Board />
        <Players />
        <Logs />
      </div>
    </GameContext.Provider>
  );
};
