import type { Criteria } from "../../modules/shared/domain/criteria/Criteria";
import type { Task } from "../../modules/task/domain/Task";
import type { TaskService } from "../../modules/task/domain/TaskService";

export interface TaskState {
  tasks: Task[];
  pullTask: (criteria: Criteria, service: TaskService) => void;
  commitTask: (task: Task, service: TaskService) => void;
  changeTask: (task: Task, service: TaskService) => void;
}
