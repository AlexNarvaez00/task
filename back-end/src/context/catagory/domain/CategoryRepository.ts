import { Criteria } from "../../shared/domain/criteria/Criteria";
import { Category } from "./Category";

export interface CategoryRepository {
  findAll(criteria: Criteria): Promise<Category[]>;
  save(category: Category): Promise<void>;
}
