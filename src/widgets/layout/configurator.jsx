import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  Button,
  IconButton,
  Switch,
  Typography,
} from "@material-tailwind/react";
import {
  useMaterialTailwindController,
  setOpenConfigurator,
  setSidenavColor,
  setSidenavType,
  setFixedNavbar,
  setDarkMode, // ✅ IMPORTED
} from "@/context";

export function Configurator() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { openConfigurator, sidenavColor, sidenavType, fixedNavbar, darkMode } = controller;

  const sidenavColors = {
    white: "from-gray-100 to-gray-100 border-gray-200",
    dark: "from-black to-black border-gray-200",
    green: "from-green-400 to-green-600",
    orange: "from-orange-400 to-orange-600",
    red: "from-red-400 to-red-600",
    pink: "from-pink-400 to-pink-600",
  };

  return (
    <aside
      className={`fixed top-0 right-0 z-50 h-screen w-96 bg-white shadow-xl transition-transform duration-300 overflow-auto ${
        openConfigurator ? "translate-x-0" : "translate-x-96"
      }`}
    >
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <Typography variant="h5" color="blue-gray">
              Argon Configurator
            </Typography>
            <Typography variant="small" color="gray">
              See our dashboard options.
            </Typography>
          </div>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={() => setOpenConfigurator(dispatch, false)}
          >
            <XMarkIcon className="h-5 w-5" />
          </IconButton>
        </div>

        <hr className="my-4" />

        {/* Sidebar Colors */}
        <div className="mb-6">
          <Typography variant="h6" color="blue-gray">Sidebar Colors</Typography>
          <div className="flex gap-2 mt-3">
            {Object.keys(sidenavColors).map((color) => (
              <span
                key={color}
                className={`h-6 w-6 rounded-full cursor-pointer border-2 bg-gradient-to-br ${sidenavColors[color]} ${
                  sidenavColor === color ? "border-black" : "border-transparent"
                }`}
                onClick={() => setSidenavColor(dispatch, color)}
              />
            ))}
          </div>
        </div>

        {/* Sidenav Type */}
        <div className="mb-6">
          <Typography variant="h6" color="blue-gray">Sidenav Type</Typography>
          <Typography variant="small" color="gray">
            Choose between 2 different sidenav types.
          </Typography>
          <div className="flex gap-2 mt-3">
            <Button
              variant={sidenavType === "white" ? "gradient" : "outlined"}
              onClick={() => setSidenavType(dispatch, "white")}
              fullWidth
            >
              White
            </Button>
            <Button
              variant={sidenavType === "dark" ? "gradient" : "outlined"}
              onClick={() => setSidenavType(dispatch, "dark")}
              fullWidth
            >
              Dark
            </Button>
          </div>
          <Typography
            variant="small"
            color="gray"
            className="mt-2 block xl:hidden"
          >
            You can change the sidenav type just on desktop view.
          </Typography>
        </div>

       
        

        {/* Dark Mode Toggle */}
        <div className="flex items-center justify-between mb-6">
          <Typography variant="h6" color="blue-gray">
            Light / Dark
          </Typography>
          <Switch
            id="dark-version"
            checked={darkMode}
            onChange={() => setDarkMode(dispatch, !darkMode)}
          />
        </div>

        <hr className="my-4" />
      </div>
    </aside>
  );
}

Configurator.displayName = "/src/widgets/layout/configurator.jsx";

export default Configurator;
