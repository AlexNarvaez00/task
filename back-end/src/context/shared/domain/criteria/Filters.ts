import { Filter, FilterPrimitive } from "./Filter";

export class Filters {
  constructor(public readonly filters: Filter[]) { }

  static fromPrimitives(primitives: FilterPrimitive[]) {
    const filters = primitives.map((primitive) =>
      Filter.fromPrimitives(primitive),
    );

    return new Filters(filters);
  }

  static none() {
    return new Filters([]);
  }
}
