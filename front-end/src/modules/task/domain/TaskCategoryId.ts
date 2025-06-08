export const ensureCategoryIdIsDefined = (value: string) => {
  if (value === undefined) {
    throw new Error(`Value <Category> must be defines`);
  }

  if (value === "") {
    throw new Error(`Value <Category> not to be empty`);
  }
};
