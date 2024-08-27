
import { FaRegFileLines } from "react-icons/fa6";
import { FiBell, FiMoreHorizontal } from "react-icons/fi";
import { IoFilterSharp, IoSearch } from "react-icons/io5";

const DashboardHeader = () => {
  return (
    <div className="p-4  -mt-9 text-white flex flex-col gap-4">
      {/* Top Row: Search and Profile */}
      <div className="flex justify-between items-center">
        {/* Search Bar */}
        <div className="flex items-center bg-secondaryStuff px-4 py-2 rounded-lg w-1/3">
          <IoSearch size={20} className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search campaign, customer, etc..."
            className="bg-transparent text-gray-300 focus:outline-none w-full"
          />
        </div>
 
        {/* Profile Section */}
        <div className="flex items-center space-x-4">
          {/* Notification Bell with Badge */}
          <div className="relative">
            <FiBell  size={25} />
            <div className="absolute -top-1 right-0 bg-red-500 text-white text-xs rounded-full w-3 h-3 border-white border  border-x-2 flex items-center justify-center">
              
            </div>
          </div>
          <div className="flex-grow border-l  border-gray-400 border-opacity-60  ">
          {/* User Info */}
          <div className="flex items-center space-x-2 ml-4">
            
            <img
              src="https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="User Avatar"
              className="rounded-full w-12 h-12  object-cover border border-white"
            />
            <div className="flex flex-col">
              <span className="text-sm font-semibold">Manik Jingga</span>
              <span className="text-xs text-gray-400">Admin Store</span>
            </div>
          </div>
          </div>
          {/* More Options */}
          <div>
            <FiMoreHorizontal size={24} />
          </div>
        </div>
      </div>
      <div className="flex-grow border-t border-gray-400 border-opacity-20 "></div>
      <div className=" flex    justify-between items-center">
      {/* Header Section */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <p className="text-gray-400">Here s your analytic details</p>
      </div>

      {/* Filter and Exports */}
      <div className="flex space-x-4">
        <button className="bg-gray-400 bg-opacity-15 text-white px-4 py-2 rounded-lg flex justify-center items-center gap-2"> <IoFilterSharp />
        Filter by</button>
        <button className="bg-gray-400 bg-opacity-15 text-white px-4 py-2 rounded-lg flex justify-center items-center gap-2"><FaRegFileLines />

          Exports <span className="ml-2">&#9662;</span>
        </button>
      </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
