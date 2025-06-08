import { CriteriaFilters } from './CriteriaFilters'
import { CriteriaOrder } from './CriteriaOrder'

export class Criteria {
    constructor(
        public readonly filters: CriteriaFilters,
        public readonly order: CriteriaOrder,
        public readonly skip?: number,
        public readonly limit?: number
    ) {}

    public hasFilters() {
        return this.filters.filters.length > 0
    }
}
