import { Link } from "react-router";
import Card from "../../components/card";

export default function RestaurantCard({
  name,
  description,
  location,
  menuId
}: {
  name: string;
  description: string;
  location: string;
  menuId: string;
}) {
  return (
    <Card>
      <div className="flex sm:flex-row flex-col relative gap-5">
        <div className="bg-cheko-primary h-32 sm:w-32 w-full rounded-lg" />
        <div className="flex-1">
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-gray-600">{description}</p>
          <p className="text-gray-500">Location: {location}</p>

        </div>
        <Link className="self-end bg-cheko-primary px-4 py-2 rounded-lg hover:bg-cheko-primary-hover transition-colors text-black" to={`/menu/${menuId}`}>
          View details
        </Link>
      </div>
    </Card>
  );
}
