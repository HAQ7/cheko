import { useEffect, useState } from "react";
import Title from "../../components/title";
import type { Menu } from "@/types/menu";
import { useSearch } from "@/store/search";
import type { Dish } from "@/types/dish";
import getMenu from "./requests/get-menu";
import Loading from "@/components/loading";
import { useParams } from "react-router";
import DishCard from "./dish-card";

export default function MenuPage() {
    const { setFilterTerm, setSearchTerm } =
        useSearch();
    const { menuId } = useParams<{ menuId: string }>();

    if (!menuId) {
        return <div>Error: Menu ID is required</div>;
    }

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [menu, setMenu] = useState<Menu | null>(null);
    const [dishes, setDishes] = useState<Dish[]>([]);

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
            <Title noLine title="Menu" count={menu?.dishes.length} />
            <div>
              {dishes.map(dish => (
                <DishCard key={dish.id} dish={dish} />
              ))}
            </div>
        </section>
    );
}
