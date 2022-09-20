export const concatClasses: (
  ...classes: (string | undefined | null | false)[]
) => string = (...classes) => {
  return classes.filter((className) => !!className).join(' ');
};
