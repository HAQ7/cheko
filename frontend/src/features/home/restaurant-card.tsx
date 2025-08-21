import { Link } from "react-router";
import Card from "../../components/card";
import type { Restaurant } from "@/types/restaurant";

export default function RestaurantCard({
    restaurant,
}: {
    restaurant: Restaurant;
}) {
    return (
        <Card>
            <div className="flex sm:flex-row flex-col relative gap-5">

                <img src={restaurant.imageURL} alt={restaurant.name} className="h-32 sm:w-32 w-full rounded-lg object-cover" />
                <div className="flex-1">
                    <h2 className="text-xl font-semibold">{restaurant.name}</h2>
                    <p className="text-gray-600">{restaurant.description}</p>
                    <p className="text-gray-500">
                        Location: {restaurant.location}
                    </p>
                </div>
                <Link
                    className="self-end bg-cheko-primary px-4 py-2 rounded-lg hover:bg-cheko-primary-hover transition-colors text-black"
                    to={`/menu/${restaurant.menuId}`}
                >
                    View details
                </Link>
            </div>
        </Card>
    );
}
