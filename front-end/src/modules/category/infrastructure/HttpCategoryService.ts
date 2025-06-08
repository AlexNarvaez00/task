import { env } from "../../../shared/envConfig";
import { HttpService } from "../../shared/infrastructure/HttpService";
import type { Category } from "../domain/Category";
import type { CategoryService } from "../domain/CategoryService";

export class HttpCategoryService
  extends HttpService
  implements CategoryService {
  public getPath(): string {
    return env.urls.category;
  }

  public async findAll(): Promise<Category[]> {
    const response = await fetch(`${this.resource}`);

    return (await response.json()) as Category[];
  }
}
