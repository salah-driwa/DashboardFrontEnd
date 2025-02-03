import { motion } from "framer-motion";
import Header from "./Header";
import Bodyview from "./Bodyviews";
import DailyTarget from "./DailyTarget";
import NewActivity from "./NewActivity";
import MealPlan from "./MealPlan";
import { GoHomeFill } from "react-icons/go";
import { IoIosStats } from "react-icons/io";
import { MdAutoGraph, MdDateRange } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { useState } from "react";

const Sidebar = () => {
  const [activePage, setActivePage] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: <GoHomeFill size={24} />, notifications: 0 },
    { name: "Products", icon: <IoIosStats size={24} />, notifications: 5 },
    { name: "Conversation", icon: <MdAutoGraph size={24} />, notifications: 2 },
    { name: "Analytics", icon: <MdDateRange size={24} />, notifications: 0 },
    { name: "Campaigns", icon: <FaUser size={24} />, notifications: 1 },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`align-top bg-[#0f1412] rounded-3xl p-3 mt-6 mb-6 ml-6 mr-6 transition-width duration-300 flex flex-col`}
      >
        <div className="flex justify-center items-center gap-1">
          <div className="text-2xl font-extrabold text-[#cdfb47] text-center mt-5">LOGO</div>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col gap-4 mt-6">
          {menuItems.map((item) => (
            <motion.div
              key={item.name}
              onClick={() => setActivePage(item.name)}
              className={`flex items-center justify-center w-16 h-16 mx-auto rounded-full relative gap-4 py-2 cursor-pointer transition-all duration-200 ease-in-out ${
                activePage === item.name
                  ? "opacity-100 bg-[#cdfb47]"
                  : "opacity-70 hover:opacity-90 hover:scale-105"
              }`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className={`${
                  activePage === item.name ? "text-black" : "text-white"
                }`}
              >
                {item.icon}
              </div>
              {item.notifications > 0 && (
                <div className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 rounded-full bg-red-600 text-xs text-white">
                  {item.notifications}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col overflow-auto w-8/12 border-r pr-5 border-black border-opacity-15">
        {/* Header with Framer Motion */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Header />
        </motion.div>

        {/* Bodyview and DailyTarget with Framer Motion */}
        <motion.div
          className="flex scale-110 w-full justify-evenly"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Bodyview />
          <DailyTarget />
        </motion.div>

        {/* NewActivity with Framer Motion */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <NewActivity />
        </motion.div>

      
      </div>
        {/* MealPlan with Framer Motion */}
        <motion.div
          className="w-3/12 px-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <MealPlan />
        </motion.div>
    </div>
  );
};

export default Sidebar;
