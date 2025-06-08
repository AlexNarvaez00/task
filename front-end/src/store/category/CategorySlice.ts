import type { StateCreator } from "zustand";
import type { CategoryState } from "./CategoryState";
import { categoryList } from "../../modules/category/application/categoryList";

type CategorySlice = StateCreator<CategoryState>;

export const categorySlice: CategorySlice = (set) => ({
  categories: [],
  pullCategories: async (criteria, service) => {
    try {
      const categories = await categoryList(criteria, service);

      set({
        categories,
      });
    } catch (error) {
      console.log(error);

      set({});
    }
  },
});
