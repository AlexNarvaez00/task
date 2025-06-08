import { Router, Response, Request } from "express";
import { PrismaClient } from "../../../context/shared/infrastructure/prisma";
import { PrismsTaskRepository } from "../../../context/task/infrastructure/PrismaTaskRepository";
import { ResponseHandler } from "../shared/ResponseHandler";
import { QueryStringCriteriaParser } from "../../../context/shared/domain/QueryStringCriteriaParser";
import { TaskMatch } from "../../../context/task/application/TaskMatch";

const routerTaskListHandler = Router();

interface TaskCreateHandleRequest extends Request { }
interface TaskCreateHandleResponse extends Response { }

routerTaskListHandler.get(
  "/api/v1/task",
  async (
    request: TaskCreateHandleRequest,
    response: TaskCreateHandleResponse,
  ) => {
    try {
      const url = new URLSearchParams(request.originalUrl);
      const criteria = QueryStringCriteriaParser.parse(url);
      const client = new PrismaClient();
      const repository = new PrismsTaskRepository(client);
      const listTask = new TaskMatch(repository);
      const values = await listTask.run(criteria);
      await client.$disconnect();

      ResponseHandler.ok(
        values.map((value) => value.toPrimitives()),
        response,
      );
    } catch (error: unknown) {
      if (error instanceof Error) {
        ResponseHandler.error({ error: error.message }, response);
      }
    }
  },
);

export { routerTaskListHandler };
