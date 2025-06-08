import { useRootStore } from "../rootStore";
import type { CategoryState } from "./CategoryState";

export const useCategoryStore = (): CategoryState => {
  const categories = useRootStore((state) => state.categories);
  const pullCategories = useRootStore((state) => state.pullCategories);

  return {
    categories,
    pullCategories,
  };
};
