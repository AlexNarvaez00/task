import { Criteria } from "../../shared/domain/criteria/Criteria";
import { Filters } from "../../shared/domain/criteria/Filters";
import { Task } from "../domain/Task";
import { TaskId } from "../domain/TaskId";
import { TaskRepository } from "../domain/TaskRepository";

export class TaskUpdate {
  constructor(private readonly repository: TaskRepository) { }

  async run(id: TaskId, task: Task) {
    await this.ensureIdExist(id);
    await this.repository.update(task);
  }

  private async ensureIdExist(id: TaskId) {
    const criteria = new Criteria(
      Filters.fromPrimitives([["id", "=", id.value]]),
    );
    const [task] = await this.repository.findAll(criteria);

    if (task === undefined) {
      throw new Error(`Taks not found <${id.value}>`);
    }
  }
}
