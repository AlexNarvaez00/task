import type { Criteria } from "../../shared/domain/criteria/Criteria";
import type { TaskService } from "../domain/TaskService";

export const taskList = async (criteria: Criteria, service: TaskService) => {
  return await service.findAll(criteria);
};
