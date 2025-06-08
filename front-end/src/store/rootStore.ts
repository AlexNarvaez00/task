import { create } from "zustand";
import type { TaskState } from "./task/TaskState";
import { taskSlice } from "./task/TaskSlice";
import type { CategoryState } from "./category/CategoryState";
import { categorySlice } from "./category/CategorySlice";

type RootStore = TaskState & CategoryState;

const rootStore = create<RootStore>();

export const useRootStore = rootStore((set, get, api) => ({
  ...taskSlice(set, get, api),
  ...categorySlice(set, get, api),
}));
