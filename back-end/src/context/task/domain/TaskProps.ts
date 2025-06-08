import { TaskColor } from "./TaskColor";
import { TaskContent } from "./TaskContent";
import { TaskTile } from "./TaskTitle";
import { TaskId } from "./TaskId";
import { TaskStatus } from "./TaskStatus";
import { Uuid } from "../../shared/domain/value-objects/Uuid";

export interface TaskProps {
  id: TaskId;
  title: TaskTile;
  content: TaskContent;
  color: TaskColor;
  status: TaskStatus;
  catergoryId: Uuid;
}
