import { useRootStore } from "../rootStore";
import type { TaskState } from "./TaskState";

export const useTaskStore = (): TaskState => {
  const tasks = useRootStore((state) => state.tasks);
  const pullTask = useRootStore((state) => state.pullTask);
  const commitTask = useRootStore((state) => state.commitTask);
  const changeTask = useRootStore((state) => state.changeTask);

  return {
    tasks,
    pullTask,
    changeTask,
    commitTask,
  };
};
