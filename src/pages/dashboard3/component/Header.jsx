import { CiSearch } from "react-icons/ci"
import { IoIosNotifications } from "react-icons/io"
import { MdKeyboardArrowDown } from "react-icons/md"


function Header() {
  return (
    <div className="sidebar   flex items-top py-6  items-center  w-full h-fit">
    <div className="  flex gap-3  justify-center  bg-white rounded-full  items-center">
      <img src="https://img.freepik.com/premium-photo/confident-handsome-stylish-man-fitness-trainer-professional-close-up-portrait-photo_935074-8665.jpg" 
      alt="Profile" className="rounded-full  size-16 object-cover " />
      <h2 className="text-black text-xl ">Jenny Wilson</h2>
      <MdKeyboardArrowDown  className=' text-black bg-[#c9f846] rounded-full p-2 ' size={50} />


    </div>


    <div className="icons flex  align-middle  ml-auto gap-4">
      
      <div className="relative">
      <IoIosNotifications size={50}  className="text-black rounded-full p-2 bg-white      " />
      <div className=" absolute rounded-full bg-[#c9f846] w-3 h-3  right-3 top-2"></div>
      </div>
      <CiSearch size={50}  className="text-black rounded-full p-3 bg-white " />
      {/* Add other icons */}
    </div>




  </div>
  
  )
}

export default Header