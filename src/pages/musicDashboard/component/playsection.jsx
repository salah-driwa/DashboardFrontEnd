import { AiOutlineSound } from "react-icons/ai"
import { FaHeart, FaRandom, FaStepBackward, FaStepForward } from "react-icons/fa"
import { IoPauseSharp } from "react-icons/io5"
import { RiPlayList2Line } from "react-icons/ri"
import { TiArrowLoop } from "react-icons/ti"


function Playsection() {
  return (
    <div className="  fixed bottom-0   w-full bg-[#181818] py-3 px-5 flex items-center justify-between ">
  {/* Track Info */}
  <div className="flex items-center gap-3">
    <img
      src="https://cdns-images.dzcdn.net/images/cover/4349e2eedfe96be5c76b5ad7fa13727f/0x1900-000000-80-0-0.jpg"
      alt="Track Cover"
      className="w-12 h-12 rounded"
    />
    <div>
      <div className="text-white font-bold">Welcome To Horrorwood</div>
      <div className="text-gray-400 text-sm">Ice Nine Kills</div>
    </div>
  </div>

  {/* Play Controls */}
  <div className="flex items-center gap-6">
    <button>
   
    <FaStepBackward />
    </button>
    <div className=" rounded-full   size-10 flex  items-center   border border-white border-opacity-20 justify-center hover:bg-gray-500 hover:bg-opacity-10">
   

    <IoPauseSharp color=" white"  size={20}/>
    </div>
    <button >
    <FaStepForward />
    </button>
    <div>
    <FaHeart color="red" />

    </div>
  </div>

  {/* Progress Bar */}
  <div className="flex items-center gap-2">
    <span className="text-gray-400 text-sm">1:55</span>
    <input type="range" className="w-96 h-1 accent-orange-900 " />
    <span className="text-gray-400 text-sm">3:47</span>
  </div>

  {/* Volume and Settings */}
  <div className="flex items-center ml-3 gap-3">
  <AiOutlineSound />
  <input 
  type="range" 
  className="w-34 h-1 accent-orange-900 bg-orange-600 range-slider" 
/>


   <div className=" flex items-center">
    <div className=" w-10   hover:bg-gray-500  hover:bg-opacity-10 flex justify-center items-center p-2 rounded-xl ">
    <FaRandom size={20}  className=" text-center"/>

    </div>
    <div className=" w-10   hover:bg-gray-500  hover:bg-opacity-10 flex justify-center items-center p-2 rounded-xl ">
    <TiArrowLoop   size={20}/>

    </div>
    <div className=" w-10   hover:bg-gray-500  hover:bg-opacity-10 flex justify-center items-center p-2 rounded-xl ">
    <RiPlayList2Line  size={20} />


    </div>
    </div>
  </div>
</div>

  )
}

export default Playsection