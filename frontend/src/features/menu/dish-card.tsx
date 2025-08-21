import { useTheme } from "@/store/theme";
import type { Dish } from "@/types/dish";
import { useState } from "react";

export default function DishCard({ dish }: { dish: Dish }) {
    const { theme } = useTheme();
    const [counter, setCounter] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div
                className={`overflow-hidden shadow-lg w-[500px] flex rounded-lg hover:scale-102 transition-all cursor-pointer p-4 ${
                    theme === "dark" ? "bg-cheko-dark-secondary" : "bg-white"
                }`}
                onClick={() => setIsOpen(true)}
            >
            <img
                src={dish.imageURL}
                alt={dish.name}
                className="w-36 aspect-square object-cover rounded-lg"
            />
            <div className="p-4 flex-1 flex flex-col h-full">
                <h3 className="text-lg font-semibold">{dish.name}</h3>
                <p className="text-gray-500">Calories: {dish.calories}</p>
                <p className="text-gray-500">Price: ${dish.price}</p>
                <p className="text-gray-500">Category: {dish.category.name}</p>
                <div className="flex items-center justify-end w-full mt-2 gap-4">
                    <button
                            className="bg-cheko-primary hover:bg-cheko-primary-hover transition-colors text-black rounded aspect-square w-8 cursor-pointer"
                            onClick={(e) => {
                                e.stopPropagation();
                                if (counter > 0) {
                                    setCounter(counter - 1);
                                }
                            }}
                    >
                        -
                    </button>
                    <span className="">{counter}</span>

                    <button
                            className="bg-cheko-primary hover:bg-cheko-primary-hover transition-colors text-black rounded aspect-square w-8 cursor-pointer"
                            onClick={(e) => {
                                e.stopPropagation();
                                setCounter(counter + 1);
                            }}
                    >
                        +
                    </button>
                </div>
            </div>
            </div>

            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div
                        className="absolute inset-0 bg-black/50"
                        onClick={() => setIsOpen(false)}
                    />

                    <div
                        role="dialog"
                        aria-modal="true"
                        className={`relative max-w-3xl w-full mx-4 rounded-lg shadow-lg p-6 overflow-y-auto max-h-[80vh] ${
                            theme === "dark" ? "bg-cheko-dark-secondary text-white" : "bg-white text-black"
                        }`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-start justify-between mb-4">
                            <h2 className="text-2xl font-semibold">{dish.name}</h2>
                            <button
                                className="text-xl font-bold px-2 py-1 rounded hover:bg-gray-200/50"
                                onClick={() => setIsOpen(false)}
                                aria-label="Close"
                            >
                                ×
                            </button>
                        </div>

                        <div className="flex gap-6">
                            <img
                                src={dish.imageURL}
                                alt={dish.name}
                                className="w-48 h-48 object-cover rounded-lg flex-shrink-0"
                            />

                            <div className="flex-1">
                                <p className="text-gray-500 mb-2">Category: {dish.category.name}</p>
                                <p className="text-gray-500 mb-2">Calories: {dish.calories}</p>
                                <p className="text-gray-500 mb-2">Price: ${dish.price}</p>
                                <div className="mt-4">
                                    <h3 className="font-medium">Description</h3>
                                    <p className="mt-2 text-gray-700 dark:text-gray-300">{dish.description ?? "No description."}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
