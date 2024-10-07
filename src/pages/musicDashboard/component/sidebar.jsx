import { useState } from 'react';
import {   FaHistory, FaPlus, FaPodcast, FaRegHeart } from 'react-icons/fa';
import { GoDotFill } from 'react-icons/go';
import { IoIosStats } from 'react-icons/io';
import { LuListMusic } from 'react-icons/lu';
import { MdOutlineWatchLater } from 'react-icons/md';
import { PiWaveformBold } from 'react-icons/pi';


// eslint-disable-next-line react/prop-types
const Sidebar = () => {
  const [selected, setSelected] = useState('Feed'); // Default to 'Home'

  const menuItems = [
    { name: 'Feed', icon: <PiWaveformBold  size={24} /> },
    { name: 'Playlists', icon: <LuListMusic size={24} /> },
    { name: 'Statistics', icon: <IoIosStats size={24} /> },
    { name: 'Favourites', icon: <FaRegHeart   size={24}/> },
    { name: 'Listen later', icon: <MdOutlineWatchLater  size={24} /> },
    { name: 'History', icon: <FaHistory size={24} /> },
    { name: 'Podcasts', icon: <FaPodcast size={24} />
    }
    
  ];

  const Playlists = [
    { musicname: 'Metacore', color: '#22c55e' },  // Green
    { musicname: 'Electro', color: '#f59e0b' },   // Yellow
    { musicname: 'Funk', color: '#ef4444' },      // Red
    { musicname: 'Disco', color: '#3b82f6' },     // Blue
  ];
  
  const handleClick = (name) => {
    setSelected(name);
  };

  return (
    <div className="bg-bg w-64  min-w-64 flex flex-col justify-between ">
        <div className='flex flex-col    font-medium'>
          <h1 className=' font-tiny px-5 py-5'> MELO</h1>
      <div>
        <ul className="">
          {menuItems.slice(0, 3).map((item) => (
              <div   key={item.name} className=' flex'> 
              <div
          className={`w-5 ${
            selected === item.name
              ? 'text-[#a63f23] border-l-2 border-[rgb(166,63,35)]'
              : 'text-gray-400 hover:text-white'
          }`}
          style={
            selected === item.name
              ? {
                  background: ' linear-gradient(90deg, rgba(166,63,35,0.5) 5%, rgba(255,255,255,0) 100%)',
                  // Sets opacity to 30%
                }
              : {}
          }
        ></div>
                    <li
                  
                      className={`cursor-pointer flex items-center px-2 py-2  ${
                        selected === item.name
                          ? 'text-[#a63f23]'
                          : 'text-gray-400 hover:text-white'
                      }`}
                      onClick={() => {
                      
        handleClick(item.name);
                      }}
                    >
                      <span className="mr-2">{item.icon}</span> {item.name}
                    </li>
                    </div>     ))}
        </ul>
      </div>

      <div className=' mt-10'>
        <ul className="">
          <h1 className=' text-white text-opacity-50 ml-3  mb-3 text-xs'>YOUR MUSIC</h1>
          {menuItems.slice(3, 8).map((item) => (
           <div   key={item.name} className=' flex'> 
           <div
       className={`w-5 ${
         selected === item.name
           ? 'text-[#a63f23] border-l-2 border-[rgb(166,63,35)]'
           : 'text-gray-400 hover:text-white'
       }`}
       style={
         selected === item.name
           ? {
               background: ' linear-gradient(90deg, rgba(166,63,35,0.5) 5%, rgba(255,255,255,0) 100%)',
               // Sets opacity to 30%
             }
           : {}
       }
     ></div>
                 <li
               
                   className={`cursor-pointer flex items-center px-2 py-2  ${
                     selected === item.name
                       ? 'text-[#a63f23]'
                       : 'text-gray-400 hover:text-white'
                   }`}
                   onClick={() => {
                   
     handleClick(item.name);
                   }}
                 >
                   <span className="mr-2">{item.icon}</span> {item.name}
                 </li>
                 </div>    
          ))}
        </ul>
      </div>
  

  
 <div className=" mt-10  ml-3">
        <h2 className="text-white  text-xs  uppercase text-opacity-50 mt-3 mb-5"> Your Playlists</h2>
        <ul className="space-y-4">
        {Playlists.map((studio) => (
    <li
      key={studio.musicname}
      className="flex items-center text-gray-400   w-full"
    >
      {/* Dot with color directly from 'color' field */}
      <div
        className="     rounded-full mr-2"
        style={{ color: studio.color }}
      ><GoDotFill  size={12}/></div>
      <span>{studio.musicname}</span>
    </li>
  ))}
        </ul>
        <div className='  mt-5 font-semibold flex text-[#a63f23]  gap-2  items-center'>
        Create new playlist  <FaPlus  size={13}  />
        
        </div>

      </div>
     





      </div>
      <div>
       
        
      </div>
      
    </div>
  );
};

export default Sidebar;
