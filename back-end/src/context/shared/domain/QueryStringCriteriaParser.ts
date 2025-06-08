import { Criteria } from "./criteria/Criteria";
import { FilterPrimitive } from "./criteria/Filter";
import { Filters } from "./criteria/Filters";

export class QueryStringCriteriaParser {
  static parse(url: URLSearchParams) {
    const entries = url.entries();
    const filters = [];

    let filter = [];
    let index = 0;
    for (const entry of entries) {
      const [position, value] = entry;
      if (position.includes("filter")) {
        filter[index] = value;
      }

      index++;

      if (index > 2) {
        index = 0;
        filters.push(filter);
        filter = [];
      }
    }

    return new Criteria(
      Filters.fromPrimitives(filters as FilterPrimitive[]),
      Number(url.get("limit") ?? "10"),
    );
  }
}
