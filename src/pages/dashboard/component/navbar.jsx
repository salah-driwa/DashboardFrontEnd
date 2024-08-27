import { AiOutlineDelete } from "react-icons/ai";
import { CiCreditCard1, CiEdit, CiSearch } from "react-icons/ci";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { SlOptions } from "react-icons/sl";


const Navbar = () => {
  return (
    <nav className="flex justify-between p-10 bg-dark text-white">
   
      <div className="flex items-center space-x-2">
      <div className="  text-4xl font-extrabold  mr-16">Logo</div>
        <button className="text-xl rounded-full p-3 bg-white bg-opacity-20"><HiOutlineArrowLongLeft  size={20}/></button>
        <button className="text-xl rounded-full p-3 bg-white bg-opacity-20"><SlOptions   size={20}/></button>
        <h1 className="text-2xl">Invoice</h1>
      </div>
      <div className=" flex gap-1 ml-auto   mr-16">
      <button className="px-4 py-2 bg-white bg-opacity-15 flex items-center gap-3  rounded-2xl"> <CiCreditCard1 size={20} />Issue Credit</button>
        <button className="px-4 py-2 bg-white bg-opacity-15 flex items-center gap-3  rounded-2xl"> <CiEdit   size={20}/>Edit</button>
        <button className="px-4 py-2 bg-white bg-opacity-15 flex items-center gap-3   rounded-2xl"><AiOutlineDelete   size={20}/>Delete</button>
        </div>
      <div className="flex space-x-2 items-center">
       <div className="profile-image rounded-full  flex">
            <img className=" w-12 h-12" src="https://cdn4.iconfinder.com/data/icons/business-conceptual-part1-1/513/business-man-512.png"/>
         
            <button className="text-xl rounded-full p-3 w-12 h-12 bg-white bg-opacity-20">   <CiSearch  size={22} /></button>
            </div>
      </div>
    </nav>
  );
};

export default Navbar;
