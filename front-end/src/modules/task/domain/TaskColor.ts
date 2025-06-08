export const ensureColorIsDefined = (value: string) => {
  if (value === undefined) {
    throw new Error(`Value <Color> must be defines`);
  }

  if (value === "") {
    throw new Error(`Value <Color> not to be empty`);
  }
};

export const randomColorHex = (): string =>
  "#" +
  Math.floor(Math.random() * 16777216)
    .toString(16)
    .padStart(6, "0");
