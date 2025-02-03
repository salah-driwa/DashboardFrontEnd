import { FaAngleDown, FaCalendarMinus, FaClock, FaPlus } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { motion } from "framer-motion"; // Import motion
import DataCard from "./DataCard";

const plans = [
  {
    title: "Breakfast",
    food: [
      { img: "https://www.simplyrecipes.com/thmb/zsQvDavpqD2PtIO-7W6nBWVHCe4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Hard-Boiled-Eggs-LEAD-03-42506773297f4a15920c46628d534d67.jpg", name: "Eggs", kal: "150 kcal" },
      { img: "https://www.simplyrecipes.com/thmb/20YogL0tqZKPaNft0xfsrldDj6k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2010__01__cinnamon-toast-horiz-a-1800-5cb4bf76bb254da796a137885af8cb09.jpg", name: "Toast", kal: "100 kcal" }
    ],
    time: "05:00 am - 07:00 am",
    totalKcal: "250 kcal"
  },
  {
    title: "Lunch",
    food: [
      { img: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2020/05/Chicken-Salad-5.jpg", name: "Chicken Salad", kal: "300 kcal" },
      { img: "https://assets.clevelandclinic.org/transform/cd71f4bd-81d4-45d8-a450-74df78e4477a/Apples-184940975-770x533-1_jpg", name: "Apple", kal: "80 kcal" }
    ],
    time: "12:00 pm - 01:00 pm",
    totalKcal: "380 kcal"
  },
  {
    title: "Dinner",
    food: [
      { img: "https://www.allrecipes.com/thmb/mvO1mRRH1zTz1SvbwBCTz78CRJI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/67700_RichPastaforthePoorKitchen_ddmfs_4x3_2284-220302ec8328442096df370dede357d7.jpg", name: "Pasta", kal: "400 kcal" },
      { img: "https://www.thespruceeats.com/thmb/sdVTq0h7xZvJjPr6bE2fhh5M3NI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-best-fish-and-chips-recipe-434856-hero-01-27d8b57008414972822b866609d0af9b.jpg", name: "Fish and Chips", kal: "50 kcal" }
    ],
    time: "07:00 pm - 09:00 pm",
    totalKcal: "450 kcal"
  }
];
const nutritionData = {
    carbohydrates: 50,
    fats: 30,
    proteins: 40,
    fiber: 20
  };

function MealPlan() {
  return (
    <div className="flex flex-col mx-auto ">
      <div className="flex items-center justify-between my-5">
        <h1 className="text-black text-2xl font-bold">My Meal Plan</h1>
        <FiPlus size={35} color="black" className="rounded-full bg-[#cdfb47] p-2" />
      </div>

      <button className="flex items-center mb-5 justify-between bg-black bg-opacity-5 rounded-2xl text-black text-opacity-60">
        <div className="flex gap-2 items-center pr-10">
          <FaCalendarMinus />
          Sat. 09 September 2023
        </div>
        <FaAngleDown />
      </button>

      {plans.map((plan, index) => (
        <motion.div 
          key={index} 
          className="mb-2 p-4 bg-white rounded-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-10 justify-between">
            <h2 className="text-xl text-black font-semibold">{plan.title}</h2>
            <p className="text-gray-600 flex items-center">
              <span><FaClock /></span>
              {plan.time}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="relative flex mt-5">
              {plan.food.map((item, idx) => (
                <div key={idx} className="">
                  <motion.img
                    key={idx}
                    src={item.img}
                    alt={item.name}
                    className="absolute size-12 object-cover rounded-full"
                    style={{ top: `${idx}px`, left: `${idx * 35}px` }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: idx * 0.2 }}
                  />
                  <p className="text-gray-500 text-sm pt-14">{item.kal},</p>
                </div>
              ))}
              <motion.div
                className="z-40 bg-[#212121]  -ml-5 mt-3 h-9 hover:bg-gray-600 rounded-full p-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <FaPlus size={10} color="white" />
              </motion.div>
            </div>
            <p className="text-gray-700 font-bold">Total: {plan.totalKcal}</p>
          </div>
        </motion.div>
      ))}
      <DataCard data={nutritionData} />
    </div>
  );
}

export default MealPlan;
