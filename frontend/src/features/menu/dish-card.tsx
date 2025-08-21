import type { Dish } from "@/types/dish";

export default function DishCard({ dish }: { dish: Dish }) {
    return (
        <div className="border rounded-lg overflow-hidden shadow-md">
            <img src={dish.imageURL} alt={dish.name} className="w-full h-32 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-semibold">{dish.name}</h3>
                <p className="text-gray-600">{dish.description}</p>
                <p className="text-gray-500">Price: ${dish.price}</p>
            </div>
        </div>
    );
}
