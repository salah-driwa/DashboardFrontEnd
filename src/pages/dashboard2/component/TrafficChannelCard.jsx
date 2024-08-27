
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const data = [
  { name: 'Direct', value: 50.5, color: '#5542f7' },
  { name: 'Referral', value: 30.5, color: '#83a6ed' },
  { name: 'Organic', value: 19, color: '#8dd1e1' },
];

const COLORS = ['#5542f7', '#c8c2fc', '#8dd1e1'];

export const TrafficChannelCard = () => {
  return (
    <div    className="rounded-2xl   bg-opacity-20   flex-1   mx-auto  p-[1.5px]  w-full bg-gradient-to-b  h-fit from-[#ffffff7c] to-secondaryStuff max-w-md ">

  

 
    <div className="   bg-secondaryStuff rounded-2xl h-fit p-5 to-secondaryStuff  bg-gradient-to-b from-[#b6a4a40f]   text-white flex flex-col justify-between shadow-lg  w-full ">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl    font-bold text-white">Traffic Channel</h3>
        <button className="bg-gray-400 bg-opacity-15 text-white px-4 py-2 rounded-lg flex justify-center items-center gap-2">

        All time <span className="ml-2">&#9662;</span>
</button>
    
      </div>
      <div className="flex justify-center">
        <PieChart width={200} height={200}>
          <Pie
            data={data}
            cx={100}
            cy={100}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
      <div className="flex justify-around mt-4 text-gray-400 text-sm">
        {data.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <span style={{ backgroundColor: item.color }} className="w-3 h-3 rounded-full"></span>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};
