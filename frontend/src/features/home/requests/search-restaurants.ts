import type { Category } from "@/types/category";
import type { Page } from "@/types/page";
import type { Restaurant } from "@/types/restaurant";

export default async function searchRestaurants({ searchTerm, filterTerm }: { searchTerm?: string; filterTerm: Category[] }): Promise<Page<Restaurant>> {
    try {
        const categories = filterTerm.map(category => ({ id: category.id }));
        const body = { name: searchTerm, categories };
        console.log("Searching restaurants with:", body);
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
