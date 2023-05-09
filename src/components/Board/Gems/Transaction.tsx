import { useGame } from 'contexts/GameContext';
import { Gem } from './Gem';
import { observer } from 'mobx-react-lite';
import { SpecialColor, StandardColor } from 'models/Color';
import { useMemo } from 'react';

const GEM_WIDTH = 60;
const GEM_HEIGHT = GEM_WIDTH;
const GAP = 4;

const NOBLE_WIDTH = 100;
const NOBLE_GAP = 16;

const CLOSED_CARDS_WIDTH = 100;
const CARD_WIDTH = 100;
const CARDS_GAP = 16;

const CARD_HEIGHT = 140;

const GAP_BETWEEN_GEMS_AND_CARDS = 28;

const GEMS_GAP =
  ((CARD_WIDTH + CARDS_GAP) * 4 + CLOSED_CARDS_WIDTH - 6 * GEM_WIDTH - 16) / 5;

const GEM_X_PER_COLOR = {
  [StandardColor.Red]: 0,
  [StandardColor.Green]: (GEM_WIDTH + GEMS_GAP) * 1,
  [StandardColor.Blue]: (GEM_WIDTH + GEMS_GAP) * 2,
  [StandardColor.White]: (GEM_WIDTH + GEMS_GAP) * 3,
  [StandardColor.Black]: (GEM_WIDTH + GEMS_GAP) * 4,
  [SpecialColor.Gold]: (GEM_WIDTH + GEMS_GAP) * 5,
};

const BOARD_POSITION_X =
  -(
    4 * CARDS_GAP +
    4 * CARD_WIDTH +
    CLOSED_CARDS_WIDTH +
    NOBLE_GAP +
    NOBLE_WIDTH
  ) / 2;

const BOARD_POSITION_Y =
  (CARD_HEIGHT * 3 + CARDS_GAP * 2 + GAP_BETWEEN_GEMS_AND_CARDS + GEM_HEIGHT) /
  2;

export const Transaction = observer(() => {
  const game = useGame();
  const transaction = game.boardState.transaction;

  const positionXFor = useMemo(
    () =>
      new Array(transaction.length)
        .fill(0)
        .map(
          (_, i: number) =>
            BOARD_POSITION_X -
            (-(
              transaction.length * GEM_WIDTH +
              (transaction.length - 1) * GAP
            ) /
              2 +
              i * (GEM_WIDTH + GAP)) +
            GEM_X_PER_COLOR[transaction[i].color] +
            transaction[i].left
        ),
    [transaction.length]
  );

  const positionYFor = useMemo(
    () =>
      new Array(transaction.length)
        .fill(0)
        .map(
          (_, i) => BOARD_POSITION_Y - GEM_HEIGHT / 2 - transaction[i].bottom
        ),
    [transaction.length]
  );

  const transformFor = useMemo(
    () =>
      new Array(transaction.length).fill(0).map((i: number) => ({
        transform: `translateX(${positionXFor[i]}px) translateY(${positionYFor[i]}px)`,
      })),
    [transaction.length, positionXFor, positionYFor]
  );

  const width = useMemo(
    () => transaction.length * GEM_WIDTH + (transaction.length - 1) * GAP,
    [transaction.length]
  );

  return transaction.length ? (
    <div className="coins absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto z-10">
      <div className="shadow-extra-overlay absolute top-1/2 left-1/2 w-0 h-0" />
      <div
        className="coins flex gap-1 transition-all"
        style={{ width: `${width}px` }}
      >
        {transaction.map((gem, i) => (
          <Gem
            key={i}
            color={gem.color}
            baseTransformStyle={transformFor[i]}
            onClick={() => game.returnTransactionGem(i)}
          />
        ))}
      </div>
    </div>
  ) : null;
});
