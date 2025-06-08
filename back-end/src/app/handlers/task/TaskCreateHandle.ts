import { Router, Request } from "express";
import { Task } from "../../../context/task/domain/Task";
import { TaskPrimitives } from "../../../context/task/domain/TaskPrimitives";
import { PrismaClient } from "../../../context/shared/infrastructure/prisma";
import { PrismsTaskRepository } from "../../../context/task/infrastructure/PrismaTaskRepository";
import { TaskCreate } from "../../../context/task/application/TaskCreate";
import { ResponseHandler } from "../shared/ResponseHandler";
import { PrismaCategoryRepository } from "../../../context/catagory/infrastructure/PrismaCategoryRepository";

const routerTaskCreateHandler = Router();

interface TaskCreateHandleRequest extends Request {
  body: TaskPrimitives;
}

routerTaskCreateHandler.post(
  "/api/v1/task",
  async (request: TaskCreateHandleRequest, response) => {
    try {
      const taskPrimitives = request.body;
      const client = new PrismaClient();
      const repository = new PrismsTaskRepository(client);
      const categoryRepository = new PrismaCategoryRepository(client);
      const createTask = new TaskCreate(repository, categoryRepository);
      await createTask.run(Task.fromPrimitives(taskPrimitives));
      await client.$disconnect();

      ResponseHandler.ok({}, response);
    } catch (error: unknown) {
      if (error instanceof Error) {
        ResponseHandler.error({ error: error.message }, response);
      }
    }
  },
);

export { routerTaskCreateHandler };
