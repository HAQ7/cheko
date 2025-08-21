import type { Page } from "@/types/page";
import type { Restaurant } from "@/types/restaurant";

export default async function getRestaurants(): Promise<Page<Restaurant>> {
    try {
        const response = await fetch(`http://localhost:8080/restaurant/all`);
        if (!response.ok) {
            throw new Error("Failed to fetch restaurants");
        }
        return response.json();
    } catch (error) {
        console.error(error);
        throw new Error("Error fetching restaurants");
    }
}
