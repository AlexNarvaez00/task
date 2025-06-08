import type { Criteria } from "../domain/criteria/Criteria";

export class QueryStringCriteriaParser {
  static parse(criteria: Criteria) {
    const {
      filters: { filters },
      limit,
    } = criteria;
    const query = new URLSearchParams();
    filters.forEach((filter, index) => {
      query.append(`filter[${index}][0]`, filter.field);
      query.append(`filter[${index}][1]`, filter.operator);
      query.append(`filter[${index}][2]`, filter.value);
    });

    if (limit) {
      query.append(`limit`, limit.toString());
    }

    return query
      .toString()
      .replace(/%5B/g, "[")
      .replace(/%5D/g, "]")
      .replace(/%3D/g, "=");
  }
}
