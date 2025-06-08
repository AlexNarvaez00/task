import { CriteriaOrderType } from './CriteriaOrderType'

export class CriteriaOrder {
    private constructor(
        public readonly order: CriteriaOrderType,
        public readonly sortBy: string
    ) {}

    public static none() {
        return new CriteriaOrder('none', '')
    }

    public static fromValues(values: [CriteriaOrderType, string]) {
        const [order, sortBy] = values

        return new CriteriaOrder(order, sortBy)
    }
}
