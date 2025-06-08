import { Router, Request } from "express";
import { PrismaClient } from "../../../context/shared/infrastructure/prisma";
import { ResponseHandler } from "../shared/ResponseHandler";
import { CategoryPrimitives } from "../../../context/catagory/domain/CategoryPrimitives";
import { PrismaCategoryRepository } from "../../../context/catagory/infrastructure/PrismaCategoryRepository";
import { CategoryCreate } from "../../../context/catagory/application/CategoryCreate";
import { Category } from "../../../context/catagory/domain/Category";

const routerCategoryCreateHandler = Router();

interface catgoryCreateHandleRequest extends Request {
  body: CategoryPrimitives;
}

routerCategoryCreateHandler.post(
  "/api/v1/category",
  async (request: catgoryCreateHandleRequest, response) => {
    try {
      const categoryPrimitives = request.body;
      const client = new PrismaClient();
      const repository = new PrismaCategoryRepository(client);
      const createcatgory = new CategoryCreate(repository);
      await createcatgory.run(Category.fromPrimitives(categoryPrimitives));
      await client.$disconnect();

      ResponseHandler.ok({}, response);
    } catch (error: unknown) {
      if (error instanceof Error) {
        ResponseHandler.error({ error: error.message }, response);
      }
    }
  },
);

export { routerCategoryCreateHandler };
