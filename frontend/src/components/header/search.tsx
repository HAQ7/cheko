import { FilterIcon, SearchIcon } from "lucide-react";
import { useTheme } from "../../store/theme";
import { useSearch } from "../../store/search";
import { useRef, useState } from "react";
import CategorySearch from "./category-search";
import type { Category } from "@/types/category";

export default function Search() {
    const { theme } = useTheme();
    const { setSearchTerm, setFilterTerm } = useSearch();
    const searchTermRef = useRef<HTMLInputElement>(null);
    const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
    console.log(selectedCategories);

    return (
        <div
            className={`w-full sm:h-12 h-46 z-10 md:mt-28 mt-34 md:mx-28 mx-4 ${
                theme === "dark"
                    ? "bg-cheko-dark-secondary text-white"
                    : "bg-white text-black"
            } shadow-2xl rounded-lg transition-colors flex sm:flex-row flex-col py-2 sm:py-0 px-2 sm:px-0 gap-2 sm:gap-0`}
        >
            <div
                className={`sm:flex-1/2 flex sm:border-r ${
                    theme === "dark" ? "border-gray-700" : "border-gray-200"
                } sm:ps-2 items-center gap-2 transition-colors min-h-12 py-2 sm:py-0`}
            >
                <SearchIcon
                    size={20}
                    className={`${
                        theme === "dark" ? "text-gray-700" : "text-gray-200"
                    } transition-colors`}
                />
                <input
                    ref={searchTermRef}
                    type="text"
                    placeholder="Search"
                    className={`flex-1 h-full bg-transparent outline-none ${
                        theme === "dark"
                            ? "placeholder-gray-400"
                            : "placeholder-gray-500"
                    } transition-colors`}
                />
            </div>
            <div
                className={`sm:flex-1/4 flex sm:ps-2 items-center gap-2 min-h-12 py-2 sm:py-0 sm:border-0 border-y ${
                    theme === "dark" ? "border-gray-700" : "border-gray-200"
                }`}
            >
                <FilterIcon
                    size={20}
                    className={`${
                        theme === "dark" ? "text-gray-700" : "text-gray-200"
                    } transition-colors`}
                />
                <CategorySearch onSelect={setSelectedCategories} />
            </div>
            <div className="sm:flex-1 flex justify-center items-center px-2 min-h-12 py-2 sm:py-0">
                <button
                    onClick={() => {
                        setSearchTerm(searchTermRef.current?.value || "");
                        setFilterTerm(selectedCategories);
                    }}
                    className="bg-cheko-primary px-6 py-3 sm:px-4 sm:py-2 text-black rounded-lg text-sm sm:text-xs cursor-pointer hover:bg-cheko-primary-hover transition-colors w-full sm:w-auto"
                >
                    Search
                </button>
            </div>
        </div>
    );
}
