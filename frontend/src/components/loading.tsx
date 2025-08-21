import {LoaderIcon } from "lucide-react";

export default function Loading() {
    return (
        <div className="flex items-center justify-center h-full">
            <LoaderIcon className="animate-spin text-cheko-primary" size={40} />
        </div>
    );
}