import type { CategoryService } from "../../modules/category/domain/CategoryService";
import type { TaskService } from "../../modules/task/domain/TaskService";

export interface TaskDependencies {
  taskService: TaskService;
  categoryService: CategoryService;
}
