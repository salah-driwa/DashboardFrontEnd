// eslint-disable-next-line no-unused-vars
import React from 'react';
import { motion} from 'framer-motion';
import Sidebar from './component/sidebar';
import Midsection from './component/midsection';
import Playsection from './component/playsection';



const Home = () => {
  return (
<motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="   h-screen overflow-hidden  bg-[#0a0a0a] "  
    > 

<div className=' flex flex-col  justify-between h-full'> 
  <div className='   flex flex-1  w-full '>
<Sidebar/>

<Midsection/>
</div>
<Playsection/>
</div>
    </motion.div>
  );
};

export default Home;
