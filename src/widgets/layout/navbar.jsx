import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Navbar as MTNavbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  HomeIcon,
  ChartBarIcon,
  TableCellsIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";

export function Navbar({ brandName, routes, action }) {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {routes.map(({ name, path, icon }) => (
        <Typography
          key={name}
          as="li"
          variant="small"
          className="capitalize font-bold text-blue-gray-800"
        >
          <Link
            to={path}
            className="flex items-center gap-1 p-1 hover:text-blue-500 transition-colors"
          >
            {icon &&
              React.createElement(icon, {
                className: "w-[18px] h-[18px] opacity-80 mr-1 text-blue-gray-700",
              })}
            {name}
          </Link>
        </Typography>
      ))}
    </ul>
  );

  return (
    <MTNavbar
      className="sticky top-4 z-40 py-3 px-4 shadow-md shadow-blue-gray-100 bg-white border border-blue-gray-200 rounded-[2.5em] font-bold"
      fullWidth
      blurred={false}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/">
          <Typography
            variant="h5"
            className="ml-2 cursor-pointer py-1.5 font-bold text-blue-gray-800"
          >
            {brandName}
          </Typography>
        </Link>

        <div className="hidden lg:block">{navList}</div>

        {React.cloneElement(action, {
          className: "hidden lg:inline-block",
        })}

        <IconButton
          variant="text"
          size="sm"
          className="ml-auto text-blue-gray-800 hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>

      <Collapse open={openNav}>
        <div className="container mx-auto">
          {navList}
          {React.cloneElement(action, {
            className: "w-full block lg:hidden mt-4",
          })}
        </div>
      </Collapse>
    </MTNavbar>
  );
}

Navbar.defaultProps = {
  brandName: "UrbanCrime",
  routes: [
    { name: "Home", path: "/", icon: HomeIcon },
    { name: "Dashboard", path: "/dashboard", icon: ChartBarIcon },
    { name: "Trends", path: "/trends", icon: TableCellsIcon },
    { name: "Contact Us", path: "/contact", icon: PhoneIcon },
  ],
  action: (
    <Link to="/report">
      <Button variant="gradient" size="sm" fullWidth>
        Report a Crime
      </Button>
    </Link>
  ),
};

Navbar.propTypes = {
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.node,
};

Navbar.displayName = "/src/widgets/layout/navbar.jsx";

export default Navbar;
