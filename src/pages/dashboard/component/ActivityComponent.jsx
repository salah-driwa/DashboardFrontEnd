import { FaCalendarAlt, FaPhoneAlt, FaEnvelope, FaPlus } from 'react-icons/fa';
import { FaListCheck } from 'react-icons/fa6';
import { IoIosSend } from 'react-icons/io';


function ActivityComponent() {
    const activities = [
        {
          date: '12 Feb',
          time: '11 pm',
          title: 'Send Payment Reminder',
          user: 'Jessi Johnson',
          description: 'sent a payment reminder',
          bgColor: 'bg-purple-200',
          img: 'https://images.unsplash.com/photo-1609010697446-11f2155278f0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          date: '13 Feb',
          time: '12 pm',
          title: 'Call about the contract',
          user: 'Brian Carpenter',
          description: 'Google meets',
          bgColor: 'bg-yellow-200',
          img: 'https://plus.unsplash.com/premium_photo-1661726660137-61b182d93809?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          date: '14 Feb',
          time: '9 am',
          title: 'Project Meeting',
          user: 'Olivia Adams',
          description: 'held a project discussion',
          bgColor: 'bg-green-200',
          img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          date: '15 Feb',
          time: '3 pm',
          title: 'Design Review',
          user: 'Ethan Lee',
          description: 'reviewed design mockups',
          bgColor: 'bg-blue-200',
          img: 'https://images.unsplash.com/photo-1593642634367-d91a135587b5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          date: '16 Feb',
          time: '2 pm',
          title: 'Client Feedback',
          user: 'Sophia Brown',
          description: 'received feedback from client',
          bgColor: 'bg-red-200',
          img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
      ];
      

  return (
    <div>
         <h1 className=' text-3xl bg-slate-300 w-fit p-2 px-7 rounded-t-2xl bg-opacity-10 ml-auto'>Activity</h1>
    <div className="p-6 rounded-b-2xl rounded-tl-2xl  tab text-white">
      {/* Header */}
     
      <div className="flex justify-between items-center mb-8">
       
        <div className="flex  gap-1">
            <div className=' bg-gray-300 bg-opacity-10 flex items-center rounded-2xl p-2 gap-1 '>
            <FaCalendarAlt size={40} className=' border border-white border-opacity-20 rounded-full p-2'  />
            <FaPlus size={40} color='white'  className='  bg-white bg-opacity-15 opacity-100 rounded-full p-2' />

            </div>
            <div className=' bg-gray-300 bg-opacity-10 flex items-center rounded-2xl p-2 gap-1 '>
            <FaListCheck size={40} className=' border border-white border-opacity-20 rounded-full p-2'  />
            <FaPlus size={40} color='white'  className='   bg-white bg-opacity-15 opacity-100 rounded-full p-2' />

            </div>
            <div className=' bg-gray-300 bg-opacity-10 flex items-center rounded-2xl p-2 gap-1 '>
            <FaPhoneAlt size={40} className=' border border-white border-opacity-20 rounded-full p-2'  />
            <FaPlus size={40} color='white'  className='  bg-white bg-opacity-15 opacity-100 rounded-full p-2' />

            </div>
            <div className=' bg-gray-300 bg-opacity-10 flex items-center rounded-2xl p-2 gap-1 '>
            <FaEnvelope size={40} className=' border border-white border-opacity-20 rounded-full p-2'  />
            <FaPlus size={40} color='white'  className='  bg-white bg-opacity-15 opacity-100 rounded-full p-2' />

            </div>
    
        </div>
      </div>

      {/* Upcoming Section */}
      <div className="mb-6 flex justify-between items-center">
        <h3 className="text-xl opacity-80">Upcoming</h3>
       <div><span className="text-3xl font-bold">12</span> Activities</div> 
      </div>

      {/* Activity Cards */}
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className={`p-4 rounded-xl ${activity.bgColor} flex items-start justify-between`}
          >
            <div className="flex items-start">
              {/* Icon */}
              <div className="w-8 h-8 bg-white text-gray-900 rounded-full flex items-center justify-center">
                <FaCalendarAlt />
              </div>
              {/* Details */}
              <div className="ml-4">
                <div className="text-sm text-gray-600  font-bold">{activity.date} at {activity.time}</div>
                <div className="text-lg text-black text-opacity-85 font-semibold">{activity.title}</div>
                <div className="text-sm flex items-center gap-1 text-gray-600"> <img src={activity.img} alt={activity.img} className=' size-12   object-cover rounded-full' /> <span className=' font-semibold'>{activity.user}</span> {activity.description}</div>
              </div>
            </div>
            {/* Action Icon */}
            <button className="text-xl  bg-gray-600  p-2 bg-opacity-20  text-black text-opacity-80p-2 rounded-full hover:bg-gray-200">
              <IoIosSend   className=' '/>
            </button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default ActivityComponent;