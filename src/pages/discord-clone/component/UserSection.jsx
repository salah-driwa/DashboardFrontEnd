import { AiOutlineFile } from "react-icons/ai";
import { BsImage } from "react-icons/bs";
import { FiLink2 } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

const users = [
  { id: 1, name: "Richard Wilson", img: "https://i.pravatar.cc/150?u=1", status: "playing NFS Heat", role: "Admin" },
  { id: 2, name: "Jenna Ortiz", img: "https://i.pravatar.cc/150?u=2", status: "", role: "" },
  { id: 3, name: "Alice Smith", img: "https://i.pravatar.cc/150?u=3", status: "", role: "" },
  { id: 4, name: "Joseph Padilla", img: "https://i.pravatar.cc/150?u=4", status: "", role: "" },
  { id: 5, name: "Jack Johnson", img: "https://i.pravatar.cc/150?u=5", status: "", role: "" },
  { id: 6, name: "Julia Williams", img: "https://i.pravatar.cc/150?u=6", status: "", role: "" },
  { id: 7, name: "Matt Campos", img: "https://i.pravatar.cc/150?u=7", status: "", role: "" },
  { id: 8, name: "Sarah Britt", img: "https://i.pravatar.cc/150?u=8", status: "", role: "" },
];

const UserSection = () => {
  return (
    <div className="w-64 bg-[#313447] p-4 text-white overflow-y-auto h-full">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Members</h2>
        <p className="text-sm text-gray-400 cursor-pointer">Add new</p>
      </div>

      <div className="mt-4 space-y-4">
        {users.map(user => (
          <div key={user.id} className="flex justify-between items-center relative">
            <div className="flex items-center space-x-2">
              <img
                src={user.img}
                alt={user.name}
                className="w-10 h-10 rounded-full"
              />
                  <span className=" size-3 absolute  top-8  left-4 bg-green-600 rounded-full border border-gray-900"></span>
           
              <div className="flex flex-col">
                <p className="font-medium">{user.name}</p>
                {user.status && <p className="text-xs text-gray-400">{user.status}</p>}
              </div>
            </div>
            {user.role && <p className="text-xs text-gray-400">{user.role}</p>}
          </div>
        ))}
      </div>

      {/* Files Section */}
      <div className="mt-6">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Files</h2>
          <p className="text-sm text-gray-400 cursor-pointer">View all</p>
        </div>

        <div className="mt-4 space-y-2">
          {/* Photos */}
          <div className="flex justify-between items-center">
  <div className="flex flex-col items-center">
    <div className="flex items-center justify-between w-full space-x-2 pr-5  mb-3 overflow-clip">
      <div className=" flex gap-3">
      <BsImage className="text-gray-400" size={20} />
      <p className="text-sm">265 photos</p>
      </div>
      <p className="text-sm text-gray-400 rotate-180">
      <IoIosArrowDown />
    </p>
    </div>
    

    {/* Container with scroll overflow */}
    <div className="flex gap-6 overflow-x-scroll overflow-y-clip   w-60 h-32 overflow-hidden">
      <img
        src="https://picsum.photos/600/300"
        alt="Free unsplash image"
        className="object-cover rounded-2xl h-28  min-w-32 transition-transform duration-300 ease-in-out"
      />
      <img
        src="https://picsum.photos/800/300"
        alt="Free unsplash image"
        className="object-cover rounded-2xl h-28  min-w-32 transition-transform duration-300 ease-in-out"
      />
      <img
        src="https://picsum.photos/500/300"
        alt="Free unsplash image"
        className="object-cover rounded-2xl h-28 min-w-32 transition-transform duration-300 ease-in-out"
      />
    </div>
  </div>
</div>


          {/* Files */}
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <AiOutlineFile className="text-gray-400" size={20} />
              <p className="text-sm">378 files</p>
            </div>
            <p className="text-sm text-gray-400"><IoIosArrowDown />
</p>
          </div>

          {/* Shared Links */}
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <FiLink2 className="text-gray-400" size={20} />
              <p className="text-sm">45 shared links</p>
            </div>
            <p className="text-sm text-gray-400"><IoIosArrowDown />
</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSection;
