import { Criteria } from "../../shared/domain/criteria/Criteria";
import { CategoryRepository } from "../domain/CategoryRepository";

export class CategoryMatch {
  constructor(private readonly repository: CategoryRepository) { }

  async run(criteria: Criteria) {
    return await this.repository.findAll(criteria);
  }
}
