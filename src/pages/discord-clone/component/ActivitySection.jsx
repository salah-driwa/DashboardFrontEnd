import { CiEdit, CiSearch } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import { HiOutlineMicrophone, HiOutlineSpeakerWave, HiOutlineVideoCamera } from "react-icons/hi2";
import { FaMicrophoneSlash } from "react-icons/fa";
import { MdHeadset, MdSettings } from "react-icons/md";
import { LuScreenShare } from "react-icons/lu";
import { useState } from "react";
import HoverCard from "./Card";

const users = [
    {
        id: 1,
        name: "Richard Wilson",
        img: "https://i.pravatar.cc/150?img=1",
        status: "Playing NFS Heat",
        bio: "Admin of the BFF Team",
        link: "https://truedark-portfolio.netlify.app/",
        badges: ["Moderator", "VIP", "lvl1"],
        isstraming:true
      },
      {
        id: 2,
        name: "Jenna Ortiz",
        img: "https://i.pravatar.cc/150?img=2",
        status: "Online",
        bio: "Graphic Designer",
        link: "https://example.com",
        badges: ["ULTRA VIP"],
        
        isstraming:false
      },
      {
        id: 3,
        name: "Alice Smith",
        img: "https://i.pravatar.cc/150?img=3",
        status: "In a meeting",
        bio: "Lead Developer",
        link: "https://example.com",
        badges: ["VIP", "lvl2"],
        isstraming:false
      },
    {
      id: 4,
      name: "Joseph Padilla",
      img: "https://i.pravatar.cc/150?img=4",
      status: "Listening to music",
      bio: "Full-Stack Engineer",
      link: "https://example.com",
      badges: ["ULTRA VIP"],
      isstraming:false
    },
    // Add more users as needed
  ];
  

const ActivitySection = () => {

  const [hoveredUser, setHoveredUser] = useState(null);
  const [hoverPosition, setHoverPosition] = useState({ top: 0, left: 0 });

  const handleMouseEnter = (user, event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setHoveredUser(user);
    setHoverPosition({ top: rect.top + window.scrollY, left: rect.left + rect.width + 10 });
  };
  const handleMouseLeave = () => {
    setHoveredUser(null);
  };
  return (
    <div className="w-80   bg-DsecondaryStuff   overflow-y-auto overflow-x-none  text-white    h-screen   rounded-xl flex flex-col justify-between">
      <div>
      <div className="p-4 bg-DsecondaryStuff sticky top-0 z-[200]">
        <div className="flex bg-white w-52 bg-opacity-10 items-center py-2 gap-3 rounded-xl">
          <CiSearch className="ml-3" size={25} />
          <input
            className="bg-transparent  text-white text-sm  focus:outline-none placeholder-gray-400 w-8/12 h-full"
            placeholder="Search"
          />
        </div>
      </div>
        <h2 className="text-2xl mt-2 px-4 font-semibold">BFF Teams</h2>
        <div className="mt-4 w-full space-y-4">
          {/* Example conversation list */}
          <div className="px-4 flex justify-between font-bold rounded-lg">
            Text Channels <GoPlus />
          </div>

          <div className="px-4 flex items-center gap-2">
            <CiEdit size={25} /> Rules
          </div>
          <div className="px-4 flex items-center gap-2">
            <CiEdit size={25} /> Instroction
          </div>
          <div className="px-4 flex items-center gap-2">
            <CiEdit size={25} /> Text Chat
          </div>

          <div className="px-4 flex justify-between font-bold rounded-lg">
            Voice Channels <GoPlus />
          </div>

          <div className="px-4 flex items-center gap-2">
            <HiOutlineSpeakerWave size={25} /> review room
          </div>

          <div className="px-4 flex items-center gap-2">
            <HiOutlineSpeakerWave size={25} /> chatting room
          </div>

          <div className="px-4 flex items-center gap-2 py-1 bg-[#3e4153]">
            <HiOutlineSpeakerWave size={25} /> meetings room
          </div>
          <div className="px-4">
            {users.map((user) => (
              <div
                key={user.id}
                className="flex items-center px-2 relative gap-2 py-2 hover:bg-[#505362] rounded-lg cursor-pointer"
                onMouseEnter={(e) => handleMouseEnter(user, e)}
                onMouseLeave={handleMouseLeave}
              >
                <img src={user.img} alt={user.name} className="size-8 rounded-full" />
                <span className=" size-3 absolute  top-10  left-7 bg-green-600 rounded-full border border-gray-900"></span>
                <div>
                  <p className="font-semibold">{user.name}</p>
                  <p className="text-sm text-gray-400 group-hover:text-white">{user.status}</p>
                </div>
                <div className="ml-auto">
                  {user.isstraming ? <LuScreenShare /> : ""}
                </div>
              </div>
            ))}
          </div>


          <div className="px-4 flex justify-between font-bold rounded-lg">
            Other <GoPlus />
          </div>

          <div className="px-4 flex items-center gap-2">
            <CiEdit size={25} /> Trainings
          </div>
          <div className="px-4 flex items-center gap-2">
            <CiEdit size={25} /> Achieved info
          </div>
          <div className="px-4 flex items-center gap-2">
            <CiEdit size={25} /> For memes
          </div>
        </div>
      </div>

      {/* Push this div to the bottom */}
      <div className="p-4 flex   sticky bottom-0">
      <div className="w-64 bg-DsecondaryStuff px-4 text-white rounded-xl">
           <div className=" border-t border w-full  border-opacity-25 border-gray-500"></div>
       
    
    

      {/* Control Icons */}
      <div className="flex justify-between mt-4">
        <button className="bg-Dprimary rounded p-2">
          <HiOutlineMicrophone size={24} />
        </button>
        <button className="bg-Dprimary rounded p-2">
          <HiOutlineVideoCamera size={24} />
        </button>
        <button className="bg-Dprimary rounded p-2">
          <MdHeadset size={24} />
        </button>
        <button className="bg-Dprimary rounded p-2">
          <MdSettings size={24} />
        </button>
      </div>

      {/* User Information */}
      <div className="flex  justify-between mt-6 space-x-3 p-2 bg-Dsecondary rounded-lg ">
        <div className=" flex items-center gap-2">
        <img
          src="https://i.pravatar.cc/300"
          alt="TrueDark"
          className="w-10 h-10 rounded-full "
        />
        <div>
          <p className="font-semibold">john SS</p>
          <p className="text-sm text-gray-400">Idle</p>
        </div>
        </div>
        {/* Mute/Deafen Icons */}
        <div className=" flex items-center  ml-52 space-x-2">
          <FaMicrophoneSlash className="text-red-600 hover:bg-gray-600 hover:bg-opacity-40 p-2 rounded-xl" size={35} />

        </div>
      </div>
    </div>
      </div>
       {/* Render the hover card */}
       {hoveredUser && (
        <HoverCard user={hoveredUser} position={hoverPosition} />
      )}
    </div>
  );
};

export default ActivitySection;
