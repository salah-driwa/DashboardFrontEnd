import { useState } from "react";
import { FaUser, } from "react-icons/fa";
import {  } from "react-icons/fi";
import { GoHomeFill } from "react-icons/go";

import { IoIosStats } from "react-icons/io";


import { MdAutoGraph, MdDateRange,  } from "react-icons/md";
import Header from "./Header";
import Bodyview from "./Bodyviews";
import DailyTarget from "./DailyTarget";
import NewActivity from "./NewActivity";
import MealPlan from "./MealPlan";


const Sidebar = () => {

  const [activePage, setActivePage] = useState("Dashboard");



  

  const menuItems = [
    { name: "Dashboard", icon: <GoHomeFill  size={24} />, notifications: 0 },
    { name: "Products", icon: <IoIosStats  size={24} />, notifications: 5 },
    { name: "Conversation", icon: <MdAutoGraph  size={24} />, notifications: 2 },
    { name: "Analytics", icon: <MdDateRange  size={24} />, notifications: 0 },
    { name: "Campaigns", icon: <FaUser  size={24} />, notifications: 1 },
  ];
  

  
  return (
    <div className="  flex      ">
      {/* Sidebar */}
      
      <div
        className={`     align-top bg-[#0f1412]  rounded-t-3xl p-3  mt-6 ml-6 mr-6  transition-width duration-300  flex flex-col`}
      >
        <div className={` flex  justify-center items-center    gap-1 `}>
         
        <div className="  text-2xl font-extrabold  text-[#cdfb47]  text-center mt-5 ">LOGO</div>
      
        </div>
   
       
        {/* Toggle Button */}
     

        {/* Menu Items */}
        <div className="flex flex-col   gap-4 mt-6">
  {menuItems.map((item) => (
    <div
      key={item.name}
      onClick={() => setActivePage(item.name)}
      className={`flex items-center justify-center  w-16 h-16 mx-auto   rounded-full  
        relative gap-4    py-2 cursor-pointer transition-all duration-200  ease-in-out ${
        activePage === item.name
          ? "opacity-100 bg-[#cdfb47] "
          : "opacity-70 hover:opacity-90 hover:scale-105"
      }
`}
    >
      <div className=" flex items-center justify-center">
        <div   key={item.name} className={` ${
        activePage === item.name
          ? " text-black "
          : "text-white"
      }
`}>{item.icon}</div>
       
      </div>
   
      
    </div>
  ))}
</div>


     

      

      </div>

      {/* Main Content */}
<div className=" flex flex-col overflow-auto  w-8/12 border-r pr-5 border-black border-opacity-15">
      <Header/>
      <div className=" flex   scale-110  w-full justify-evenly ">
<Bodyview/>
<DailyTarget></DailyTarget>

</div>
<NewActivity></NewActivity>

</div>
<MealPlan/>
    </div>
  );
};

export default Sidebar;
