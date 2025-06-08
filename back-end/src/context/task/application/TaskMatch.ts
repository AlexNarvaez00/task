import { Criteria } from "../../shared/domain/criteria/Criteria";
import { TaskRepository } from "../domain/TaskRepository";

export class TaskMatch {
  constructor(private readonly repository: TaskRepository) { }

  async run(criteria: Criteria) {
    return await this.repository.findAll(criteria);
  }
}
