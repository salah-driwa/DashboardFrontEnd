/* eslint-disable react/prop-types */

import ProgressBar from './ProgressBar'; // Adjust the path if needed

// eslint-disable-next-line react/prop-types
const DataCard = ({ data }) => {
  return (
    <div className="bg-white shadow-lg rounded-3xl mt-3 min-w-96    p-6 max-w-sm mx-auto  ">
        <div className=' flex text-black  items-center justify-between '>
      <h2 className="text-2xl font-semibold mb-4">Calories Analysis</h2>
      <h2 className=" font-thin text-sm mb-4  text-black text-opacity-35"> See Detail</h2>
      </div>
      <ProgressBar label="Carbohydrates" percentage={data.carbohydrates} color="bg-blue-500" />
      <ProgressBar label="Fats" percentage={data.fats} color="bg-red-500" />
      <ProgressBar label="Proteins" percentage={data.proteins} color="bg-green-500" />
      <ProgressBar label="Fiber" percentage={data.fiber} color="bg-purple-500" />
    </div>
  );
};

export default DataCard;
