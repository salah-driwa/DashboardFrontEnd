import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import CountUp from "./CountUp";

const recentActivityData = [
  {
    name: 'Ronald Richards',
    email: 'ronalcrs@mail.com',
    status: 'Member',
    customerId: '#74568320',
    time: '5 min ago',
    amount: 1240820,
    avatar: 'https://plus.unsplash.com/premium_photo-1683140621573-233422bfc7f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    statusColor: 'bg-gray-600'
  },
  {
    name: 'Darrell Steward',
    email: 'steward.darell@mail.com',
    status: 'Signed Up',
    customerId: '#23134855',
    time: '10 min ago',
    amount: 20150,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    statusColor: 'bg-orange-500'
  },
  {
    name: 'Marvin McKinney',
    email: 'mckinney.jr@mail.com',
    status: 'New Customer',
    customerId: '#54394837',
    time: '15 min ago',
    amount: 285603,
    avatar: 'https://images.unsplash.com/photo-1522556189639-b150ed9c4330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    statusColor: 'bg-teal-500'
  },
];

export const RecentActivityCard = () => {
  const [loading, setLoading] = useState(true);

  // Simulate 2 seconds loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="rounded-2xl w-full bg-opacity-20 flex-1 mx-auto p-[1.5px] bg-gradient-to-b h-fit from-[#ffffff7c] to-secondaryStuff">
      <div className="w-full shadow-lg bg-secondaryStuff rounded-2xl h-fit p-5 to-secondaryStuff bg-gradient-to-b from-[#b6a4a40f] text-white flex flex-col justify-between">
        <div className="flex justify-between mb-2 text-sm text-gray-400">
          <h3 className="text-2xl flex font-bold text-white mb-4">Recent Activity</h3>
          <button className="bg-gray-400 bg-opacity-15 text-white h-11 px-4 py-2 rounded-lg flex justify-center items-center gap-2">
            Last 24h<span className="ml-2">&#9662;</span>
          </button>
        </div>

        {/* Table with Skeleton Loading */}
        <table className="table-auto w-full text-left">
          <thead>
            <tr className="text-gray-400 text-sm border-b mx-auto pb-3 border-gray-400 border-opacity-20">
              <th className="pb-4">Customer</th>
              <th className="pb-4">Status</th>
              <th className="pb-4">Customer ID</th>
              <th className="pb-4">Retained</th>
              <th className="pb-4">Amount</th>
            </tr>
          </thead>
          <tbody className="text-white">
            {loading
              ? Array(3).fill().map((_, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.2, duration: 1 }}
                    className="border-b border-gray-700"
                  >
                    <td className="py-3 flex gap-2">
                      <div className="w-12 h-12 bg-gray-400 rounded-full"></div>
                      <div className="flex flex-col">
                        <div className="w-32 h-6 bg-gray-400 rounded-md"></div>
                        <div className="w-40 h-4 bg-gray-400 rounded-md mt-1"></div>
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="w-24 h-6 bg-gray-400 rounded-md"></div>
                    </td>
                    <td className="py-3">
                      <div className="w-32 h-6 bg-gray-400 rounded-md"></div>
                    </td>
                    <td className="py-3">
                      <div className="w-24 h-6 bg-gray-400 rounded-md"></div>
                    </td>
                    <td className="py-3">
                      <div className="w-32 h-6 bg-gray-400 rounded-md"></div>
                    </td>
                  </motion.tr>
                ))
              : recentActivityData.map((item, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.2, duration: 1 }}
                    className="border-b border-gray-700"
                  >
                    <td className="py-3 flex gap-2">
                      <img src={item.avatar} alt="" className="w-12 h-12 rounded-full object-cover border-white border-2 border-opacity-70" />
                      <div className="flex flex-col">
                        <span>{item.name}</span>
                        <span className="text-white text-sm text-opacity-50">{item.email}</span>
                      </div>
                    </td>
                    <td className="py-3">
                      <span
                        className={`px-2 py-1 rounded-full text-sm font-medium ${item.statusColor} bg-opacity-15 text-white font-bold`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="py-3">{item.customerId}</td>
                    <td className="py-3">{item.time}</td>
                    <td className="py-3">$
                         <CountUp
                                        from={0}
                                        to=    {item.amount}
                                        separator=","
                                        direction="up"
                                        duration={0.1}
                                        className="count-up-text"
                                      /> 
                                  </td>
                  </motion.tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
