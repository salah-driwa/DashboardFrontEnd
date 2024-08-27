
import { FaArrowRight } from 'react-icons/fa';
import img1 from '../img/img.png'
import img2 from '../img/img2.png'
import img3 from '../img/img3.png'
const activities = [
  { title: "Drinking Tracker", desc: "Stay hydrated, it’s nature’s best refreshment!", img: img1, bgColor: "bg-[#cdfb47]", textColor:"text-[#0f1412]" },
  { title: "Daily Exercise", desc: "Stay fit and active!", img: img2, bgColor: "bg-white" , textColor:"text-[#0f1412]" },
  { title: "Sleep Tracker", desc: "Get enough rest for a healthy life!", img:img3, bgColor: "bg-black text-white" }
];

const NewActivity = () => {
  return (
    <div className=" mt-10">
           <div className=" flex items-center mt-1 justify-between w-full ">
        <h1 className=" text-black  font-semibold text-2xl "> New Activity</h1>
        <h1 className=" text-black  text-sm "> See All Suggestions</h1>
        </div>
    <div className="flex space-x-4 overflow-auto p-4 ">
      {activities.map((activity, index) => (
        <div
          key={index}
          className={`p-4 relative h-64   rounded-3xl shadow-md ${activity.bgColor} ${activity.textColor}`}
          style={{ minWidth: "300px" }}
        >
          <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
          <p className="text-sm mb-4">{activity.desc}</p>
         

          <img src={activity.img} alt={activity.title} className="  h-40   right-0 z-0 absolute    object-cover rounded-lg" />
          <span className='  flex  ml-2 mt-28  items-end'>
          <FaArrowRight size={50} color='black' className=' z-50 bg-white p-4     rounded-full' />
          </span>
        </div>
      ))}
    </div>
    </div>
  );
};

export default NewActivity;
