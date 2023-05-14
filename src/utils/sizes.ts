import { useMemo } from 'react';
import { useWindowSize } from './useWindowSize';

class Size {
  constructor(
    public width: number,
    public height: number,
    public depth?: number
  ) {}
}

// Sizes in pixels
const LANDSCAPE_LIMITS = new Size(708, 540);
const PORTRAIT_LIMITS = new Size(516, 880);

// Perspective in pixels
const PERSPECTIVE = 200;

// rotation in degrees
const ROTATION = 2;

export function useScale(): number {
  const { width = 1, height = 1, isLandscape } = useWindowSize();

  const scale = useMemo(
    () =>
      isLandscape
        ? Math.min(
            (width - 92) / LANDSCAPE_LIMITS.width,
            (height - 100) / LANDSCAPE_LIMITS.height,
            1
          )
        : Math.min(
            (width - 74) / PORTRAIT_LIMITS.width,
            (height - 110) / PORTRAIT_LIMITS.height,
            1
          ),
    [width, height, isLandscape]
  );

  return scale;
}

interface Perspective {
  /**
   * Rotation in degrees.
   */
  rotation: number;

  /**
   * perspective in pixels.
   */
  perspective: number;
}

export function usePerspective(): Perspective {
  return {
    rotation: ROTATION,
    perspective: PERSPECTIVE,
  };
}

/**
 * Returns width and height of board without scaling.
 */
export function useBoardSize(): Size {
  const { isLandscape } = useWindowSize();

  return isLandscape
    ? new Size(LANDSCAPE_LIMITS.width, LANDSCAPE_LIMITS.height)
    : new Size(PORTRAIT_LIMITS.width, PORTRAIT_LIMITS.height);
}

/**
 * Returns what should be top offset (probably negative number) to place rotated object in the center.
 */
export function useOffsetTop(): number {
  const { height } = useBoardSize();
  const depth = (Math.sin((ROTATION / 180) * Math.PI) * height) / 2;
  const rotatedRealHeight = (Math.cos((ROTATION / 180) * Math.PI) * height) / 2;
  const bottomHeight =
    (rotatedRealHeight / (PERSPECTIVE - depth)) * PERSPECTIVE;
  const topHeight = (rotatedRealHeight / (PERSPECTIVE + depth)) * PERSPECTIVE;

  return (topHeight - bottomHeight) / 2;
}
