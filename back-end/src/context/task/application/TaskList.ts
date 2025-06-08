import { Criteria } from "../../shared/domain/criteria/Criteria";
import { Filters } from "../../shared/domain/criteria/Filters";
import { TaskRepository } from "../domain/TaskRepository";

export class TaskList {
  constructor(private readonly repository: TaskRepository) { }

  async run() {
    const criteria = new Criteria(Filters.none());

    return await this.repository.findAll(criteria);
  }
}
