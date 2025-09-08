import {
  HomeIcon,
  ChartBarIcon,
  MapPinIcon,
  BellAlertIcon,
  ServerStackIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "Dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <ChartBarIcon {...icon} />,
        name: "Crime Trends",
        path: "/trends",
        element: <Profile />, 
      },
      {
        icon: <MapPinIcon {...icon} />,
        name: "City Zones",
        path: "/zones",
        element: <Tables />, 
      },
      {
        icon: <BellAlertIcon {...icon} />,
        name: "Recent Reports",
        path: "/reports",
        element: <Notifications />, 
      },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;