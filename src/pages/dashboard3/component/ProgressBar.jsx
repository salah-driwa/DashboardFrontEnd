
// eslint-disable-next-line react/prop-types
const ProgressBar = ({ label, percentage, color }) => {
  return (
    <div className="flex flex-col mb-4 ">
     <div className=" flex justify-between  items-center"> <label className="text-gray-700 font-medium mb-1">{label}</label>
      <p className="text-right text-gray-600 mt-1">{percentage}%</p>
      </div>
      <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`absolute top-0 left-0 h-full ${color} rounded-full`}
          style={{ width: `${percentage}%` }}
        />
      </div>
  
    </div>
  );
};

export default ProgressBar;
