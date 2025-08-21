import type { Page } from "@/types/page";
import type { Restaurant } from "@/types/restaurant";
import RestaurantCard from "./restaurant-card";
import Title from "@/components/title";
import type { Category } from "@/types/category";
import NoData from "@/components/no-data";
import { motion } from "motion/react";

export default function RestaurantResult({ searchTerm, filterTerm, title, restaurantData }: { searchTerm?: string; filterTerm?: Category[]; title: string; restaurantData: Page<Restaurant> }) {
    const hasData = restaurantData.content && restaurantData.content.length > 0;
    return (
        <section>
            <Title filterTerm={filterTerm} title={title} count={restaurantData.totalElements} searchTerm={searchTerm} />
            {hasData ? (
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
                    {restaurantData.content.map(restaurant => (
                        <motion.li
                            key={restaurant.id}
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
            ) : (
                <NoData />
            )}
        </section>
    );
}
