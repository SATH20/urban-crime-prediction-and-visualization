import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet.heat";

function HeatmapLayer({ points }) {
  const map = useMap();

  useEffect(() => {
    if (!map || !Array.isArray(points) || points.length === 0) return;

    const normalizedPoints = points.map(p => {
      const lat = parseFloat(p[0]);
      const lng = parseFloat(p[1]);
      const intensity = Math.min(Math.max(parseFloat(p[2]), 0.25), 1); // Clamp between 0.25 and 1
      return [lat, lng, intensity];
    });

    const heat = L.heatLayer(normalizedPoints, {
      radius: 70,
      blur: 25,
      minOpacity: 0.5,
      maxZoom: 20,
      max: 1, // Ensure 1.0 is treated as the max intensity
      gradient: {
        0.25: "orange",
        0.5: "red",
        0.75: "green"
      }
    }).addTo(map);

    return () => {
      map.removeLayer(heat);
    };
  }, [map, points]);

  return null;
}

export default HeatmapLayer;
