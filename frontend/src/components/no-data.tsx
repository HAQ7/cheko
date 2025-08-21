import { FrownIcon } from "lucide-react";

export default function NoData() {
    return (
        <div className="grid place-items-center text-gray-500 text-lg">
            <FrownIcon />
            <div>No data found.</div>
        </div>
    );
}
