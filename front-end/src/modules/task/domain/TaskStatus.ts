export enum TaskStatus {
  DONE = "DONE",
  DOING = "DOING",
}

export const ensureStatusIsDefined = (value: string) => {
  if (value === undefined) {
    throw new Error(`Value <Status> must be defines`);
  }

  if (value === "") {
    throw new Error(`Value <Status> not to be empty`);
  }
};
