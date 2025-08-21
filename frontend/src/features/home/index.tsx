import type { Restaurant } from "@/types/restaurant";
import type { Page } from "@/types/page";
import Loading from "@/components/loading";
import { useSearch } from "@/store/search";
import { useEffect, useState, useCallback } from "react";
import RestaurantResult from "./restaurant-result";
import getRestaurants from "./requests/get-restaurants";
import searchRestaurants from "./requests/search-restaurants";

export default function HomePage() {
    const { searchTerm, filterTerm, setFilterTerm, setSearchTerm } = useSearch();
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [totalElements, setTotalElements] = useState(0);
    const [hasNextPage, setHasNextPage] = useState(false);

    const pageSize = 10;

    // Reset data when search terms change
    useEffect(() => {
        setSearchTerm("");
        setFilterTerm([]);
    }, []);

    // Reset pagination when search/filter changes
    useEffect(() => {
        setRestaurants([]);
        setCurrentPage(0);
        setTotalPages(0);
        setTotalElements(0);
        setHasNextPage(false);
    }, [searchTerm, filterTerm]);

    const fetchData = useCallback(async (page: number = 0, isLoadMore: boolean = false) => {
        if (!isLoadMore) {
            setIsLoading(true);
        } else {
            setIsLoadingMore(true);
        }
        setError(null);

        try {
            let data: Page<Restaurant>;

            if (searchTerm || filterTerm.length > 0) {
                data = await searchRestaurants({ 
                    searchTerm, 
                    filterTerm, 
                    page, 
                    size: pageSize 
                });
            } else {
                data = await getRestaurants({ 
                    page, 
                    size: pageSize 
                });
            }

            console.log("Fetched restaurant data:", data);

            if (isLoadMore) {
                // Append new restaurants to existing ones
                setRestaurants(prev => [...prev, ...data.content]);
            } else {
                // Replace restaurants (initial load or new search)
                setRestaurants(data.content);
            }

            setTotalPages(data.totalPages);
            setTotalElements(data.totalElements);
            setCurrentPage(data.number);
            setHasNextPage(data.number + 1 < data.totalPages);

        } catch (error) {
            console.error("Error fetching restaurants:", error);
            setError("Error fetching restaurants");
        } finally {
            setIsLoading(false);
            setIsLoadingMore(false);
        }
    }, [searchTerm, filterTerm, pageSize]);

    // Initial load and when search/filter changes
    useEffect(() => {
        fetchData(0, false);
    }, [searchTerm, filterTerm]);

    const loadMore = useCallback(() => {
        if (hasNextPage && !isLoadingMore) {
            fetchData(currentPage + 1, true);
        }
    }, [hasNextPage, isLoadingMore, currentPage, fetchData]);

    if (isLoading) return <Loading />;
    if (error) return <div>Error loading restaurants</div>;

    const restaurantData: Page<Restaurant> = {
        content: restaurants,
        totalElements,
        totalPages,
        size: pageSize,
        number: currentPage
    };

    return (
        <RestaurantResult
            filterTerm={filterTerm}
            searchTerm={searchTerm}
            title={"All Restaurants"}
            restaurantData={restaurantData}
            hasNextPage={hasNextPage}
            isLoadingMore={isLoadingMore}
            onLoadMore={loadMore}
        />
    );
}
