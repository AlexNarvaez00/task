import { Filters } from "./Filters";

export class Criteria {
  constructor(
    public readonly filters: Filters,
    public readonly limit?: number,
  ) { }
}
