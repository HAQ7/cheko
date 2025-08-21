import type { Menu } from "@/types/menu";


export default async function getMenu(id: string): Promise<Menu> {
    try {
        const response = await fetch(`http://localhost:8080/menu/${id}`);
        if (!response.ok) {
            throw new Error("Failed to fetch menu");
        }
        return response.json();
    } catch (error) {
        console.error(error);
        throw new Error("Error fetching menu");
    }
}
