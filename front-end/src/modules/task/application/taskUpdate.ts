import { ensureTaskIsValid, type Task } from "../domain/Task";
import type { TaskService } from "../domain/TaskService";

export const taskUpdate = async (task: Task, service: TaskService) => {
  ensureTaskIsValid(task);
  return await service.update(task);
};
