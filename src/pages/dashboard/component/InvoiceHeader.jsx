import { BiLoader } from "react-icons/bi";
import { CgSandClock } from "react-icons/cg";
import { CiCreditCard1 } from "react-icons/ci";
import { GoHash } from "react-icons/go";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { IoCheckmarkCircleOutline, IoReceiptOutline } from "react-icons/io5";
import CountUp from "./CountUp";

const InvoiceHeader = () => {
  return (
    <section className="p-8 pt-28  text-white">
      <div className="flex justify-around items-end mb-8  ">
        <div className=" flex  items-center gap-6">
     <button className=" bg-white p-6 mr-5 rounded-full bg-opacity-0 border border-opacity-40 border-white"> <IoReceiptOutline size={30} /></button> 
        <div className="text-7xl font-medium">
            <span className=" text-5xl px-3  font-light">$</span>
            <CountUp
  from={0}
  to={68}
  separator=","
  direction="up"
  duration={1}
  className="count-up-text"
/>        
        <span className=" opacity-60  font-thin">,
        <CountUp
  from={0}
  to={575}
  separator=","
  direction="up"
  duration={1}
  className="count-up-text"
/>     .00</span>
      
        </div>
        </div>

        <div className="flex gap-12">
  {/* Account Section */}
  <div className="text-gray-400 flex">
    <button className="bg-white p-5 mr-5 rounded-full bg-opacity-0 border border-opacity-40 border-white">
      <HiOutlineBuildingOffice2 size={20} />
    </button>
    <div className="flex flex-col text-white text-opacity-90">
      <div className="text-sm opacity-60">Account</div>
      Ohana Inc.
    </div>
  </div>

  {/* Invoice Number Section */}
  <div className="text-gray-400 flex">
    <button className="bg-white p-5 mr-5 rounded-full bg-opacity-0 border border-opacity-40 border-white">
      <GoHash size={20} />
    </button>
    <div className="flex flex-col text-white text-opacity-90">
      <div className="text-sm opacity-60">Invoice Number</div>
      INV-4905
    </div>
  </div>

  {/* Status Section */}
  <div className="text-gray-400 flex">
    <button className="bg-white p-5 mr-5 rounded-full bg-opacity-0 border border-opacity-40 border-white">
      <BiLoader size={20} />
    </button>
    <div className="flex flex-col text-white text-opacity-90">
      <div className="text-sm opacity-60">Status</div>
      Posted
    </div>
  </div>
</div>

      </div>


      <div className="flex  justify-evenly items-end mt-12">
  {/* Paid Section */}
  <div className="flex items-center space-x-4">
    <div className="flex flex-col  w-64">
      <span className="text-gray-400 opacity-80">Paid</span>
      <div className="bg-primary px-4 py-2 rounded-lg flex items-center gap-4 text-black">
        <IoCheckmarkCircleOutline size={30} />
        <span>
        $     <CountUp
  from={0}
  to={25}
  separator=","
  direction="up"
  duration={1}
  className="count-up-text"
/>      ,000</span>
      </div>
    </div>

    {/* Credits Section */}
    <div className="flex flex-col   w-64">
      <span className="text-gray-400 opacity-80">Credits</span>
      <div className="bg-secondary px-4 py-2 rounded-lg flex items-center gap-4 text-black">
        <span className="border border-black rounded-full p-0.5">
          <CiCreditCard1 size={25} />
        </span>
        <span>$
          <CountUp
  from={0}
  to={12}
  separator=","
  direction="up"
  duration={1}
  className="count-up-text"
/>  ,000</span>
      </div>
    </div>
  </div>

  {/* Balance Section */}
  <div className="flex flex-col   ">
    <span className="text-gray-400 opacity-80">Balance</span>
    <div className="text-white text-opacity-90 bg-white bg-opacity-20 px-16 rounded-full h-12 flex items-center"> 
         <span className=" border border-white border-opacity-35 p-1 rounded-full mr-3"><CgSandClock  size={18} /></span> <span className=" pr-1">$</span> <CountUp
  from={0}
  to={38}
  separator=","
  direction="up"
  duration={1}
  className="count-up-text"
/> <span className=" opacity-60">,
<CountUp
  from={0}
  to={350}
  separator=","
  direction="up"
  duration={1}
  className="count-up-text"
/> </span></div>
  </div>

  {/* Days Outstanding and Pay Invoice Button */}
  <div className="flex flex-col items-center">
  
    <div className="flex items-center gap-4 ">
    <span className="text-white opacity-60">Days Outstanding</span>
      <span className="text-white  opacity-100 font-bold text-xl">8  <span className=" text-white opacity-60 font-thin  text-[15px] ">days</span> </span>
      <button className="px-6 py-2 bg-white text-black rounded-lg">Pay Invoice</button>
    </div>
  </div>
</div>

    </section>
  );
};

export default InvoiceHeader;
