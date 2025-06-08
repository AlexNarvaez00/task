import type { Criteria } from "../../shared/domain/criteria/Criteria";
import type { Category } from "./Category";

export interface CategoryService {
  findAll(criteria: Criteria): Promise<Category[]>;
}
