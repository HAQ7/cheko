import Title from "../../components/title";
import RestaurantCard from "./restaurant-card";

export default function HomePage() {
  return (
    <section>
      <Title title="Restaurants" count={120} />
      <ul className="mt-4 grid gap-4">
        <li>
          <RestaurantCard
            name="The Great Restaurant"
            description="A wonderful place to dine with family and friends."
            location="123 Main St, Cityville"
            menuId="1"
          />
        </li>
        <li>
          <RestaurantCard
            name="Tasty Treats"
            description="Delicious food that will make your taste buds dance."
            location="456 Elm St, Townsville"
            menuId="2"
          />
        </li>
        {/* Add more RestaurantCard components as needed */}
      </ul>
    </section>
  );
}
