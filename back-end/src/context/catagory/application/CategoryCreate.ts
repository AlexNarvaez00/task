import { Category } from "../domain/Category";
import { CategoryRepository } from "../domain/CategoryRepository";

export class CategoryCreate {
  constructor(private readonly repository: CategoryRepository) { }

  async run(category: Category) {
    await this.repository.save(category);
  }
}
