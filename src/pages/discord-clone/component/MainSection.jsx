import { AiOutlineVideoCamera } from "react-icons/ai";
import { FaPaperclip, FaSmileBeam } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { MdOutlinePhone, MdOutlinePhoneInTalk } from "react-icons/md";
import { TiPin } from "react-icons/ti";


const MainSection = () => {
  return (
    <div className="flex-1 bg-gray-900 p-4 text-white flex flex-col h-screen">
      
       <div className="flex items-center justify-between border-b border-opacity-20  border-white pb-3">
          <h2 className="text-2xl font-bold">BFF Team</h2>
          <div className="flex items-center gap-3 pr-5">
            <MdOutlinePhoneInTalk
              size={40}
              className="p-2 bg-gray-600 rounded-full bg-opacity-35"
            />
            <AiOutlineVideoCamera
              size={40}
              className="p-2 bg-gray-600 rounded-full bg-opacity-35"
            />
            <TiPin
              size={40}
              className="p-2 bg-gray-600 rounded-full bg-opacity-35"
            />
          </div>
        </div>
      {/* Chat Content Section */}
      <div className="flex-1 overflow-y-auto space-y-4  pb-5 px-3">
      

        <div className="p-4 object-cover w-10/12 rounded-lg">
          <img
            src="https://i.ytimg.com/vi/jeVOQKI9UdI/maxresdefault.jpg "
            alt="NFS Heat"
            className="rounded-lg mb-4"
          />
          <p className="flex justify-center mx-auto bg-gray-500 px-4 py-1 rounded-2xl bg-opacity-25 w-fit">
            23 May 2024
          </p>
        </div>
        {/* Content */}
        <div className="p-4 object-cover w-10/12 rounded-lg">
          <img
            src="https://i.ytimg.com/vi/jeVOQKI9UdI/maxresdefault.jpg "
            alt="NFS Heat"
            className="rounded-lg mb-4"
          />
          <p className="flex justify-center mx-auto bg-gray-500 px-4 py-1 rounded-2xl bg-opacity-25 w-fit">
            23 May 2024
          </p>
        </div>

        {/* Example Chat Messages */}
        <div className="flex items-start space-x-4">
          <img
            src="https://i.pravatar.cc/300"
            alt="User"
            className="w-10 h-10 rounded-full"
          />
          <div className="mb-1 w-full">
            <div className="flex justify-between items-center">
              <p className="font-semibold">Joseph Padilla</p>
              <p className="text-gray-400">6:15 pm</p>
            </div>
            <p>Hey guys! Don’t forget about our meeting next week!</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <img
            src="https://i.pravatar.cc/300?id=50"
            alt="User"
            className="w-10 h-10 rounded-full"
          />
          <div className="mb-1 w-full">
            <div className="flex justify-between items-center">
              <p className="font-semibold">Sarah Britt</p>
              <p className="text-gray-400">6:25 pm</p>
            </div>
            <p>Looking forward to catching up and discussing everything.</p>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex items-center">
            <MdOutlinePhone size={25} />
            <span className="ml-3 font-bold">Richard Wilson</span>
            started a video call
          </div>
          <button className="ml-2 flex justify-center items-center bg-purple-600 px-8 w-36 py-2 rounded-full">
            Join
          </button>
        </div>
      </div>

      {/* Input Bar Section */}
      <div className="bg-gray-600 bg-opacity-20 p-2 px-5 rounded-2xl flex items-center">
        <FaPaperclip />
        <input
          className="bg-transparent text-white text-sm w-full p-2.5 focus:outline-none placeholder-gray-400"
          placeholder="Write a message ..."
          required
        />
        <div className="flex items-center gap-4">
          <FaSmileBeam />
          <IoMdSend />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
