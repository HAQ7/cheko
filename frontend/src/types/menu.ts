import type { Category } from "./category";
import type { Dish } from "./dish";

export interface Menu {
  id: string;
  restaurantId: string;
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
  categories: Category[];
  dishes: Dish[];
}
