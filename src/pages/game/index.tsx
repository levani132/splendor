import { useEffect, useMemo, useState } from 'react';
import { observer } from 'mobx-react-lite';

import { Board } from 'components/Board/Board';
import { Game as GameModel } from 'models/Game/Game';
import { Game as GameComponent } from 'components/Game';
import { GameContext } from 'src/contexts/GameContext';

export const getServerSideProps = () => {
  return {
    props: {
      game: JSON.parse(JSON.stringify(new GameModel(4))),
    },
  };
};

const Game = ({ game: gameParam }) => {
  const game = useMemo(() => new GameModel(gameParam), [gameParam]);
  return <GameComponent game={game} />;
};

export default observer(Game);
