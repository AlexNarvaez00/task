import { TaskProps } from "./TaskProps";
import { TaskPrimitives } from "./TaskPrimitives";
import { TaskId } from "./TaskId";
import { TaskContent } from "./TaskContent";
import { TaskTile } from "./TaskTitle";
import { TaskColor } from "./TaskColor";
import { TaskStatus } from "./TaskStatus";
import { Entity } from "../../shared/domain/entity/Entity";
import { Uuid } from "../../shared/domain/value-objects/Uuid";

export class Task extends Entity<TaskProps> {
  private constructor({ id, ...props }: TaskProps) {
    super(id.value, {
      id,
      ...props,
    });
  }

  public static fromPrimitives({
    id,
    color,
    title,
    status,
    content,
    categoryId,
  }: TaskPrimitives): Task {
    return new Task({
      id: new TaskId(id),
      content: new TaskContent(content),
      title: new TaskTile(title),
      color: new TaskColor(color),
      status: new TaskStatus(status),
      catergoryId: new Uuid(categoryId),
    });
  }

  public toPrimitives(): TaskPrimitives {
    return {
      id: this.id,
      status: this.props.status.value,
      color: this.props.color.value,
      title: this.props.title.value,
      content: this.props.content.value,
      categoryId: this.props.catergoryId.value,
    };
  }
}
