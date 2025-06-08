import styles from "./TaskCategoryList.module.css";
import { useEffect } from "react";
import type { CategoryService } from "../../../modules/category/domain/CategoryService";
import { Criteria } from "../../../modules/shared/domain/criteria/Criteria";
import { CriteriaFilters } from "../../../modules/shared/domain/criteria/CriteriaFilters";
import { CriteriaOrder } from "../../../modules/shared/domain/criteria/CriteriaOrder";
import { join } from "../../../shared/css/CssUtils";
import { useCategoryStore } from "../../../store/category/useCategoryStore";

interface TaskCategoryListPrps {
  categoryService: CategoryService;
}

export const TaskCategoryList = ({ categoryService }: TaskCategoryListPrps) => {
  const { categories, pullCategories } = useCategoryStore();

  useEffect(() => {
    const criteria = new Criteria(CriteriaFilters.none(), CriteriaOrder.none());
    pullCategories(criteria, categoryService);
  }, [pullCategories, categoryService]);

  return (
    <ul className={join(styles.list)}>
      {categories.map((category) => (
        <li key={category.id} className={join(styles.item)}>
          {category.name}
        </li>
      ))}
    </ul>
  );
};
