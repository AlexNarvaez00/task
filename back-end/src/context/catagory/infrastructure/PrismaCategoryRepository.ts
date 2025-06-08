import { Criteria } from "../../shared/domain/criteria/Criteria";
import { PrismaCriteriaConverter } from "../../shared/infrastructure/PrismaCriteriaConverter";
import { PrismaRepository } from "../../shared/infrastructure/PrismaRepository";
import { Category } from "../domain/Category";
import { CategoryPrimitives } from "../domain/CategoryPrimitives";
import { CategoryRepository } from "../domain/CategoryRepository";

export class PrismaCategoryRepository
  extends PrismaRepository
  implements CategoryRepository {
  public async findAll(criteria: Criteria): Promise<Category[]> {
    const query = PrismaCriteriaConverter.convert(criteria);
    const results: CategoryPrimitives[] = await this.client.category.findMany({
      where: query,
    });

    return this.mapToEntity(results);
  }

  public async save(category: Category): Promise<void> {
    await this.client.category.create({
      data: category.toPrimitives(),
    });
  }

  private mapToEntity(results: CategoryPrimitives[]) {
    return results.map((task) => Category.fromPrimitives(task));
  }
}
