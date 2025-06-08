import type { StateCreator } from "zustand";
import type { Criteria } from "../../modules/shared/domain/criteria/Criteria";
import { taskCreate } from "../../modules/task/application/taskCreate";
import { taskList } from "../../modules/task/application/taskList";
import type { TaskService } from "../../modules/task/domain/TaskService";
import type { TaskState } from "./TaskState";
import type { Task } from "../../modules/task/domain/Task";
import { taskUpdate } from "../../modules/task/application/taskUpdate";

type TaskSlice = StateCreator<TaskState>;

export const taskSlice: TaskSlice = (set) => ({
  tasks: [],
  pullTask: async (criteria: Criteria, service: TaskService) => {
    try {
      const tasks = await taskList(criteria, service);

      set({ tasks });
    } catch (error) {
      if (error instanceof Error) {
        alert(`Error: ${error.message}`);
      }

      set({ tasks: [] });
    }
  },
  commitTask: async (task: Task, service: TaskService) => {
    try {
      await taskCreate(task, service);
    } catch (error) {
      if (error instanceof Error) {
        alert(`Error: ${error.message}`);
      }
    }
  },
  changeTask: async (task: Task, service: TaskService) => {
    try {
      await taskUpdate(task, service);
    } catch (error) {
      if (error instanceof Error) {
        alert(`Error: ${error.message}`);
      }
    }
  },
});
