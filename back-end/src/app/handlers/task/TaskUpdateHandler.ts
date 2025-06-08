import { Router, Request, Response } from "express";
import { Task } from "../../../context/task/domain/Task";
import { TaskPrimitives } from "../../../context/task/domain/TaskPrimitives";
import { PrismaClient } from "../../../context/shared/infrastructure/prisma";
import { PrismsTaskRepository } from "../../../context/task/infrastructure/PrismaTaskRepository";
import { ResponseHandler } from "../shared/ResponseHandler";
import { TaskUpdate } from "../../../context/task/application/TaskUpdate";
import { TaskId } from "../../../context/task/domain/TaskId";

const routerTaskUpdateHandler = Router();

interface TaskCreateHandleRequest extends Request {
  body: TaskPrimitives;
  params: {
    taskId: string;
  };
}

interface TaskCreateHandleResponse extends Response { }

routerTaskUpdateHandler.put(
  "/api/v1/task/:taskId",
  async (
    request: TaskCreateHandleRequest,
    response: TaskCreateHandleResponse,
  ) => {
    try {
      const id = request.params.taskId;
      const taskPrimitives = request.body;
      const client = new PrismaClient();
      const repository = new PrismsTaskRepository(client);
      const createTask = new TaskUpdate(repository);
      await createTask.run(new TaskId(id), Task.fromPrimitives(taskPrimitives));
      await client.$disconnect();

      ResponseHandler.ok({}, response);
    } catch (error: unknown) {
      if (error instanceof Error) {
        ResponseHandler.error({ error: error.message }, response);
      }
    }
  },
);

export { routerTaskUpdateHandler };
