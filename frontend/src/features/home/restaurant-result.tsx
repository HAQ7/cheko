import type { Page } from "@/types/page";
import type { Restaurant } from "@/types/restaurant";
import RestaurantCard from "./restaurant-card";
import Title from "@/components/title";
import type { Category } from "@/types/category";
import NoData from "@/components/no-data";
import Loading from "@/components/loading";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import { motion } from "motion/react";

interface RestaurantResultProps {
    searchTerm?: string;
    filterTerm?: Category[];
    title: string;
    restaurantData: Page<Restaurant>;
    hasNextPage?: boolean;
    isLoadingMore?: boolean;
    onLoadMore?: () => void;
}

export default function RestaurantResult({ 
    searchTerm, 
    filterTerm, 
    title, 
    restaurantData,
    hasNextPage = false,
    isLoadingMore = false,
    onLoadMore = () => {}
}: RestaurantResultProps) {
    const hasData = restaurantData.content && restaurantData.content.length > 0;
    
    const { loadingRef } = useInfiniteScroll({
        hasNextPage,
        isLoading: isLoadingMore,
        onLoadMore,
    });

    return (
        <section>
            <Title filterTerm={filterTerm} title={title} count={restaurantData.totalElements} searchTerm={searchTerm} />
            {hasData ? (
                <>
                    <motion.ul 
                        className="mt-4 grid gap-4"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.1,
                                    delayChildren: 0.2
                                }
                            }
                        }}
                    >
                        {restaurantData.content.map((restaurant, index) => (
                            <motion.li
                                key={`${restaurant.id}-${index}`}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                            >
                                <RestaurantCard
                                    restaurant={restaurant}
                                />
                            </motion.li>
                        ))}
                    </motion.ul>
                    
                    {/* Loading trigger element */}
                    <div ref={loadingRef} className="h-20 flex items-center justify-center">
                        {isLoadingMore && (
                            <div className="flex items-center justify-center py-4">
                                <Loading />
                                <span className="ml-2 text-sm text-gray-600">Loading more restaurants...</span>
                            </div>
                        )}
                        {!hasNextPage && restaurantData.content.length > 0 && (
                            <div className="text-center py-4 text-sm text-gray-500">
                                No more restaurants to load
                            </div>
                        )}
                    </div>
                </>
            ) : (
                <NoData />
            )}
        </section>
    );
}
