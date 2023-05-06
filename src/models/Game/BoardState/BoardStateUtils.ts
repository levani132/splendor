export const MAX_OPEN_CARDS = 4;

export const randomize = <T>(array: T[], n: number): T[] => {
  return [...array].sort((_a, _b) => 0.5 - Math.random()).slice(0, n);
};

export const getRandomCoordinates = (n: number) => {
  let { x, y } = { x: 0, y: 0 };
  const res: [number, number][] = [];
  while (n--) {
    if (Math.random() > 0.5) {
      x = Math.random() > 0.5 ? -4 : 4;
    } else {
      y = Math.random() > 0.5 ? -4 : 4;
    }
    res.push([x, y]);
  }
  return res;
};
