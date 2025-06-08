import type { Criteria } from "../../shared/domain/criteria/Criteria";
import type { Task } from "./Task";

export interface TaskService {
  findAll(criteria: Criteria): Promise<Task[]>;
  save(task: Task): Promise<void>;
  update(task: Task): Promise<void>;
}
