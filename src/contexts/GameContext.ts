import { createContext, useContext } from 'react';

import { Game } from 'models/Game/Game';

export const GameContext = createContext(new Game(4));

export const useGame = () => useContext(GameContext);
