import { useEffect, useState, useMemo } from "react";
import Title from "../../components/title";
import type { Menu } from "@/types/menu";
import { useSearch } from "@/store/search";
import type { Dish } from "@/types/dish";
import getMenu from "./requests/get-menu";
import Loading from "@/components/loading";
import { useParams } from "react-router";
import DishCard from "./dish-card";
import type { Category } from "@/types/category";
import { useTheme } from "@/store/theme";
import { motion } from "motion/react";

export default function MenuPage() {
    const { searchTerm, filterTerm, setFilterTerm, setSearchTerm } =
        useSearch();
    const { menuId } = useParams<{ menuId: string }>();

    if (!menuId) {
        return <div>Error: Menu ID is required</div>;
    }

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [menu, setMenu] = useState<Menu | null>(null);
    const [dishes, setDishes] = useState<Dish[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(
        null
    );
    const { theme } = useTheme();

    const countsByCategory = useMemo(() => {
        const map = new Map<any, number>();
        for (const d of dishes) {
            const key = d.category?.id ?? "__none";
            map.set(key, (map.get(key) || 0) + 1);
        }
        return map;
    }, [dishes]);

    useEffect(() => {
        setSearchTerm("");
        setFilterTerm([]);
    }, []);

    useEffect(() => {
        setIsLoading(true);
        setError(null);

        const fetchData = async () => {
            try {
                const menuData = await getMenu(menuId);
                setMenu(menuData);
                console.log("Fetched menu data:", menuData);
                setDishes(menuData.dishes);
                setCategories(menuData.categories);
            } catch (error) {
                console.error("Error fetching menu:", error);
                setError("Error fetching menu");
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) return <Loading />;
    if (error) return <div>Error loading menu</div>;

    return (
        <section>
            <Title
                noLine
                searchTerm={searchTerm}
                filterTerm={filterTerm}
                title="Menu"
                count={menu?.dishes.length}
            />
            <div className="mt-10 flex gap-5">
                <div
                    className={
                        "font-lg p-2 transition-colors  cursor-pointer  " +
                        (selectedCategory === null
                            ? "border-b-2 border-cheko-primary"
                            : "hover:border-b-2 hover:border-cheko-primary")
                    }
                    onClick={() => setSelectedCategory(null)}
                >
                    All <span className="text-sm text-gray-500">({dishes.length})</span>
                </div>
                {categories.map(category => (
                    <div
                        onClick={() => setSelectedCategory(category)}
                        key={category.id}
                        className={
                            "font-lg p-2 transition-colors  cursor-pointer " +
                            (selectedCategory?.id === category.id
                                ? "border-b-2 border-cheko-primary"
                                : "hover:border-b-2 hover:border-cheko-primary")
                        }
                    >
                        {category.name} <span className="text-sm text-gray-500">({countsByCategory.get(category.id) ?? 0})</span>
                    </div>
                ))}
            </div>
            <div
                className={`flex flex-wrap gap-4 mt-1 border-t pt-2 ${
                    theme === "dark" ? "border-gray-700" : "border-gray-200"
                }`}
            >
                {dishes.map((dish, index) => {
                    if (
                        selectedCategory &&
                        dish.category.id !== selectedCategory.id
                    ) {
                        return null;
                    }

                    if (
                        searchTerm &&
                        (!dish.name
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase()) &&
                            !dish.description
                                .toLowerCase()
                                .includes(searchTerm.toLowerCase()))
                    ) {
                        return null;
                    }

                    if (
                        filterTerm.length > 0 &&
                        !filterTerm.some(
                            category => category.id === dish.category.id
                        )
                    ) {
                        return null;
                    }

                    // Wrap each DishCard with a motion.div and stagger by index
                    return (
                        <motion.div
                            key={dish.id}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.04, duration: 0.36 }}
                        >
                            <DishCard dish={dish} />
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
