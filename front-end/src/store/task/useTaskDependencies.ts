import { useOutletContext } from "react-router";
import type { TaskDependencies } from "./TaskDependencies";

export const useTaskDependencies = (): TaskDependencies => {
  return useOutletContext<TaskDependencies>();
};
