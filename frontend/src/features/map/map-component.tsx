import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useSearch } from "@/store/search";
import type { Restaurant } from "@/types/restaurant";
import type { Page } from "@/types/page";
import searchRestaurants from "../home/requests/search-restaurants";
import getRestaurants from "../home/requests/get-restaurants";
import Loading from "@/components/loading";
import { useTheme } from "@/store/theme";

const MAPBOX_ACCESS_TOKEN =
    "pk.eyJ1IjoiaGFxNyIsImEiOiJjbWVra2NreGUwM284MnFyMDZmeHNqZzN3In0.WMw-tb1p4VoUwWsQ9aTOaw";
const DEFAULT_MAP_BOUNDS: any = [
    [46.5707, 24.6947],
    [46.7311, 24.7736],
];

export default function MapComponent() {
    const mapRef = useRef(null as any);
    const mapContainerRef = useRef(null as any);
    const markersRef = useRef<mapboxgl.Marker[]>([]);
    const { theme } = useTheme();

    const { searchTerm, filterTerm, setFilterTerm, setSearchTerm } =
        useSearch();
    const [isLoading, setIsLoading] = useState(false);
    const [restaurantData, setRestaurantData] =
        useState<Page<Restaurant> | null>(null);

    useEffect(() => {
        setSearchTerm("");
        setFilterTerm([]);
    }, []);

    useEffect(() => {
        setIsLoading(true);

        const fetchData = async () => {
            let data: Page<Restaurant> | null = null;

            try {
                if (searchTerm || filterTerm.length > 0) {
                    data = await searchRestaurants({ searchTerm, filterTerm });
                } else {
                    data = await getRestaurants();
                }
            } catch (error) {
                console.error("Error fetching restaurants:", error);
            } finally {
                if (data) {
                    console.log("Fetched restaurant data:", data);
                    setRestaurantData(data);
                }
                setIsLoading(false);
            }
        };

        fetchData();
    }, [searchTerm, filterTerm]);

    // Initialize map
    useEffect(() => {
        mapRef.current = new mapboxgl.Map({
            accessToken: MAPBOX_ACCESS_TOKEN,
            container: mapContainerRef.current,
            bounds: DEFAULT_MAP_BOUNDS,
            minZoom: 10,
            fitBoundsOptions: {
                padding: 50,
            },
            config: {
                basemap: {
                    showPointOfInterestLabels: false,
                },
            },
        });

        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
            }
        };
    }, []);

    // Update markers when restaurant data changes
    useEffect(() => {
        // Wait for map to be initialized
        if (!mapRef.current || !restaurantData?.content) return;

        // Ensure map is loaded before adding markers
        const addMarkers = () => {
            // Clear existing markers
            markersRef.current.forEach(marker => marker.remove());
            markersRef.current = [];
            console.log(
                "Adding markers for restaurants:",
                restaurantData.content.length
            );
            // Add markers for each restaurant
            restaurantData.content.forEach((restaurant, index) => {
                // Parse location string to get coordinates
                // Assuming location format is "lat,lng" or you might need to geocode
                // For now, I'll generate random coordinates within Riyadh bounds
                // You should replace this with actual coordinates from your data
                const coordinates = getRestaurantCoordinates(restaurant);

                // Create custom marker element
                const markerEl = document.createElement("div");
                markerEl.className = "custom-marker";
                markerEl.style.cssText = `
                background-color: #edabcb;
                width: 36px;
                height: 36px;
                border-radius: 50%;
                border: 3px solid white;
                box-shadow: 0 3px 8px rgba(0,0,0,0.4);
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-weight: bold;
                font-size: 14px;
            `;
                markerEl.textContent = (index + 1).toString();

                // Create popup with restaurant information
                const popup = new mapboxgl.Popup({
                    offset: 25,
                    closeButton: true,
                    closeOnClick: false,
                    className: "custom-popup",
                    maxWidth: "300px",
                }).setHTML(`
                <div style="padding: 12px; min-width: 250px;">
                    ${
                        restaurant.imageURL
                            ? `
                        <img 
                            src="${restaurant.imageURL}" 
                            alt="${restaurant.name}"
                            style="width: 100%; height: 120px; object-fit: cover; border-radius: 8px; margin-bottom: 12px;"
                            onerror="this.style.display='none'"
                        />
                    `
                            : ""
                    }
                    <h3 style="margin: 0 0 8px 0; font-weight: bold; color: #333; font-size: 18px;">
                        ${restaurant.name}
                    </h3>
                    <p style="margin: 0 0 8px 0; font-size: 14px; color: #666; line-height: 1.4;">
                        ${restaurant.description || "No description available"}
                    </p>
                    <p style="margin: 0 0 8px 0; font-size: 13px; color: #888;">
                        <strong>Location:</strong> ${restaurant.location}
                    </p>
                    ${
                        restaurant.menuId
                            ? `
                        <button 
                            onclick="window.location.href='/menu/${restaurant.menuId}'"
                            style="
                                background-color: #edabcb;
                                color: white;
                                border: none;
                                padding: 8px 16px;
                                border-radius: 4px;
                                cursor: pointer;
                                font-size: 14px;
                                width: 100%;
                                margin-top: 8px;
                            "
                            onmouseover="this.style.backgroundColor='#f4cbdf'"
                            onmouseout="this.style.backgroundColor='#edabcb'"
                        >
                            View Menu
                        </button>
                    `
                            : ""
                    }
                </div>
            `);

                // Add marker to map
                const marker = new mapboxgl.Marker(markerEl)
                    .setLngLat(coordinates)
                    .setPopup(popup)
                    .addTo(mapRef.current);

                markersRef.current.push(marker);
            });

            // Adjust map bounds to fit all markers if there are any
            if (markersRef.current.length > 0) {
                const bounds = new mapboxgl.LngLatBounds();
                markersRef.current.forEach(marker => {
                    bounds.extend(marker.getLngLat());
                });
                mapRef.current.fitBounds(bounds, {
                    padding: 100,
                    maxZoom: 15,
                });
            }
        };

        // Check if map is loaded, if not wait for it
        if (mapRef.current.loaded()) {
            addMarkers();
        } else {
            mapRef.current.on("load", addMarkers);
        }
    }, [restaurantData]);

    // Helper function to get coordinates from restaurant data
    // You should replace this with actual coordinate parsing based on your data format
    const getRestaurantCoordinates = (
        restaurant: Restaurant
    ): [number, number] => {
        console.log(
            "Getting coordinates for restaurant:",
            restaurant.name,
            restaurant.latitude,
            restaurant.longitude
        );
        return [restaurant.longitude, restaurant.latitude];
    };

    return (
        <div className="w-full">
            <div className="mb-4">
                <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"} text-sm mb-2`}>
                    Click on the numbered markers to see restaurant details
                </p>
                {(searchTerm || filterTerm.length > 0) && (
                    <div className={`${theme === "dark" ? "bg-cheko-dark-secondary" : "bg-gray-200"} rounded-lg p-3`}>
                        <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-800"} text-sm`}>
                            {searchTerm && (
                                <span>
                                    Searching for: <strong>{searchTerm}</strong>
                                </span>
                            )}
                            {searchTerm && filterTerm.length > 0 && " | "}
                            {filterTerm.length > 0 && (
                                <span>
                                    Filters:{" "}
                                    <strong>
                                        {filterTerm.map(n => n.name).join(", ")}
                                    </strong>
                                </span>
                            )}
                        </p>
                        {isLoading ? (
                            <Loading />
                        ) : restaurantData ? (
                            <p className={`text-xs ${theme === "dark" ? "text-white" : "text-gray-800"} mt-1`}>
                                Showing {restaurantData.content.length}{" "}
                                restaurant
                                {restaurantData.content.length !== 1 ? "s" : ""}
                            </p>
                        ) : (
                            <></>
                        )}
                    </div>
                )}
            </div>

            <div className="w-full h-[800px] max-h-screen border border-gray-300 rounded-lg overflow-hidden shadow-lg">
                <div
                    id="map-container"
                    className="w-full h-full"
                    ref={mapContainerRef}
                />
            </div>
            {restaurantData && (
                <div className="mt-4 p-4 bg-gray-50 border border-gray-200 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">
                        Restaurants ({restaurantData.content.length})
                    </h3>
                    <div className="space-y-2 max-h-60 overflow-y-auto">
                        {restaurantData.content.map((restaurant, index) => (
                            <div
                                key={restaurant.id}
                                className="flex items-center gap-3 p-2 bg-white rounded border border-gray-200 hover:shadow-sm transition-shadow cursor-pointer"
                                onClick={() => {
                                    // Focus on marker when clicking list item
                                    const marker = markersRef.current[index];
                                    if (marker) {
                                        mapRef.current.flyTo({
                                            center: marker.getLngLat(),
                                            zoom: 14,
                                            duration: 1000
                                        });
                                        marker.togglePopup();
                                    }
                                }}
                            >
                                <div className="flex-shrink-0 w-8 h-8 bg-cheko-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                                    {index + 1}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="font-medium text-gray-900 truncate">
                                        {restaurant.name}
                                    </p>
                                    <p className="text-xs text-gray-500 truncate">
                                        {restaurant.location}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {isLoading && (<Loading />)}
        </div>
    );
}
