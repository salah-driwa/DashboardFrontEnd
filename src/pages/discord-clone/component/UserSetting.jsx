import { IoIosNotifications, IoMdSettings } from "react-icons/io"

function UserSetting() {
  return (
    <div className=' flex w-full h-16  items-center justify-end gap-3 pr-7 pb-3 pt-3 relative'>
        <IoMdSettings size={40} className=" p-2 rounded-full bg-white bg-opacity-25" />

<IoIosNotifications  size={40} className=" p-2 rounded-full bg-white bg-opacity-25" />


   <h1 className=" text-2xl">jenna Qritz</h1>      
   <img src="https://i.pravatar.cc/150?img=10" alt=""  className="   size-10     rounded-full "/>
   <span
            className={` size-3 absolute  top-11 right-7 rounded-full border border-gray-900 
             bg-green-600
            `}
          ></span>
    </div>
  )
}

export default UserSetting