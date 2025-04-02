import React from "react";
import { TbChartPieFilled } from "react-icons/tb";
import { IoBriefcaseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    { name: "Cases", path: "/dashboard/cases", icon: <IoBriefcaseSharp /> },
    {
      name: "Case Hearings",
      path: "/dashboard/hearings",
      icon: <IoBriefcaseSharp />,
    },
    { name: "Case Orders", path: "/dashboard/orders", icon: <IoBriefcaseSharp /> },
    { name: "Advocate", path: "/dashboard/advocate", icon: <IoBriefcaseSharp /> },
  ];
  return (
    <aside className="w-64 " aria-label="Sidebar">
      <div className="py-4 px-3 bg-gray-100 h-screen rounded dark:bg-gray-800">
        <ul className="space-y-2">
          <li>
            <div className="flex flex-items p-2 text-base font-bold rounded-lg dark:text-white">
              <span className="ml-3 text-2xl">Dashboard</span>
            </div>
          </li>

          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <IoBriefcaseSharp />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
