// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { motion} from 'framer-motion';

import ActivitySection from './component/ActivitySection';
import MainSection from './component/MainSection';
import UserSection from './component/UserSection';
import SideNav from './component/SideNav';
import MeetingRoomSection from './component/MeetingRoomSection';
import FriendSection from './component/FriendsSection';


const Home = () => {

  const [isMeetingRoomView, setIsMeetingRoomView] = useState(false);

  const toggleView = () => {
    setIsMeetingRoomView(!isMeetingRoomView);
  };
  return (
<motion.div
      initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className=" min-h-screen w-full  flex  bg-DbgColor   "  
    > 

<SideNav toggleView={toggleView} />

{isMeetingRoomView ?  <ActivitySection className=" h-screen" />:<FriendSection className="  h-screen overflow-y-auto"></FriendSection> }


<div className="flex flex-col w-full ">
  {/* UserSetting Section */}

   

  {/* Main Content Section */}
  <div className="flex-1 overflow-hidden">
    {isMeetingRoomView ? (
      <div className="h-full">
        <MeetingRoomSection />
      </div>
    ) : (
      <div className="flex flex-1 h-full">
        <MainSection className="flex-1" />
        <UserSection className="flex-1" />
      </div>
    )}
  </div>
</div>


    </motion.div>
  );
};

export default Home;
