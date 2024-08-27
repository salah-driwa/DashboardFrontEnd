
const recentActivityData = [
  {
    name: 'Ronald Richards',
    email: 'ronalcrs@mail.com',
    status: 'Member',
    customerId: '#74568320',
    time: '5 min ago',
    amount: '$12,408.20',
    avatar: 'https://plus.unsplash.com/premium_photo-1683140621573-233422bfc7f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with actual image URL
    statusColor: 'bg-gray-600'
  },
  {
    name: 'Darrell Steward',
    email: 'steward.darell@mail.com',
    status: 'Signed Up',
    customerId: '#23134855',
    time: '10 min ago',
    amount: '$201.50',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    statusColor: 'bg-orange-500'
  },
  {
    name: 'Marvin McKinney',
    email: 'mckinney.jr@mail.com',
    status: 'New Customer',
    customerId: '#54394837',
    time: '15 min ago',
    amount: '$2,856.03',
    avatar: 'https://images.unsplash.com/photo-1522556189639-b150ed9c4330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    statusColor: 'bg-teal-500'
  },
];

export const RecentActivityCard = () => {
  return (
    <div    className="rounded-2xl w-full  bg-opacity-20   flex-1   mx-auto  p-[1.5px]  bg-gradient-to-b  h-fit from-[#ffffff7c] to-secondaryStuff">

  
    <div className="  w-full  shadow-lg      bg-secondaryStuff rounded-2xl h-fit p-5 to-secondaryStuff  bg-gradient-to-b from-[#b6a4a40f]   text-white flex flex-col justify-between">
     
      <div className="flex justify-between mb-2 text-sm text-gray-400">
      <h3 className=" text-2xl  flex    font-bold text-white mb-4">Recent Activity</h3>
        <button className="bg-gray-400 bg-opacity-15 text-white h-11 px-4 py-2 rounded-lg flex justify-center items-center gap-2">
        Last 24h<span className="ml-2">&#9662;</span>
</button>
   
      </div>
     
      
      <table className="table-auto w-full text-left">
        <thead>
          <tr className="text-gray-400 text-sm   border-b  mx-auto  pb-3 border-gray-400 border-opacity-20">
            <th className="pb-4">Customer</th>
            <th className="pb-4">Status</th>
            <th className="pb-4">Customer ID</th>
            <th className="pb-4">Retained</th>
            <th className="pb-4">Amount</th>
          </tr>
        </thead>
      
    
         <tbody className="text-white">
            
          {recentActivityData.map((item, index) => (
            <tr key={index} className="border-b   border-gray-700">
              <td className="py-3 flex gap-2 ">
                <img src={item.avatar} alt="" className=" size-12 rounded-full  object-cover  border-white border-2 border-opacity-70" />
                <div className=" flex flex-col">
                <span>{item.name}</span>
        <span className="  text-white text-sm text-opacity-50"> {item.email}</span>
        
        </div> 
        
         </td>
        
              <td className="py-3">
                <span
                  className={`px-2 py-1 rounded-full  text-sm font-medium ${
                    item.status === 'Member'
                      ? 'bg-gray-600 bg-opacity-15 text-gray-600'
                      : item.status === 'Signed Up'
                      ? 'bg-orange-500 bg-opacity-15 text-orange-500'
                      : 'bg-teal-500  bg-opacity-15 text-teal-500'
                  }  font-bold`}
                >
                  {item.status}
                </span>
              </td>
              <td className="py-3">{item.customerId}</td>
              <td className="py-3">{item.time}</td>
              <td className="py-3">{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    </div>
  
  );
};
