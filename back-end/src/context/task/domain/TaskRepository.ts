import { Criteria } from "../../shared/domain/criteria/Criteria";
import { Task } from "./Task";

export interface TaskRepository {
  remove(task: Task): Promise<void>;
  save(task: Task): Promise<void>;
  update(task: Task): Promise<void>;
  findAll(criteria: Criteria): Promise<Task[]>;
}
