import { Criteria } from "../../shared/domain/criteria/Criteria";
import { PrismaCriteriaConverter } from "../../shared/infrastructure/PrismaCriteriaConverter";
import { PrismaRepository } from "../../shared/infrastructure/PrismaRepository";
import { Task } from "../domain/Task";
import { TaskPrimitives } from "../domain/TaskPrimitives";
import { TaskRepository } from "../domain/TaskRepository";

export class PrismsTaskRepository
  extends PrismaRepository
  implements TaskRepository {
  async remove(task: Task): Promise<void> {
    const { id } = task.toPrimitives();

    await this.client.task.delete({
      where: {
        id,
      },
    });
  }

  async save(task: Task): Promise<void> {
    await this.client.task.create({
      data: task.toPrimitives(),
    });
  }

  async update(task: Task): Promise<void> {
    const { id } = task.toPrimitives();
    await this.client.task.update({
      data: task.toPrimitives(),
      where: {
        id,
      },
    });
  }

  async findAll(criteria: Criteria): Promise<Task[]> {
    const query = PrismaCriteriaConverter.convert(criteria);
    const results: TaskPrimitives[] = await this.client.task.findMany({
      where: query,
      skip: 0,
      take: criteria.limit ?? 10,
    });

    return this.mapToEntity(results);
  }

  private mapToEntity(results: TaskPrimitives[]) {
    return results.map((task) => Task.fromPrimitives(task));
  }
}
