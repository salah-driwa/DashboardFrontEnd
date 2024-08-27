// eslint-disable-next-line no-unused-vars
import React from 'react';
import { motion} from 'framer-motion';
import Navbar from './component/navbar';
import InvoiceHeader from './component/InvoiceHeader';
import InvoiceLines from './component/InvoiceLines';
import ActivityComponent from './component/ActivityComponent';
const Home = () => {
  return (
<motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="    "  
    > 
  
  <div className="glass-bg  px-14  h-fit ">
  
    <Navbar/>
    <InvoiceHeader/>
    <div className=' flex gap-2 mx-4 my-3 justify-center'>
    <InvoiceLines/><ActivityComponent/>
    </div>


    </div>
    </motion.div>
  );
};

export default Home;
