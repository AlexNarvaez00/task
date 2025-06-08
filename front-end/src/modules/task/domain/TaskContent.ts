export const ensureContentIsDefined = (value: string) => {
  if (value === undefined) {
    throw new Error(`Value <Content> must be defines`);
  }

  if (value === "") {
    throw new Error(`Value <Content> not to be empory`);
  }
};
