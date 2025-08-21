import type { Category } from "@/types/category";

export default function searchCategory({
    searchTerm,
}: {
    searchTerm: string;
}): Promise<Category[]> {
    return fetch(`http://localhost:8080/category/search?category=${searchTerm}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch categories");
            }
            return response.json();
        })
        .then(data => data.content)
        .catch(error => {
            console.error(error);
            throw new Error("Error fetching categories");
        });
}
