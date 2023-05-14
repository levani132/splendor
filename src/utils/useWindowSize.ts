import { useEffect, useState } from 'react';

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState<{
    width?: number;
    height?: number;
    isPortrait: boolean;
    isLandscape: boolean;
  }>({
    width: undefined,
    height: undefined,
    isPortrait: false,
    isLandscape: false,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        isPortrait: window.innerHeight > window.innerWidth,
        isLandscape: window.innerHeight <= window.innerWidth,
      });
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowSize;
}
