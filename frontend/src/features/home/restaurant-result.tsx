import type { Page } from "@/types/page";
import type { Restaurant } from "@/types/restaurant";
import RestaurantCard from "./restaurant-card";
import Title from "@/components/title";
import type { Category } from "@/types/category";
import NoData from "@/components/no-data";

export default function RestaurantResult({ searchTerm, filterTerm, title, restaurantData }: { searchTerm?: string; filterTerm?: Category[]; title: string; restaurantData: Page<Restaurant> }) {
    const hasData = restaurantData.content && restaurantData.content.length > 0;
    return (
        <section>
            <Title filterTerm={filterTerm} title={title} count={restaurantData.totalElements} searchTerm={searchTerm} />
            {hasData ? (
                <ul className="mt-4 grid gap-4">
                    {restaurantData.content.map(restaurant => (
                        <RestaurantCard
                            key={restaurant.id}
                            restaurant={restaurant}
                        />
                    ))}
                </ul>
            ) : (
                <NoData />
            )}
        </section>
    );
}
