import { env } from "../../../shared/envConfig";
import type { Criteria } from "../../shared/domain/criteria/Criteria";
import { HttpService } from "../../shared/infrastructure/HttpService";
import { QueryStringCriteriaParser } from "../../shared/infrastructure/QueryStringCriteriaParser";
import type { Task } from "../domain/Task";
import type { TaskService } from "../domain/TaskService";

export class HttpTaskService extends HttpService implements TaskService {
  getPath(): string {
    return env.urls.task;
  }

  public async findAll(criteria: Criteria): Promise<Task[]> {
    const queryParameters = QueryStringCriteriaParser.parse(criteria);
    const response = await fetch(`${this.resource}?${queryParameters}`);

    return (await response.json()) as Task[];
  }

  public async save(task: Task): Promise<void> {
    const response = await fetch(`${this.resource}`, {
      headers: {
        "content-type": "application/json; charset=utf-8",
      },
      method: "POST",
      body: JSON.stringify(task),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(
        `Failed to save task: ${response.status} ${response.statusText}. ${errorData?.message || ""}`,
      );
    }
  }

  public async update(task: Task): Promise<void> {
    const response = await fetch(`${this.resource}/${task.id}`, {
      headers: {
        "content-type": "application/json; charset=utf-8",
      },
      method: "PUT",
      body: JSON.stringify(task),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(
        `Failed to update task: ${response.status} ${response.statusText}. ${errorData?.message || ""}`,
      );
    }
  }
}
