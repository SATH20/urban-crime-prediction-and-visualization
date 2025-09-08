import {
  Card,
  CardBody,
  Input,
  Button
} from "@material-tailwind/react";
import {
  useState
} from "react";
import axios from "axios";
import {
  MapContainer,
  TileLayer,
  useMap
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import HeatmapLayer from "@/components/HeatmapLayer";

export function Profile()
{

  const [cityQuery, setCityQuery] = useState("");
  const [heatmapData, setHeatmapData] = useState([]);
  const [mapCenter, setMapCenter] = useState([20.5937, 78.9629]);
  const [zoomLevel, setZoomLevel] = useState(5);

  const handleSearch = async () =>
  {
    try
    {
      const url = `http://127.0.0.1:5000/api/crime?city=${cityQuery}`;
      const response = await axios.get(url);
      const data = response.data;

      if (Array.isArray(data) && data.length > 0)
      {
        const formattedPoints = data.map(item => [
          parseFloat(item.latitude),
          parseFloat(item.longitude),
          parseFloat(item.intensity)
        ]);

        setHeatmapData(formattedPoints);

        const lat = parseFloat(data[0].latitude);
        const lng = parseFloat(data[0].longitude);

        if (!isNaN(lat) && !isNaN(lng))
        {
          setMapCenter([lat, lng]);
          setZoomLevel(12);
        }
      }
      else
      {
        console.warn("No valid data received for heatmap");
        setHeatmapData([]);
      }
    }
    catch (err)
    {
      console.error("Error fetching data", err);
      setHeatmapData([]);
    }
  };

  function ChangeView({ center, zoom })
  {
    const map = useMap();

    if (!center || center.length !== 2 || isNaN(center[0]) || isNaN(center[1]))
    {
      return null;
    }

    map.setView(center, zoom);
    return null;
  }

  return (
    <>
      {/* 🔵 Gradient Background */}
      <div
        className="absolute top-0 left-0 w-full h-[390px] z-0 bg-gradient-to-r from-indigo-700 via-blue-600 to-cyan-400"
      />

      <Card className="mx-3 mt-[140px] mb-6 lg:mx-4 border border-blue-gray-100 relative z-10 shadow-lg">
        <CardBody className="p-4">

          {/* 🔽 Search Section */}
          <div className="mb-6 flex flex-wrap md:flex-nowrap gap-4 items-center justify-start relative z-[50]">
            <div className="w-full md:w-1/3">
              <Input
                label="Search city"
                value={cityQuery}
                onChange={(e) => setCityQuery(e.target.value)}
              />
            </div>

            <div className="w-full md:w-auto">
              <Button color="blue" onClick={handleSearch} className="w-full md:w-auto">
                Search
              </Button>
            </div>
          </div>

          {/* 🔽 Heatmap Section */}
          <div className="h-[500px] w-full rounded-xl overflow-visible z-0">
            <MapContainer center={mapCenter} zoom={zoomLevel} style={{
              height: "100%",
              width: "100%"
            }}>
              <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <ChangeView center={mapCenter} zoom={zoomLevel} />
              {
                heatmapData.length > 0 && (
                  <HeatmapLayer points={heatmapData} />
                )
              }
            </MapContainer>
          </div>
        </CardBody>
      </Card>
    </>
  );
}

export default Profile;
