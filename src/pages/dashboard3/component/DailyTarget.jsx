import { FiDroplet, FiActivity, FiHeart, FiMonitor } from "react-icons/fi";

const DailyTarget = () => {
  const targetData = [
    { icon: <FiDroplet size={24} />, label: "Water", value: "2300 ml", desc: "Total Cons" },
    { icon: <FiActivity size={24} />, label: "Calories", value: "890 kCal", desc: "Total Cons" },
    { icon: <FiMonitor size={24} />, label: "Weight", value: "62 Kg", desc: "My Weight" },
    { icon: <FiHeart size={24} />, label: "BPM", value: "110 BPM", desc: "BPM" },
  ];

  return (
   <div>
         <div className=" flex items-center mt-1 justify-between w-full mb-6">
        <h1 className=" text-black  text-2xl "> My Daily Target</h1>
        <h1 className=" text-black  text-sm "> See All</h1>
        </div>
   <div className="grid grid-cols-2 gap-3 size-72   ">
    
      {targetData.map((target, index) => (
        <div key={index} className="p-4 bg-white  flex flex-col justify-between  rounded-3xl shadow-md">
      
      <div className=" flex justify-between">  
           <div className="text-lg text-black font-semibold">{target.label}</div>
          <div className="text-2xl mb-2 text-gray-800">{target.icon}</div>
          </div>  
        <div>
          <div className="text-sm text-gray-700">{target.desc}</div>
          <div className="text-xl font-bold text-black ">{target.value}</div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default DailyTarget;
