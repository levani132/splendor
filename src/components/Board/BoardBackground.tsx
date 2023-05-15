import { FC } from 'react';

import {
  useBoardSize,
  useOffsetTop,
  usePerspective,
  useScale,
} from 'utils/sizes';

export const BoardBackground: FC = () => {
  const { perspective, rotation } = usePerspective();
  const { width, height } = useBoardSize();
  const scale = useScale();
  const top = useOffsetTop();

  return (
    <div
      className="absolute inset-0 flex justify-center items-center h-screen px-52 py-64"
      style={{ perspective: `${perspective}px` }}
    >
      <div
        className="relative box-content rounded-[200px] py-8 px-16 border-[100px] border-black board w-full h-full"
        style={{
          transform: `scale(${scale}) rotateX(${rotation}deg)`,
          top,
          minWidth: width,
          minHeight: height,
        }}
      >
        <div style={{ width, height }} />
      </div>
    </div>
  );
};
