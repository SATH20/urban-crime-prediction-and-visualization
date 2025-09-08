import { useLocation, Link } from "react-router-dom";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Breadcrumbs,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  Cog6ToothIcon,
  BellAlertIcon,
  ClockIcon,
  ShieldExclamationIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import {
  useMaterialTailwindController,
  setOpenConfigurator,
  setOpenSidenav,
} from "@/context";

export function DashboardNavbar() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { openSidenav } = controller;
  const { pathname } = useLocation();
  const [layout, page] = pathname.split("/").filter((el) => el !== "");

  return (
    <Navbar
      className="sticky top-4 z-40 py-5 px-4 shadow-md shadow-blue-gray-100 bg-white rounded-[2.5em] border border-blue-gray-200 font-bold"
      fullWidth
      blurred={false}
    >
      <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
        {/* Breadcrumb and Page Title */}
        <div className="capitalize">
          <Breadcrumbs className="bg-transparent p-0">
            <Link to={`/${layout}`}>
              <Typography
                variant="small"
                color="blue-gray"
                className="font-bold opacity-70 hover:text-blue-500"
              >
                {layout}
              </Typography>
            </Link>
            <Typography variant="small" color="blue-gray" className="font-bold">
              {page}
            </Typography>
          </Breadcrumbs>
          <Typography variant="h6" color="blue-gray" className="font-bold">
            {page === "dashboard" ? "Crime Dashboard" : page}
          </Typography>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2">
          <IconButton
            variant="text"
            color="blue-gray"
            className="grid xl:hidden"
            onClick={() => setOpenSidenav(dispatch, !openSidenav)}
          >
            <Bars3Icon strokeWidth={3} className="h-6 w-6 text-blue-gray-500" />
          </IconButton>

          <Link to="/auth/sign-in">
            <Button
              variant="text"
              color="blue-gray"
              className="hidden xl:flex items-center gap-1 px-4 normal-case font-bold"
            >
              <UserCircleIcon className="h-5 w-5 text-blue-gray-500" />
              Login
            </Button>
            <IconButton variant="text" color="blue-gray" className="grid xl:hidden">
              <UserCircleIcon className="h-5 w-5 text-blue-gray-500" />
            </IconButton>
          </Link>

          <Menu>
            <MenuHandler>
              <IconButton variant="text" color="blue-gray">
                <BellAlertIcon className="h-5 w-5 text-blue-gray-500" />
              </IconButton>
            </MenuHandler>
            <MenuList className="w-max border-0">
              <MenuItem className="flex items-center gap-3">
                <Avatar
                  src="https://cdn-icons-png.flaticon.com/512/2190/2190563.png"
                  alt="item-1"
                  size="sm"
                  variant="circular"
                />
                <div>
                  <Typography variant="small" color="blue-gray" className="font-bold">
                    <strong>New FIR</strong> filed from Begumpet
                  </Typography>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center gap-1 text-xs font-medium opacity-60"
                  >
                    <ClockIcon className="h-3.5 w-3.5" /> 12 mins ago
                  </Typography>
                </div>
              </MenuItem>
              <MenuItem className="flex items-center gap-4">
                <Avatar
                  src="https://cdn-icons-png.flaticon.com/512/3649/3649462.png"
                  alt="item-2"
                  size="sm"
                  variant="circular"
                />
                <div>
                  <Typography variant="small" color="blue-gray" className="font-bold">
                    <strong>Incident Alert</strong> in Charminar
                  </Typography>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center gap-1 text-xs font-medium opacity-60"
                  >
                    <ClockIcon className="h-3.5 w-3.5" /> 1 hour ago
                  </Typography>
                </div>
              </MenuItem>
              <MenuItem className="flex items-center gap-4">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-tr from-red-600 to-red-800">
                  <ShieldExclamationIcon className="h-4 w-4 text-white" />
                </div>
                <div>
                  <Typography variant="small" color="blue-gray" className="font-bold">
                    Suspect marked as active
                  </Typography>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center gap-1 text-xs font-medium opacity-60"
                  >
                    <ClockIcon className="h-3.5 w-3.5" /> 2 hours ago
                  </Typography>
                </div>
              </MenuItem>
            </MenuList>
          </Menu>

          <IconButton
            variant="text"
            color="blue-gray"
            onClick={() => setOpenConfigurator(dispatch, true)}
          >
            <Cog6ToothIcon className="h-5 w-5 text-blue-gray-500" />
          </IconButton>
        </div>
      </div>
    </Navbar>
  );
}

DashboardNavbar.displayName = "/src/widgets/layout/dashboard-navbar.jsx";

export default DashboardNavbar;