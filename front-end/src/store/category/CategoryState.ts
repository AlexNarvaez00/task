import type { Category } from "../../modules/category/domain/Category";
import type { CategoryService } from "../../modules/category/domain/CategoryService";
import type { Criteria } from "../../modules/shared/domain/criteria/Criteria";

export interface CategoryState {
  categories: Category[];
  pullCategories: (criteria: Criteria, service: CategoryService) => void;
}
