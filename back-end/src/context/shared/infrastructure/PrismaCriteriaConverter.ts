import { Criteria } from "../domain/criteria/Criteria";
import { Filter, FilterValue } from "../domain/criteria/Filter";
import { Operator, Operators } from "../domain/criteria/Operator";

type Converter = (filter: Filter) => {
  [key: string]: FilterValue;
};

export class PrismaCriteriaConverter {
  private static converters = new Map<Operator, Converter>([
    [Operators.EQ, this.eqConverter],
  ]);

  static convert(criteria: Criteria) {
    const {
      filters: { filters },
    } = criteria;

    return filters.reduce((query, filter) => {
      const { operator } = filter;
      const converter = PrismaCriteriaConverter.converters.get(operator);

      if (converter === undefined) {
        throw new Error(`Operator unknow ${operator}`);
      }

      return {
        ...query,
        ...converter(filter),
      };
    }, {});
  }

  private static eqConverter(filter: Filter) {
    const { field, value } = filter;

    return {
      [field]: value,
    };
  }
}
