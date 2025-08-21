import type { Restaurant } from "@/types/restaurant";
import type { Page } from "@/types/page";
import Loading from "@/components/loading";
import { useSearch } from "@/store/search";
import { useEffect, useState } from "react";
import RestaurantResult from "./restaurant-result";
import getRestaurants from "./requests/get-restaurants";
import searchRestaurants from "./requests/search-restaurants";

export default function HomePage() {
    const { searchTerm, filterTerm, setFilterTerm, setSearchTerm } = useSearch();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [restaurantData, setRestaurantData] =
        useState<Page<Restaurant> | null>(null);

    useEffect(() => {
        setSearchTerm("");
        setFilterTerm([]);
    }, []);

    useEffect(() => {
        setIsLoading(true);
        setError(null);

        const fetchData = async () => {
            let data: Page<Restaurant> | null = null;

            try {
                if (searchTerm || filterTerm.length > 0) {
                    data = await searchRestaurants({ searchTerm, filterTerm });
                    return;
                }

                data = await getRestaurants();
            } catch (error) {
                console.error("Error fetching restaurants:", error);
                setError("Error fetching restaurants");
            } finally {
                if (data) {
                    console.log("Fetched restaurant data:", data);
                    setRestaurantData(data);
                }

                setIsLoading(false);
            }
        };

        fetchData();
    }, [searchTerm, filterTerm]);

    if (isLoading) return <Loading />;
    if (error) return <div>Error loading restaurants</div>;
    if (!restaurantData) return null;

    return (
        <RestaurantResult
            filterTerm={filterTerm}
            searchTerm={searchTerm}
            title={"All Restaurants"}
            restaurantData={restaurantData}
        />
    );
}
