import { CategoryRepository } from "../../catagory/domain/CategoryRepository";
import { Criteria } from "../../shared/domain/criteria/Criteria";
import { Filters } from "../../shared/domain/criteria/Filters";
import { Task } from "../domain/Task";
import { TaskRepository } from "../domain/TaskRepository";

export class TaskCreate {
  constructor(
    private readonly taskRepository: TaskRepository,
    private readonly categoryRepository: CategoryRepository,
  ) { }

  async run(task: Task) {
    const { categoryId } = task.toPrimitives();
    await this.ensureCategoryIdExist(categoryId);
    await this.taskRepository.save(task);
  }

  private async ensureCategoryIdExist(id: string) {
    const criteria = new Criteria(Filters.fromPrimitives([["id", "=", id]]));

    const [category] = await this.categoryRepository.findAll(criteria);
    if (category === undefined) {
      throw new Error(`Category not found <${id}>`);
    }
  }
}
