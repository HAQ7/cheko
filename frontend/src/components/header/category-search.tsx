import AsyncSelect from "react-select/async";
import searchCategory from "./requests/search-category";
import type { Category } from "@/types/category";
import { useTheme } from "@/store/theme";

export default function CategorySearch({
    onSelect,
}: {
    onSelect: (categories: any) => void;
}) {

    const { theme } = useTheme();

    const loadOptions = async (inputValue: string) => {
        const data: Category[] = await searchCategory({
            searchTerm: inputValue,
        });
        return data.map(category => ({
            label: category.name,
            value: category.id,
        }));
    };

    return (
        <AsyncSelect
            classNames={{
                control: () =>
                    `flex-1 !border-0 !shadow-none !transition-colors ${theme === "dark" ? "!bg-cheko-dark-secondary !text-white" : "!bg-white !text-black"}`,
                menu: () => `absolute z-10 mt-1 !transition-colors ${theme === "dark" ? "!bg-cheko-dark-secondary !text-white" : "!bg-white !text-black"} rounded-md shadow-lg`,
                option: (state) =>
                    `cursor-pointer !transition-colors select-none relative py-2 pl-10 pr-4 ${
                        state.isFocused ? "!bg-cheko-primary !text-black" : "text-gray-900"
                    }`,
                input: () =>
                    `!transition-colors ${theme === "dark" ? "!text-white" : "!text-black"}`,
                multiValue: () =>
                    `!transition-colors ${theme === "dark" ? "!bg-cheko-dark-primary !text-white" : "!bg-cheko-primary !text-black"}`,
                multiValueLabel: () =>
                    `!transition-colors ${theme === "dark" ? "!text-white" : "!text-black"}`
            }}
            styles={{}}
            defaultOptions
            onChange={(selectedOptions) => {
                onSelect(selectedOptions.map(option => ({ name: option.label, id: option.value })));
            }}
            placeholder="Select Categories"
            loadOptions={loadOptions}
            isMulti
            className="flex-1"
        />
    );
}
