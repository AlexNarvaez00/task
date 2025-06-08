import { ValueObject } from "./ValueObject";

export class StringValueObject extends ValueObject<string> {
  constructor(value: string) {
    super(value);
    this.ensureValueIsString();
  }

  ensureValueIsString() {
    if (typeof this.value != "string") {
      throw new Error("Value is not string");
    }
  }
}
