export class ValueObject<T> {
  constructor(public readonly value: T) {
    this.ensureValueIsValid();
  }

  private ensureValueIsValid() {
    if (this.value === undefined) {
      throw new Error("Value must be define");
    }
  }
}
