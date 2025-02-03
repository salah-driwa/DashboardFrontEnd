import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHistory, FaPlus, FaPodcast, FaRegHeart } from 'react-icons/fa';
import { GoDotFill } from 'react-icons/go';
import { IoIosStats } from 'react-icons/io';
import { LuListMusic } from 'react-icons/lu';
import { MdOutlineWatchLater } from 'react-icons/md';
import { PiWaveformBold } from 'react-icons/pi';

// Sidebar entrance animation
const sidebarVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

// Delayed stagger effect for menu items
const listVariants = {
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
};

const Sidebar = () => {
  const [selected, setSelected] = useState('Feed');

  const menuItems = [
    { name: 'Feed', icon: <PiWaveformBold size={24} /> },
    { name: 'Playlists', icon: <LuListMusic size={24} /> },
    { name: 'Statistics', icon: <IoIosStats size={24} /> },
    { name: 'Favourites', icon: <FaRegHeart size={24} /> },
    { name: 'Listen later', icon: <MdOutlineWatchLater size={24} /> },
    { name: 'History', icon: <FaHistory size={24} /> },
    { name: 'Podcasts', icon: <FaPodcast size={24} /> }
  ];

  const Playlists = [
    { musicname: 'Metacore', color: '#22c55e' },
    { musicname: 'Electro', color: '#f59e0b' },
    { musicname: 'Funk', color: '#ef4444' },
    { musicname: 'Disco', color: '#3b82f6' },
  ];

  const handleClick = (name) => setSelected(name);

  return (
    <motion.div
      className="bg-bg w-64 min-w-64 flex flex-col justify-between p-4"
      initial="hidden"
      animate="visible"
      variants={sidebarVariants}
    >
      <div className="flex flex-col font-medium">
        <motion.h1 className="font-tiny px-5 py-5" variants={itemVariants}>
          MELO
        </motion.h1>

        <motion.ul variants={listVariants} initial="hidden" animate="visible">
          {menuItems.slice(0, 3).map((item) => (
            <motion.div key={item.name} className="flex" variants={itemVariants}>
              <div
                className={`w-5 ${
                  selected === item.name ? 'text-[#a63f23] border-l-2 border-[rgb(166,63,35)]' : 'text-gray-400'
                }`}
                style={
                  selected === item.name
                    ? { background: 'linear-gradient(90deg, rgba(166,63,35,0.5) 5%, rgba(255,255,255,0) 100%)' }
                    : {}
                }
              ></div>
              <motion.li
                className={`cursor-pointer flex items-center px-2 py-2 ${
                  selected === item.name ? 'text-[#a63f23]' : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => handleClick(item.name)}
                whileHover={{ scale: 1.05, color: '#a63f23' }}
              >
                <span className="mr-2">{item.icon}</span> {item.name}
              </motion.li>
            </motion.div>
          ))}
        </motion.ul>

        <div className="mt-10">
          <h1 className="text-white text-opacity-50 ml-3 mb-3 text-xs">YOUR MUSIC</h1>
          <motion.ul variants={listVariants} initial="hidden" animate="visible">
            {menuItems.slice(3, 8).map((item) => (
              <motion.div key={item.name} className="flex" variants={itemVariants}>
                <div
                  className={`w-5 ${
                    selected === item.name ? 'text-[#a63f23] border-l-2 border-[rgb(166,63,35)]' : 'text-gray-400'
                  }`}
                  style={
                    selected === item.name
                      ? { background: 'linear-gradient(90deg, rgba(166,63,35,0.5) 5%, rgba(255,255,255,0) 100%)' }
                      : {}
                  }
                ></div>
                <motion.li
                  className={`cursor-pointer flex items-center px-2 py-2 ${
                    selected === item.name ? 'text-[#a63f23]' : 'text-gray-400 hover:text-white'
                  }`}
                  onClick={() => handleClick(item.name)}
                  whileHover={{ scale: 1.05, color: '#a63f23' }}
                >
                  <span className="mr-2">{item.icon}</span> {item.name}
                </motion.li>
              </motion.div>
            ))}
          </motion.ul>
        </div>

        <div className="mt-10 ml-3">
          <h2 className="text-white text-xs uppercase text-opacity-50 mt-3 mb-5">Your Playlists</h2>
          <motion.ul variants={listVariants} initial="hidden" animate="visible" className="space-y-4">
            {Playlists.map((studio) => (
              <motion.li key={studio.musicname} className="flex items-center text-gray-400 w-full" variants={itemVariants}>
                <motion.div className="rounded-full mr-2" style={{ color: studio.color }}>
                  <GoDotFill size={12} />
                </motion.div>
                <motion.span whileHover={{ scale: 1.05, color: studio.color }}>{studio.musicname}</motion.span>
              </motion.li>
            ))}
          </motion.ul>
          <motion.div
            className="mt-5 font-semibold flex text-[#a63f23] gap-2 items-center cursor-pointer"
            whileHover={{ scale: 1.1 }}
          >
            Create new playlist <FaPlus size={13} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
