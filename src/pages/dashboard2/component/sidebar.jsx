import { useState } from "react";
import { FaUsers, FaRegMoon } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { GoGraph } from "react-icons/go";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { IoChatbubbleEllipsesOutline, IoSettingsOutline, IoStatsChart } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { RiStackLine } from "react-icons/ri";
import { TbLayoutSidebarLeftExpandFilled, TbLayoutSidebarRightExpandFilled } from "react-icons/tb";
import DashboardHeader from "./DashboardHeader";
import DashboardCards from "./DashboardMid";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activePage, setActivePage] = useState("Dashboard");
  const [isDarkMode, setIsDarkMode] = useState(false); // Toggle state for dark mode

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    console.log("hi")
    setIsDarkMode(!isDarkMode);
  };

  const menuItems = [
    { name: "Dashboard", icon: <MdDashboard size={24} />, notifications: 0 },
    { name: "Products", icon: <FiShoppingBag size={24} />, notifications: 5 },
    { name: "Conversation", icon: <IoChatbubbleEllipsesOutline size={24} />, notifications: 2 },
    { name: "Analytics", icon: <GoGraph size={24} />, notifications: 0 },
    { name: "Campaigns", icon: <RiStackLine size={24} />, notifications: 1 },
    { name: "Audience", icon: <FaUsers size={24} />, notifications: 0 },
    { name: "Statistics", icon: <IoStatsChart size={24} />, notifications: 3 },
  ];
  

  const menuItems2 = [
    { name: "Settings", icon: <IoSettingsOutline size={24} /> },
    { name: "Help Center", icon: <IoMdHelpCircleOutline size={24} /> },
    
  ];
  const lastItem = {
    name: "Dark Mode",
    icon: <FaRegMoon size={24} />,
  };
  return (
    <div className="flex ">
      {/* Sidebar */}
      
      <div
        className={`${
          isOpen ? " w-80" : "w-16"
        } bg-secondaryStuff transition-width duration-300 flex flex-col`}
      >
        <div className={` flex  justify-center items-center  ${isOpen ? 'flex-row' : ' flex-col'}  gap-1 `}>
         
        <div className="  text-xl   my-5 text-center w-11/12">Logo</div>
        <div
          onClick={toggleSidebar}
          className=" bg-white bg-opacity-10 p-2 ml-auto rounded-l-md  text-white focus:outline-none"
        >
          {isOpen ? <TbLayoutSidebarLeftExpandFilled  size={25} /> :  <TbLayoutSidebarRightExpandFilled   size={25} />}
        </div>
        </div>
        {isOpen ?  <div className="mx-10 opacity-20 border-[0.1px] mb-5"></div> :  ""}
       
        {/* Toggle Button */}
     

        {/* Menu Items */}
        <div className="flex flex-col gap-4 mt-6">
  {menuItems.map((item) => (
    <div
      key={item.name}
      onClick={() => setActivePage(item.name)}
      className={`flex items-center relative gap-4 pl-4 py-2 cursor-pointer transition-all duration-200 rounded-lg ease-in-out ${
        activePage === item.name
          ? "opacity-100 bg-primary2 scale-105"
          : "opacity-70 hover:opacity-90 hover:scale-105"
      }
      ${isOpen ? "mx-6" : "mx-1"}`}
    >
      <div className=" flex items-center">
        <div className="text-white">{item.icon}</div>
       
      </div>
      {isOpen && (
        <span className="text-white text-lg">{item.name}</span>
      )}
       {item.notifications > 0 && (
          <span className=" bg-red-500 ml-auto mr-2 text-white opacity-100 text-xs w-6 h-6 flex items-center justify-center rounded-full">
            {item.notifications}
          </span>
        )}
    </div>
  ))}
</div>


        <div className="mx-10 opacity-20 border-[0.1px] mt-5"></div>
        <div className="flex flex-col gap-4 mt-6">
          {menuItems2.map((item) => (
            <div
              key={item.name}
              onClick={() => setActivePage(item.name)}
              className={`flex items-center  gap-4 pl-4 py-2 cursor-pointer transition-all duration-200   rounded-lg ease-in-out ${
                activePage === item.name
                  ? "opacity-100 bg-primary2 scale-105 "
                  : "opacity-70 hover:opacity-90 hover:scale-105 "
              }
              ${isOpen ?" mx-6" :" mx-1" }
              `}
            >
              <div className="text-white">{item.icon}</div>
              {isOpen && (
                <span className="text-white text-lg">{item.name}</span>
              )}
            </div>
          ))}
        </div>

          {/* Last Item - Dark Mode Toggle */}
          <div
      className={`flex mb-5 items-center gap-4 pl-4 py-2 cursor-pointer transition-all duration-200 rounded-lg ease-in-out mt-auto 
      ${isOpen ? "mx-6" : "mx-1"}`}
    >
      <div className="text-white">{lastItem.icon}</div>
      {isOpen && (
        <span className="text-white text-lg text-nowrap">{lastItem.name}</span>
      )}

      {/* Custom switch */}
      <div className="relative inline-flex items-center ml-4">
        <input
          type="checkbox"
          id="toggle-switch"
          checked={isDarkMode}
          onChange={toggleDarkMode}
          className="sr-only"
        />
        <label
          htmlFor="toggle-switch"
          className={`flex items-center cursor-pointer w-10 h-6 bg-gray-300 rounded-full relative transition-colors duration-200 ease-in-out ${
            isDarkMode ? 'bg-green-200' : 'bg-gray-400'
          }`}
        >
          <span
            className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-200 ease-in-out ${
              isDarkMode ? 'translate-x-4' : 'translate-x-0'
            }`}
          />
        </label>
      </div>
    </div>


      </div>

      {/* Main Content */}
      <div className="flex-1  bg-bgColor p-8">

<DashboardHeader/>

    <DashboardCards/>
      </div>
    </div>
  );
};

export default Sidebar;
