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
      const width = document.documentElement.clientWidth;
      const height = document.documentElement.clientHeight;
      setWindowSize({
        width,
        height,
        isPortrait: height > width,
        isLandscape: height <= width,
      });
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowSize;
}
