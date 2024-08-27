import { HiOutlineMicrophone, HiOutlineVideoCamera } from "react-icons/hi";
import { MdHeadset, MdSettings } from "react-icons/md";
import { FaMicrophoneSlash, FaHeadsetSlash } from "react-icons/fa";

const VoiceConnected = () => {
  return (
    <div className="w-64 bg-DsecondaryStuff p-4 text-white rounded-xl">
      {/* Voice Connected Section */}
      <div className="flex items-center space-x-2 text-green-500">
        <HiOutlineMicrophone size={20} />
        
      </div>

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
      <div className="flex items-center mt-6 space-x-3 p-2 bg-Dsecondary rounded-lg">
        <img
          src="https://truedark-portfolio.netlify.app/static/media/profile-pic.4a0f77e9f4fd19b7adf5.png"
          alt="TrueDark"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="font-semibold">TrueDark</p>
          <p className="text-sm text-gray-400">Idle</p>
        </div>

        {/* Mute/Deafen Icons */}
        <div className="ml-auto flex items-center space-x-2">
          <FaMicrophoneSlash className="text-red-600" size={20} />
          <FaHeadsetSlash className="text-red-600" size={20} />
          <MdSettings className="text-gray-400" size={20} />
        </div>
      </div>
    </div>
  );
};

export default VoiceConnected;
