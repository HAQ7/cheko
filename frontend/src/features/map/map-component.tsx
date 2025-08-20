import { useState, useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_ACCESS_TOKEN = "YOUR_MAPBOX_ACCESS_TOKEN";

const DEFAULT_MAP_BOUNDS: [[number, number], [number, number]] = [
  [-74.03189, 40.69684],
  [-73.98121, 40.72286],
];

export default function MapComponent() {
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  const [searchCategory, setSearchCategory] = useState<string | undefined>();

  useEffect(() => {
    if (!mapContainerRef.current) {
      console.error("Map container ref is not available");
      return;
    }

    mapRef.current = new mapboxgl.Map({
      accessToken: MAPBOX_ACCESS_TOKEN,
      container: mapContainerRef.current,
      bounds: DEFAULT_MAP_BOUNDS,
      minZoom: 13,
      config: {
        basemap: {
          showPointOfInterestLabels: false,
        },
      },
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, []);

  const categoryButtons = [
    { label: "☕ Coffee", value: "coffee" },
    { label: "🍽️ Restaurants", value: "restaurant" },
    { label: "🍸 Bars", value: "bar" },
    { label: "🏨 Hotels", value: "hotel" },
    { label: "🏛️ Museums", value: "museum" },
  ];

  return (
    <>
      <div className="button-container">
        {categoryButtons.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => setSearchCategory(value)}
            className={`category-button ${
              searchCategory === value && "active"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Map container */}
      <div id="map-container" ref={mapContainerRef} />
    </>
  );
}
