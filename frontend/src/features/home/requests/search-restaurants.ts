import type { Category } from "@/types/category";
import type { Page } from "@/types/page";
import type { Restaurant } from "@/types/restaurant";

interface SearchRestaurantsParams {
    searchTerm?: string;
    filterTerm: Category[];
    page?: number;
    size?: number;
}

export default async function searchRestaurants({ 
    searchTerm, 
    filterTerm, 
    page = 0, 
    size = 10 
}: SearchRestaurantsParams): Promise<Page<Restaurant>> {
    try {
        const categories = filterTerm.map(category => ({ id: category.id }));
        const body = { name: searchTerm, categories };
        console.log("Searching restaurants with:", body);
        
        const url = new URL(`http://localhost:8080/restaurant/search`);
        url.searchParams.append('page', page.toString());
        url.searchParams.append('size', size.toString());
        
        const response = await fetch(url.toString(), {
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
