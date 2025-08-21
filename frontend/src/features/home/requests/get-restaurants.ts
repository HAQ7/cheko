import type { Page } from "@/types/page";
import type { Restaurant } from "@/types/restaurant";

interface GetRestaurantsParams {
    page?: number;
    size?: number;
}

export default async function getRestaurants({ page = 0, size = 10 }: GetRestaurantsParams = {}): Promise<Page<Restaurant>> {
    try {
        const url = new URL(`http://localhost:8080/restaurant/all`);
        url.searchParams.append('page', page.toString());
        url.searchParams.append('size', size.toString());
        
        const response = await fetch(url.toString());
        if (!response.ok) {
            throw new Error("Failed to fetch restaurants");
        }
        return response.json();
    } catch (error) {
        console.error(error);
        throw new Error("Error fetching restaurants");
    }
}
