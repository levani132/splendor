import { FC, MouseEventHandler } from 'react';
import Image from 'next/image';

import { SpecialColor } from 'models/Color';
import { Gem } from '../Gems/Gem';

import hand from 'public/icons/hand.png';
import coinHand from 'public/icons/coin-hand.png';
import { useGame } from 'contexts/GameContext';
import { observer } from 'mobx-react-lite';

interface HandIconProps {
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export const HandIcon: FC<HandIconProps> = observer(({ onClick }) => {
  const game = useGame();

  return (
    <div
      className="relative w-8 h-8 cursor-pointer hover:h-9 hover:w-9 transition-all"
      onClick={onClick}
    >
      <Image
        src={hand}
        className="hover:drop-shadow-lg absolute left-0 top-0"
      />
      {game.boardState.goldGems?.length ? (
        <Gem
          color={SpecialColor.Gold}
          className="absolute left-1/2 -translate-x-1/2 top-0 !w-1/3 !h-1/3 !border-[2px] outline-0 leading-[0]"
        />
      ) : null}
    </div>
  );
});
