import type { Category } from "@/types/category";
import type { Dish } from "@/types/dish";
import type { Page } from "@/types/page";

export default async function searchDishes({ searchTerm, filterTerm }: { searchTerm?: string; filterTerm: Category[] }): Promise<Page<Dish>> {
    try {
        const categories = filterTerm.map(category => ({ id: category.id }));
        const response = await fetch(`http://localhost:8080/restaurant/search`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: searchTerm, categories }),
        });
        if (!response.ok) {
            throw new Error("Failed to fetch restaurants");
        }
        return response.json();
    } catch (error) {
        console.error(error);
        throw new Error("Error fetching restaurants");
    }
}
