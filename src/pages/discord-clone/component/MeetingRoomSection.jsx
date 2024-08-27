import { BsFillMicMuteFill } from 'react-icons/bs';
import { HiOutlineMicrophone, HiOutlinePhone, HiOutlineVideoCamera } from 'react-icons/hi';
import { LuScreenShare } from 'react-icons/lu';

const MeetingRoomSection = () => {
  const users = [
    { name: "Richard Wilson", img: "https://media.istockphoto.com/id/1397054568/photo/girl-plays-video-game-online-and-streaming-at-home.jpg?s=612x612&w=0&k=20&c=7dFAEr9hu2P6unbw0NJt06y5p0LO3Wcxf0dn4ffObC0=" ,icon:<BsFillMicMuteFill /> ,isTalking:false
    },
    { name: "Jack Johnson", img: "https://media.istockphoto.com/id/1460761187/photo/yeaaaah-i-have-won-the-match.jpg?s=612x612&w=0&k=20&c=-oVpkorWLs6ZFcFuiJX3rT4ip4IPKp31pPp7e_4Nk9E=" ,isTalking:true },
    { name: "Me", img: "https://media.istockphoto.com/id/1447239793/photo/teenage-boy-playing-multiplayer-games-on-desktop-pc-in-his-dark-room.jpg?s=612x612&w=0&k=20&c=nYlFNAdtQB3Byf9NySoi3pmEbQnLwEsCtFWXX6yG8Ik=" ,isTalking:true},
  ];

  return (
    <div className="flex-grow  h-screen mx-16 p-4 grid grid-cols-2 gap-4 bg-DsecondaryStuff">
      {users.map((user, index) => (
        <div key={index} className={`bg-black relative rounded-lg overflow-hidden  ${user.isTalking ? " border-2 border-green-700":""}`}>
          <img 
            src={user.img} 
            alt={user.name} 
            className="w-full h-full object-cover "
          />
          <div className="absolute bottom-0 flex gap-2 items-center  rounded-2xl m-1 bg-black bg-opacity-80 text-white p-2">
            {user.name}  {user.icon}
          </div>
        </div>
      ))}
      {/* Example of a live stream card */}
      <div className="bg-black rounded-lg overflow-hidden relative">
        <img src="https://media.istockphoto.com/id/1809656344/photo/gameplay-of-a-racing-simulator-video-game-with-interface-computer-generated-3d-car-driving.jpg?s=612x612&w=0&k=20&c=4zCHqOOE3GcTMyVH37rSN7hDz6_u_vFeZm2WwWu8WCg=" alt="Streaming" className="w-full h-full blur-sm object-cover" />
        <div className="absolute  top-1/2 text-center mx-auto w-full justify-center items-center bg-black bg-opacity-50 flex flex-col text-white p-2">
          Richard Wilson is streaming now!
          <button className="ml-2 flex justify-center items-center bg-purple-600 px-4  w-20 py-2 rounded-full">Join</button>
        </div>
        <div className="absolute bottom-0 flex gap-2 items-center  rounded-2xl m-1 bg-black bg-opacity-80 text-white p-2">
        Richard Wilson <LuScreenShare />

          </div>

      </div>

      {/* Bottom control buttons */}
      <div className="col-span-2 flex justify-center space-x-4 mt-4 ">
        <button className="bg-gray-800 p-4 size-16 flex items-center justify-center rounded-full">
          <HiOutlineMicrophone size={24} className="text-white" />
        </button>
        <button className="bg-red-600 p-4  size-16 flex items-center justify-center rounded-full">
          <HiOutlinePhone size={24} className="text-white" />
        </button>
        <button className="bg-gray-800 p-4 size-16 flex items-center justify-center rounded-full">
          <HiOutlineVideoCamera size={24} className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default MeetingRoomSection;
