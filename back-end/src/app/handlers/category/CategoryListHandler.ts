import { Router, Response, Request } from "express";
import { PrismaClient } from "../../../context/shared/infrastructure/prisma";
import { ResponseHandler } from "../shared/ResponseHandler";
import { QueryStringCriteriaParser } from "../../../context/shared/domain/QueryStringCriteriaParser";
import { PrismaCategoryRepository } from "../../../context/catagory/infrastructure/PrismaCategoryRepository";
import { CategoryMatch } from "../../../context/catagory/application/CategoryMatch";

const routerCategoryListHandler = Router();

interface CategoryCreateHandleRequest extends Request { }
interface CategoryCreateHandleResponse extends Response { }

routerCategoryListHandler.get(
  "/api/v1/category",
  async (
    request: CategoryCreateHandleRequest,
    response: CategoryCreateHandleResponse,
  ) => {
    try {
      const url = new URLSearchParams(request.originalUrl);
      const criteria = QueryStringCriteriaParser.parse(url);
      const client = new PrismaClient();
      const repository = new PrismaCategoryRepository(client);
      const listCategory = new CategoryMatch(repository);
      const values = await listCategory.run(criteria);
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

export { routerCategoryListHandler };
