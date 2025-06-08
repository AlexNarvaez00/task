import { CriteriaFilterOperator } from './CriteriaFilterOperator'

export class CriteriaFilter {
    field: string
    operator: CriteriaFilterOperator
    value: string

    private constructor(
        field: string,
        operator: CriteriaFilterOperator,
        value: string
    ) {
        this.field = field
        this.operator = operator
        this.value = value
    }

    public static fromValues(values: [string, CriteriaFilterOperator, string]) {
        const [field, operator, value] = values

        return new CriteriaFilter(field, operator, value)
    }
}
