import { RequiredPoint } from 'components/shared/RequiredPoints/RequiredPoint';
import { useGame } from 'contexts/GameContext';
import { observer } from 'mobx-react-lite';
import { Color } from 'models/Color';
import { Direction } from 'models/Direction';
import { Gem } from 'models/Gem';
import { FC, useCallback } from 'react';

interface MiniGemProps {
  color: Color;
  gems: Gem[];
}

export const MiniGem: FC<MiniGemProps> = observer(({ color, gems }) => {
  const game = useGame();

  const handleClick = useCallback(() => game.returnGem(color), []);

  return (
    <RequiredPoint
      color={color}
      number={gems.length}
      type="gem"
      showGem={false}
      className="cursor-pointer hover:scale-110"
      onClick={handleClick}
    />
  );
});
