import type { Criteria } from "../../shared/domain/criteria/Criteria";
import type { CategoryService } from "../domain/CategoryService";

export const categoryList = async (
  criteria: Criteria,
  service: CategoryService,
) => {
  return await service.findAll(criteria);
};
