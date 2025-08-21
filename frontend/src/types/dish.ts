import type { Category } from "./category";

export interface Dish {
  id: string;
  menuId: string;
  name: string;
  description: string;
  price: number;
  imageURL?: string;
  calories: number;
  bestSeller: boolean;
  category: Category;

}
