import { ensureTaskIsValid, type Task } from "../domain/Task";
import type { TaskService } from "../domain/TaskService";

export const taskCreate = async (task: Task, service: TaskService) => {
  ensureTaskIsValid(task);
  return await service.save(task);
};
