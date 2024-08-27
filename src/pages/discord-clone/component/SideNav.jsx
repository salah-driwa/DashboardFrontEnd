/* eslint-disable react/prop-types */
import { FaDiscord } from 'react-icons/fa';
import { useState } from 'react';
import { CiGlobe } from 'react-icons/ci';
import { GoPlus } from 'react-icons/go';

// Sample server data
const servers = [
  { id: 1, name: 'Server 1', img: 'https://pbs.twimg.com/media/ESN30H_XYAAVE5i.png' },
  { id: 2, name: 'Server 2', img: 'https://www.pngkey.com/png/full/440-4404354_novabot-discord-server-icon.png' },
  { id: 3, name: 'Server 3', img: 'https://i.pinimg.com/originals/c1/62/5d/c1625d28e215bde2df23e15d3f950cfe.png' },
  // Add more servers as needed
];

function SideNav({ toggleView }) {
  // To handle hover effect
  const [hoveredServer, setHoveredServer] = useState(null);

  return (
    <div className="w-20 text-DText bg-DbgColor p-4 flex flex-col items-center gap-5  h-full min-h-screen">
      {/* Discord Icon */}
      <FaDiscord className="text-5xl p-1 rounded-2xl bg-Dprimary text-white      hover:scale-105  transition-all"   onClick={toggleView} />

      {/* TRG */}
      <div className=" flex justify-center  items-center bg-[#3e4153] p-1 size-12 rounded-2xl">TRG</div>

      {/* Dynamically render servers */}
      {servers.map((server) => (
        <div
          key={server.id}
          className="  size-12 flex justify-center bg-[#3e4153]   z-[100] items-center rounded-2xl relative"
          onMouseEnter={() => setHoveredServer(server.id)}
          onMouseLeave={() => setHoveredServer(null)}
          onClick={toggleView}
        >
          <img src={server.img} alt={server.name} className=" h-full w-full rounded-2xl    object-contain" />

          {/* Show server name on hover */}
          {hoveredServer === server.id && (
            <span className="absolute left-14 top-1/2 transform -translate-y-1/2 bg-Dprimary text-white p-2  text-nowrap rounded-md">
              {server.name}
            </span>
          )}
        </div>
      ))}

      {/* Work */}
      <div className="bg-[#3e4153] flex justify-center  items-center p-1 size-12 rounded-2xl">Work</div>
      <div className="bg-[#3e4153] flex justify-center  items-center p-1 size-12 rounded-2xl text-Dprimary"><CiGlobe  size={30}/>
      </div>


      <div className="    flex justify-center  items-center p-1 size-12 rounded-2xl bg-Dprimary hover:opacity-70 hover:scale-105  transition-all text-white"><GoPlus   size={30}/>
      </div>
    </div>
  );
}

export default SideNav;
