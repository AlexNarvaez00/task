export const ensureTitleIsDefined = (value: string) => {
  if (value === undefined) {
    throw new Error(`Value <Title> must be defines`);
  }

  if (value === "") {
    throw new Error(`Value <Title> not to be empty`);
  }
};
