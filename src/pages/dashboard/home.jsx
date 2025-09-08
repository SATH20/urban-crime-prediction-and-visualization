import React from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Progress,
} from "@material-tailwind/react";
import {
  EllipsisVerticalIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";
import {
  CheckCircleIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";
import { StatisticsChart } from "@/widgets/charts";
import {
  statisticsCardsData,
  statisticsChartsData,
  projectsTableData,
  ordersOverviewData,
} from "@/data";
import { useMaterialTailwindController } from "@/context";

export function Home() {
  const [controller] = useMaterialTailwindController();
  const { darkMode } = controller;

  return (
    <div
      className={`transition-colors duration-500 ${
        darkMode ? "bg-[#051139] text-white" : "bg-white text-black"
      }`}
    >
      {/* Gradient background behind the top section */}
      <div
        className={`absolute top-0 left-0 w-full h-[390px] z-0 ${
          darkMode
            ? "bg-[#051139]"
            : "bg-gradient-to-r from-indigo-700 via-blue-600 to-cyan-400"
        } transition-colors duration-500`}
      />

      {/* Main content */}
      <div className="relative z-10 pt-8 mt-2 px-4">
        {/* Cards */}
        <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
          {statisticsCardsData.map(({ icon, title, value, footer }, index) => (
            <div
              key={index}
              className={`relative ${
                darkMode ? "bg-[#0d1b4c] text-white" : "bg-[#ffffff] text-black"
              } rounded-[2.5em] p-8 transition-all duration-300 hover:scale-[0.97] active:scale-90 cursor-pointer`}
            >
              <div className="flex flex-col justify-between gap-[5em] h-full">
                <div className="flex justify-between">
                  <p className="font-semibold m-0">{title}</p>
                  <h2 className="font-bold m-0">{value}</h2>
                </div>
                <div className="flex justify-between items-end">
                  <p className={`font-semibold m-0 ${footer.color}`}>{footer.value}</p>
                  <h2 className="font-bold m-0">{footer.label}</h2>
                </div>
              </div>
              <div className="absolute inset-0 grid place-items-center pointer-events-none">
                {React.createElement(icon, {
                  className: "w-16 h-16",
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
          {statisticsChartsData.map((props) => (
            <StatisticsChart
              key={props.title}
              {...props}
              footer={
                <Typography
                  variant="small"
                  className="flex items-center font-normal text-blue-gray-600"
                >
                  <ClockIcon strokeWidth={2} className="h-4 w-4 text-blue-gray-400" />
                  &nbsp;{props.footer}
                </Typography>
              }
            />
          ))}
        </div>

        {/* Table and Overview Cards */}
        <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
          {/* City Crime Risk Zones Table */}
          <Card
            className={`overflow-hidden xl:col-span-2 border ${
              darkMode
                ? "border-gray-600 bg-[#0f215c]"
                : "border-blue-gray-100 bg-white"
            } shadow-sm`}
          >
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 flex items-center justify-between p-6"
            >
              <div>
                <Typography variant="h6" color="inherit" className="mb-1">
                  City Crime Risk Zones
                </Typography>
                <Typography
                  variant="small"
                  className="flex items-center gap-1 font-normal"
                >
                  <CheckCircleIcon strokeWidth={3} className="h-4 w-4" />
                  <strong>12 high-risk zones</strong> currently flagged
                </Typography>
              </div>
              <Menu placement="left-start">
                <MenuHandler>
                  <IconButton size="sm" variant="text" color="blue-gray">
                    <EllipsisVerticalIcon className="h-6 w-6" />
                  </IconButton>
                </MenuHandler>
                <MenuList>
                  <MenuItem>Export Report</MenuItem>
                  <MenuItem>View All Cities</MenuItem>
                  <MenuItem>Download Data</MenuItem>
                </MenuList>
              </Menu>
            </CardHeader>
            <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
              <table className="w-full min-w-[640px] table-auto">
                <thead>
                  <tr>
                    {["city", "zone", "crime rate", "alert level"].map((el) => (
                      <th
                        key={el}
                        className={`border-b py-3 px-6 text-left ${
                          darkMode ? "border-gray-600" : "border-blue-gray-50"
                        }`}
                      >
                        <Typography
                          variant="small"
                          className="text-[11px] font-medium uppercase"
                        >
                          {el}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {projectsTableData.map(
                    ({ img, name, members, budget, completion }, key) => {
                      const className = `py-3 px-5 ${
                        key === projectsTableData.length - 1
                          ? ""
                          : darkMode
                          ? "border-b border-gray-600"
                          : "border-b border-blue-gray-50"
                      }`;

                      return (
                        <tr key={name}>
                          <td className={className}>
                            <div className="flex items-center gap-4">
                              <Avatar src={img} alt={name} size="sm" />
                              <Typography variant="small" className="font-bold">
                                {name}
                              </Typography>
                            </div>
                          </td>
                          <td className={className}>
                            <Typography variant="small" className="text-xs font-medium">
                              {members[0].name}
                            </Typography>
                          </td>
                          <td className={className}>
                            <Typography variant="small" className="text-xs font-medium">
                              {budget}
                            </Typography>
                          </td>
                          <td className={className}>
                            <div className="w-10/12">
                              <Typography
                                variant="small"
                                className="mb-1 block text-xs font-medium"
                              >
                                {completion}%
                              </Typography>
                              <Progress
                                value={completion}
                                variant="gradient"
                                color={
                                  completion >= 80
                                    ? "red"
                                    : completion >= 50
                                    ? "orange"
                                    : "green"
                                }
                                className="h-1"
                              />
                            </div>
                          </td>
                        </tr>
                      );
                    }
                  )}
                </tbody>
              </table>
            </CardBody>
          </Card>

          {/* Crime Reports Summary Card */}
          <Card
            className={`border shadow-sm ${
              darkMode
                ? "border-gray-600 bg-[#0f215c]"
                : "border-blue-gray-100 bg-white"
            }`}
          >
            <CardHeader floated={false} shadow={false} color="transparent" className="m-0 p-6">
              <Typography variant="h6" color="inherit" className="mb-2">
                Crime Reports Summary
              </Typography>
              <Typography
                variant="small"
                className="flex items-center gap-1 font-normal"
              >
                <ArrowUpIcon className="h-3.5 w-3.5 text-green-500" />
                <strong>18%</strong> increase this week
              </Typography>
            </CardHeader>
            <CardBody className="pt-0">
              {ordersOverviewData.map(
                ({ icon, color, title, description }, key) => (
                  <div key={title} className="flex items-start gap-4 py-3">
                    <div
                      className={`relative p-1 after:absolute after:-bottom-6 after:left-2/4 after:w-0.5 after:-translate-x-2/4 after:content-[''] ${
                        key === ordersOverviewData.length - 1
                          ? "after:h-0"
                          : "after:h-4/6"
                      } ${
                        darkMode ? "after:bg-gray-700" : "after:bg-blue-gray-50"
                      }`}
                    >
                      {React.createElement(icon, {
                        className: `!w-5 !h-5 ${color}`,
                      })}
                    </div>
                    <div>
                      <Typography variant="small" className="block font-medium">
                        {title}
                      </Typography>
                      <Typography
                        as="span"
                        variant="small"
                        className="text-xs font-medium"
                      >
                        {description}
                      </Typography>
                    </div>
                  </div>
                )
              )}
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Home;
