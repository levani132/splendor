import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';

import { Board } from 'components/Board';
import { Game as GameModel } from 'models/GameState';

export const getServerSideProps = () => {
  return {
    props: {
      game: JSON.parse(JSON.stringify(new GameModel(4))),
    },
  };
};

let game;

const Game = ({ game: gameProp }) => {
  useEffect(() => {
    game = new GameModel(gameProp);
  }, []);
  return <div>{game && <Board gameState={game.gameState} />}</div>;
};

export default observer(Game);
