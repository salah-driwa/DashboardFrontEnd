
import { BiSolidRightTopArrowCircle } from "react-icons/bi";
import {  FaMoneyBillWave } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { HiDotsHorizontal, HiUsers } from "react-icons/hi";
import { IoReceiptSharp } from "react-icons/io5";
import { LuMoveUpRight } from "react-icons/lu";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { RecentActivityCard } from "./recentActivityData";
import { TrafficChannelCard } from "./TrafficChannelCard";

const data = [
  { name: 'Jan', profit: 4.0, Loss: 2.4, amt: 2.4, unit: 'k' },
  { name: 'Feb', profit: 3.0, Loss: 1.4, amt: 2.2, unit: 'k' },
  { name: 'Mar', profit: 2.0, Loss: 9.8, amt: 2.3, unit: 'k' },
  { name: 'Apr', profit: 2.8, Loss: 3.9, amt: 2.0, unit: 'k' },
  { name: 'May', profit: 1.9, Loss: 4.8, amt: 2.2, unit: 'k' },
  { name: 'Jun', profit: 2.4, Loss: 3.8, amt: 2.5, unit: 'k' },
];

const DashboardCards = () => {
  const cardData = [
    {
      title: "Total Sales",
      value: "$120,784.02",
      change: "+12.3%",
      changeDetail: "+$1,453.89 today",
      icon: <FaMoneyBillWave  size={24} />,
    },
    {
      title: "Total Orders",
      value: "28,834",
      change: "+20.1%",
      changeDetail: "+2,676 today",
      icon: <IoReceiptSharp  size={24} />,
    },
    {
      title: "Visitor",
      value: "18,896",
      change: "-5.6%",
      changeDetail: "-876 today",
      icon: <HiUsers  size={24} />,
    },
    {
      title: "Refunded",
      value: "2,876",
      change: "+13%",
      changeDetail: "+34 today",
      icon: <BiSolidRightTopArrowCircle  size={24} />,
    },
  ];

  return (
  <div className=" flex flex-col flex-wrap">
  <div className=" flex  justify-center   max-h-[500px] gap-6  ">

    <div className=" flex  flex-wrap  justify-center  gap-6    ">
      {/* Cards */}
      {cardData.map((card, index) => (
        <div   key={index} className="rounded-2xl   bg-opacity-20  min-w-60  flex-1   mx-auto  p-[1.5px]  bg-gradient-to-b  h-fit from-[#ffffff7c] to-secondaryStuff">

        <div
       
          className="bg-secondaryStuff rounded-2xl h-fit p-5 to-secondaryStuff  bg-gradient-to-b from-[#b6a4a40f]   text-white flex flex-col justify-between  min-w-60 "
        >
          <div className="flex justify-between gap-2 items-center">
          <div className=" bg-primary2 bg-opacity-15 p-2 rounded-full  text-primary2">{card.icon}</div>
            <h3 className="text-lg font-semibold">{card.title}</h3>
            <HiDotsHorizontal className=" ml-auto" />
          </div>
          <div className="mt-4">
            <h2 className="text-3xl font-bold">{card.value}</h2>
            <p className={`text-sm mt-1 ${card.change.startsWith("+") ? " text-greenAccent" : " text-redAccent"}`}>
              {card.change} <span className="text-gray-400">{card.changeDetail}</span>
              
            </p>
            <div className="flex-grow border-t  w-11/12 mx-auto mt-4 border-gray-400 border-opacity-20 "></div>
          </div>
          <div className="mt-4">
            <div className="text-primary2    cursor-pointer hover:text-white flex items-center gap-5">View Report <FaArrowRightLong />
            </div>
          </div>
        </div>
        </div>
    ))}

    
    </div>
{/* card ui*/}
    <div   className="rounded-2xl    bg-opacity-20  min-w-[600px]   p-[1.5px]  bg-gradient-to-b  from-[#ffffff7c]  to-[#d7d7d700]">

<div

  className="bg-secondaryStuff rounded-2xl p-5 to-secondaryStuff  h-full bg-gradient-to-b from-[#b6a4a40f]    text-white flex flex-col   min-w-80"
>

<div className=" flex h-fit">
    <h1 className=" text-3xl text-opacity-65 text-white mr-auto">Revenue</h1>
<button className="bg-gray-400 bg-opacity-15 text-white px-4 py-2 rounded-lg flex justify-center items-center gap-2">

Month <span className="ml-2">&#9662;</span>
</button>
</div>
<div className=" flex  justify-between items-center">
    <div className=" flex text-sm">
    <h1 className=" text-white text-4xl "> $16.400<span className=" text-white text-opacity-40">.12</span></h1>
    <span className=" flex justify-center  font-bold gap-1 items-center h-6 bg-greenAccent rounded-3xl text-greenAccent text-sm bg-opacity-10 
    px-2 ml-2"><LuMoveUpRight />
    +10%</span>
    </div>
    <div className=" flex gap-4">
     <span className=" text-primary2 flex  items-center   "><GoDotFill /> <span className=" text-white text-opacity-65">Profit</span> 
     </span>
     <span className=" text-softPurple flex  items-center   "><GoDotFill /> <span className=" text-white text-opacity-65">Loss</span> 
     </span>
     </div>
</div>



<ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={600}
          height={300}
          data={data}
          margin={{
            top: 60,
            right: 30,
            left: -30,
            bottom: 5,
          }}
        >
          <CartesianGrid   horizontal
            vertical={false} // Disable horizontal lines
            verticalDashArray="10 10" // Dashed lines for vertical grid lines
            strokeDasharray="10 10" // Optional fallback if verticalDashArray doesn't work
       />
          <XAxis dataKey="name"   tick={{ 
              fill: 'rgba(255, 255, 255, 0.6)', // Faded white
              fontSize: 12, 
              fontFamily: 'Arial, sans-serif' 
            }}/>
          
          {/* Custom YAxis with 'k' suffix and faded white text */}
          <YAxis
            tickFormatter={(value) => `${value}k`}
            tick={{ 
              fill: 'rgba(255, 255, 255, 0.6)', // Faded white
              fontSize: 12, 
              fontFamily: 'Arial, sans-serif' 
            }}
          />

          <Tooltip />
   
          <Bar dataKey="Loss" fill="#5542f7" />
          <Bar dataKey="profit" fill="#c8c2fc" />
        </BarChart>
      </ResponsiveContainer>


</div>
</div>





    </div>
    <div className=" flex justify-between items-start gap-6 mt-6">
<RecentActivityCard />
<TrafficChannelCard />


</div>

    </div>
  );
};

export default DashboardCards;
