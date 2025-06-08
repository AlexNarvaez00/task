import { Filters } from "./Filters";
import { Operator } from "./Operator";

export type FilterValue = string | number | undefined;
export type FilterPrimitive = [string, Operator, FilterValue];

export class Filter {
  constructor(
    public readonly field: string,
    public readonly operator: Operator,
    public readonly value: FilterValue,
  ) { }

  static fromPrimitives([field, operator, value]: FilterPrimitive) {
    return new Filter(field, operator, value);
  }
}
