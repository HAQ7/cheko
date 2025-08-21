import type { Category } from "@/types/category";
import { useTheme } from "../store/theme";

export default function Title({
    count,
    title,
    noLine = false,
    searchTerm,
    filterTerm,
}: {
    count?: number;
    title: string;
    noLine?: boolean;
    searchTerm?: string;
    filterTerm?: Category[];
}) {
    const { theme } = useTheme();
    return (
        <div>
            <h1 className="text-2xl font-bold flex gap-2 items-center text-nowrap">
                {searchTerm ? (
                    <>
                        Searching for:{" "}
                        <span className="text-gray-500 text-sm w-96 overflow-hidden text-ellipsis">
                            {searchTerm}
                        </span>
                    </>
                ) : (
                    <span>{title}</span>
                )}
                {count && (
                    <span className="text-gray-500 text-sm">({count})</span>
                )}
                {!noLine && (
                    <div
                        className={`border-b w-full transition-colors ${
                            theme === "dark"
                                ? "border-gray-500"
                                : "border-gray-300"
                        }`}
                    />
                )}
            </h1>
            <div className="text-gray-500 text-sm">
                {filterTerm && filterTerm.length > 0 && (
                    <span>Filtered by: {filterTerm.map((category) => category.name).join(", ")}</span>
                )}
            </div>
        </div>
    );
}
