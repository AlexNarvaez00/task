import { CriteriaFilter } from "./CriteriaFilter";
import type { CriteriaFilterOperator } from "./CriteriaFilterOperator";

export class CriteriaFilters {
    private constructor(public readonly filters: CriteriaFilter[]) { }

    public static fromValues(values: [[string, CriteriaFilterOperator, string]]) {
        const filters = values.map((filter) => {
            return CriteriaFilter.fromValues(filter);
        });

        return new CriteriaFilters(filters);
    }

    public static none() {
        return new CriteriaFilters([]);
    }
}
