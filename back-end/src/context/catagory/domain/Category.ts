import { Entity } from "../../shared/domain/entity/Entity";
import { CategoryId } from "./CategoryId";
import { CategoryName } from "./CategoryName";
import { CategoryPrimitives } from "./CategoryPrimitives";
import { CategoryProps } from "./CategoryProps";

export class Category extends Entity<CategoryProps> {
  private constructor(props: CategoryProps) {
    super(props.id.value, props);
  }

  static fromPrimitives({ id, name }: CategoryPrimitives) {
    return new Category({
      id: new CategoryId(id),
      name: new CategoryName(name),
    });
  }

  public toPrimitives(): CategoryPrimitives {
    return {
      id: this.props.id.value,
      name: this.props.name.value,
    };
  }
}
