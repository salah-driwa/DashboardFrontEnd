import { AiOutlineSound } from "react-icons/ai";
import { FaHeart, FaRandom, FaStepBackward, FaStepForward } from "react-icons/fa";
import { IoPauseSharp } from "react-icons/io5";
import { RiPlayList2Line } from "react-icons/ri";
import { TiArrowLoop } from "react-icons/ti";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Playsection() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // 1s loading state
    return () => clearTimeout(timer);
  }, []);

  const bouncyTransition = {
    type: "spring",
    stiffness: 300,
    damping: 10,
    mass: 1,
  };

  return (
    <div className="fixed bottom-0 w-full bg-[#181818] py-3 px-5 flex items-center justify-between">
      {loading ? (
        // Skeleton Loading
        <div className="animate-pulse flex justify-between w-full">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-700 rounded"></div>
            <div className="flex flex-col gap-2">
              <div className="w-32 h-4 bg-gray-700 rounded"></div>
              <div className="w-24 h-3 bg-gray-700 rounded"></div>
            </div>
          </div>

          <div className="flex items-center gap-6 mt-4">
            <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
          </div>

          <div className="flex items-center gap-2 mt-4">
            <div className="w-16 h-2 bg-gray-700 rounded"></div>
            <div className="w-full h-1 bg-gray-700 rounded"></div>
            <div className="w-16 h-2 bg-gray-700 rounded"></div>
          </div>

          <div className="flex items-center gap-3 mt-4">
            <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
          </div>
        </div>
      ) : (
        // Actual Content
        <div className="flex items-center justify-between w-full">
          {/* Track Info */}
          <div className="flex items-center gap-3">
            <motion.img
              src="https://cdns-images.dzcdn.net/images/cover/4349e2eedfe96be5c76b5ad7fa13727f/0x1900-000000-80-0-0.jpg"
              alt="Track Cover"
              className="w-12 h-12 rounded"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={bouncyTransition}
            />
            <div>
              <div className="text-white font-bold">Welcome To Horrorwood</div>
              <div className="text-gray-400 text-sm">Ice Nine Kills</div>
            </div>
          </div>

          {/* Play Controls */}
          <div className="flex items-center gap-6">
            <motion.button
              whileTap={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <FaStepBackward />
            </motion.button>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.2 }}
              className="rounded-full size-10 flex items-center border border-white border-opacity-20 justify-center hover:bg-gray-500 hover:bg-opacity-10"
            >
              <IoPauseSharp color="white" size={20} />
            </motion.div>
            <motion.button
              whileTap={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <FaStepForward />
            </motion.button>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.2 }}
            >
              <FaHeart color="red" />
            </motion.div>
          </div>

          {/* Progress Bar */}
          <div className="flex items-center gap-2">
            <span className="text-gray-400 text-sm">1:55</span>
            <input type="range" className="w-96 h-1 accent-orange-900" />
            <span className="text-gray-400 text-sm">3:47</span>
          </div>

          {/* Volume and Settings */}
          <div className="flex items-center ml-3 gap-3">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.2 }}
            >
              <AiOutlineSound />
            </motion.div>
            <motion.input
              type="range"
              className="w-34 h-1 accent-orange-900 bg-orange-600 range-slider"
              whileHover={{ scale: 1.05 }}
            />
            <div className="flex items-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.2 }}
                className="w-10 hover:bg-gray-500 hover:bg-opacity-10 flex justify-center items-center p-2 rounded-xl"
              >
                <FaRandom size={20} className="text-center" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.2 }}
                className="w-10 hover:bg-gray-500 hover:bg-opacity-10 flex justify-center items-center p-2 rounded-xl"
              >
                <TiArrowLoop size={20} />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.2 }}
                className="w-10 hover:bg-gray-500 hover:bg-opacity-10 flex justify-center items-center p-2 rounded-xl"
              >
                <RiPlayList2Line size={20} />
              </motion.div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Playsection;
