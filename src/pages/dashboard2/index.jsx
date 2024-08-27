// eslint-disable-next-line no-unused-vars
import React from 'react';
import { motion} from 'framer-motion';
import Sidebar from './component/sidebar';

const Home = () => {
  return (
<motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className=" h-full "  
    > 
  
    <Sidebar>
  
         
        </Sidebar>
  
    </motion.div>
  );
};

export default Home;
