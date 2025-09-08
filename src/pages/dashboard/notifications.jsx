import {
  Card,
  CardBody,
  Typography,
  Tabs,
  TabsHeader,
  Tab
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import HeatmapLayer from "@/components/HeatmapLayer";
import { cityCrimeData } from "@/data";
import { SunIcon, CloudIcon, MoonIcon } from "@heroicons/react/24/solid";

function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

export function Notifications() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [timeSlot, setTimeSlot] = useState("morning");
  const [heatmapData, setHeatmapData] = useState([]);
  const [mapCenter, setMapCenter] = useState([20.5937, 78.9629]);
  const [zoomLevel, setZoomLevel] = useState(5);

  useEffect(() => {
    const randomCity = cityCrimeData[Math.floor(Math.random() * cityCrimeData.length)];
    setSelectedCity(randomCity.city);
  }, []);

  useEffect(() => {
    const fetchCrimeData = async () => {
      if (!selectedCity) return;

      try {
        const res = await axios.get(
          `http://127.0.0.1:5000/api/crime?city=${selectedCity}&timeslot=${timeSlot}`
        );
        const data = res.data;

        if (data.length > 0) {
          const points = data.map((d) => [
            parseFloat(d.latitude),
            parseFloat(d.longitude),
            parseFloat(d.intensity),
          ]);
          setHeatmapData(points);
          const { latitude, longitude } = data[0];
          setMapCenter([parseFloat(latitude), parseFloat(longitude)]);
          setZoomLevel(12);
        } else {
          setHeatmapData([]);
        }
      } catch (err) {
        console.error("Failed to fetch crime data:", err);
      }
    };

    fetchCrimeData();
  }, [selectedCity, timeSlot]);

  return (
    <>
      {/* 🔷 Gradient Header */}
      <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-gradient-to-r from-indigo-700 via-blue-600 to-cyan-400">
        <div className="absolute inset-0 h-full w-full bg-blue-gray-900/40" />
      </div>

      {/* 🔵 Card */}
      <Card className="mx-3 -mt-16 mb-6 lg:mx-4 border border-blue-gray-100">
        <CardBody className="p-4">
          <div className="flex flex-wrap justify-between items-center mb-6">
            <div>
              <Typography variant="h4" color="blue-gray">
                City Crime Heatmap: {selectedCity}
              </Typography>
              <Typography variant="small" className="text-blue-gray-600 font-semibold">
                Select Time of Day to Filter Map
              </Typography>
            </div>

            <div className="w-full md:w-[380px] mt-4 md:mt-0">
              <Tabs value={timeSlot} className="w-full">
                <TabsHeader>
                  <Tab value="morning" onClick={() => setTimeSlot("morning")}>
                    <SunIcon className="h-5 w-5 mr-2" />
                    Morning
                  </Tab>
                  <Tab value="afternoon" onClick={() => setTimeSlot("afternoon")}>
                    <CloudIcon className="h-5 w-5 mr-2" />
                    Afternoon
                  </Tab>
                  <Tab value="evening" onClick={() => setTimeSlot("evening")}>
                    <MoonIcon className="h-5 w-5 mr-2" />
                    Evening
                  </Tab>
                </TabsHeader>
              </Tabs>
            </div>
          </div>

          {/* 🔥 Heatmap */}
          <div className="h-[500px] w-full rounded-xl overflow-hidden">
            <MapContainer
              center={mapCenter}
              zoom={zoomLevel}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                attribution="&copy; OpenStreetMap contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <ChangeView center={mapCenter} zoom={zoomLevel} />
              {heatmapData.length > 0 && <HeatmapLayer points={heatmapData} />}
            </MapContainer>
          </div>
        </CardBody>
      </Card>
    </>
  );
}

export default Notifications;
