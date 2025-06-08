import type { Entity } from "../../shared/domain/Entity";
import { ensureCategoryIdIsDefined } from "./TaskCategoryId";
import { ensureColorIsDefined } from "./TaskColor";
import { ensureContentIsDefined } from "./TaskContent";
import { ensureStatusIsDefined } from "./TaskStatus";
import { ensureTitleIsDefined } from "./TaskTitle";

export interface Task extends Entity {
  title: string;
  color: string;
  status: string;
  content: string;
  categoryId: string;
}

export const ensureTaskIsValid = (taks: Task) => {
  const { title, status, color, content, categoryId } = taks;
  ensureTitleIsDefined(title);
  ensureColorIsDefined(color);
  ensureStatusIsDefined(status);
  ensureContentIsDefined(content);
  ensureCategoryIdIsDefined(categoryId);
};
