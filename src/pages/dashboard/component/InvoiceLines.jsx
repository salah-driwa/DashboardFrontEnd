import { useState } from "react";
import { CiGrid42, CiSearch, CiSettings, CiViewList } from "react-icons/ci";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const InvoiceLines = () => {
  const items = [
    { name: 'iPhone 14 Pro',storage:"Store 2" , price: '$850', quantity: 20, imageUrl: 'https://i.pinimg.com/736x/11/2c/93/112c933e00502825649a504ca3ab3947.jpg' },
    { name: 'iPhone 14', storage:"Store 2" ,price: '$700', quantity: 20, imageUrl: 'https://w7.pngwing.com/pngs/378/624/png-transparent-iphone-14.png' },
    { name: 'MacBook Pro 13',storage:"Store 2" , price: '$1600', quantity: 10, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl0-aAFWyrWWfP_xE1dMtKjsuCcYeeG-cL2A&s' }
    ,{ name: 'MacBook Pro 13',storage:"Store 2" , price: '$1100', quantity: 10, imageUrl: 'https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111883_macbookair.png' }
    ,{ name: 'iMac 27', storage:"Store 2" ,price: '$1300', quantity: 10, imageUrl: 'data:image/jpeg;base64,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' }
    ,{ name: 'iPhone 15',storage:"Store 2" , price: '$800', quantity: 10, imageUrl: 'https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-hero-230912_Full-Bleed-Image.jpg.large.jpg' }
   , { name: 'Samsung Galaxy S23 Ultra', storage: "Store 1", price: '$1200', quantity: 25, imageUrl: 'https://images.unsplash.com/photo-1678958274412-563119ec18ab?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
   { name: 'iPad Pro 12.9', storage: "Store 3", price: '$1100', quantity: 15, imageUrl: 'https://images.unsplash.com/photo-1661340272675-f6829791246e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aVBhZCUyMFBybyUyMDEyLjl8ZW58MHx8MHx8fDA%3D' },
   { name: 'Google Pixel 7', storage: "Store 1", price: '$850', quantity: 18, imageUrl: 'https://images.unsplash.com/photo-1596742578443-7682ef5251cd?q=80&w=2154&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
   { name: 'Sony PlayStation 5', storage: "Store 4", price: '$500', quantity: 8, imageUrl: 'https://images.unsplash.com/photo-1678761442615-5af77170f925?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
   { name: 'Dell XPS 15', storage: "Store 2", price: '$1700', quantity: 12, imageUrl: 'https://images.unsplash.com/photo-1622286346003-c5c7e63b1088?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
 

    // Add more items here
  ];
    // State to track the active tab, default is the first one
    const [activeTab, setActiveTab] = useState('Invoice Lines');
    const [searchTerm, setSearchTerm] = useState("");

    const filteredItems = items.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    const [order, setOrder] = useState(0);
    // Menu items
    const menuItems = ['Invoice Lines', 'Details', 'Docs', 'Notes'];
  

  return (
    <section className="  text-white  rounded-lg ">

    <div className="flex gap-4 ">
      {menuItems.map((item) => (
        <div
          key={item}
          onClick={() => setActiveTab(item)}  // Set active tab on click
          className={`text-2xl relative py-2 px-4 rounded-t-2xl   bg-opacity-25  cursor-pointer text-white ${
            activeTab === item
              ? 'text-opacity-100  bg-gray-500 '  // Selected button styles
              : 'bg-transparent   text-opacity-40 hover:text-opacity-65'  // Default button styles
          }`}
        >
        
          {item}
        </div>
      ))}
    </div>

<div className=" tab p-10 rounded-b-2xl   rounded-tr-2xl">
 <div className=" flex  justify-between ">
    <div> <span className=" text-white font-normal text-5xl">67</span>  <span className=" text-4xl opacity-70">items</span></div>
    <div className="flex items-center gap-2">
  <CiSearch size={25} className=" text-gray-400" />
  <input
    type="text"
    placeholder="Search items"
    className="bg-transparent border-b border-gray-400 text-white placeholder-gray-400 focus:outline-none focus:border-gray-200 transition-colors"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
  
</div>
 <div className="flex   items-center gap-2">

<div className=" flex bg-slate-400 bg-opacity-20 p-2 rounded-3xl gap-2 ">
      <div className={` text-white flex items-center justify-center rounded-full  bg-white p-3 hover:bg-opacity-40
      ${
        order === 0
               ? 'bg-opacity-20   '  // Selected button styles
               : 'bg-opacity-0'  // Default button styles
        }  `} 
        onClick={() => setOrder(0)}>
        <CiGrid42 size={20} />
      </div>

    
      <div className={`flex items-center justify-center rounded-full bg-white  p-3 hover:bg-opacity-40 text-white ${
       order === 1
              ? 'bg-opacity-20   '  // Selected button styles
              : 'bg-opacity-0'  // Default button styles
       } `}
       onClick={() => setOrder(1)}>
        <CiViewList size={20} />
      </div>
      </div>
      
      <div className={`flex items-center justify-center   rounded-full bg-white bg-opacity-20 p-4  size-14 hover:bg-opacity-40 text-white `}>
        <CiSettings size={40} />
      </div>
    </div>
 </div>

 <div className="flex justify-end mb-4">
      
      </div>

      {/* Display Items */}
      {order === 0 ? (
        // Grid Layout
        <div className="grid grid-cols-4 gap-1 mt-7">
          {filteredItems.map((item, index) => (
            <div key={index} className="bg-white bg-opacity-5 p-4 rounded-3xl">
              <div className="flex items-center gap-6 mb-2">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-16 h-16 bg-black bg-opacity-15 object-cover rounded-full"
                />
                <div className="flex flex-col">
                  <span className="text-nowrap text-xl">{item.name}</span>
                  <div className="text-sm">{item.price}</div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>{item.quantity} Qty</div>
                <div className="text-sm flex items-center gap-2">
                  {item.storage}
                  <HiOutlineDotsHorizontal
                    className="bg-white rounded-full bg-opacity-10 p-2 hover:bg-opacity-25"
                    size={30}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Horizontal Layout
        <div className=" gap-1 flex-col flex mt-7 min-w-[600px]  ">
          {items.map((item, index) => (
            <div key={index} className="flex bg-white bg-opacity-5 p-4 rounded-3xl items-center">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-24 h-24 bg-black bg-opacity-15 object-contain rounded-full mr-6"
              />
              <div className="flex justify-between w-full">
                <div className="flex flex-col">
                  <span className="text-xl">{item.name}</span>
                  <div className="text-sm">{item.price}</div>
                  <div>{item.quantity} Qty</div>
                </div>
                <div className="text-sm flex items-center gap-2">
                  {item.storage}
                  <HiOutlineDotsHorizontal
                    className="bg-white rounded-full bg-opacity-10 p-2 hover:bg-opacity-25"
                    size={30}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      </div>
    </section>
  );
};

export default InvoiceLines;
