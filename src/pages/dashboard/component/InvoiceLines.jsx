import { useState, useEffect } from "react";
import { CiGrid42, CiSearch, CiSettings, CiViewList } from "react-icons/ci";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const InvoiceLines = () => {
  const items = [
    { name: 'iPhone 14 Pro', storage: "Store 2", price: '$850', quantity: 20, imageUrl: 'https://i.pinimg.com/736x/11/2c/93/112c933e00502825649a504ca3ab3947.jpg' },
    { name: 'iPhone 14', storage: "Store 2", price: '$700', quantity: 20, imageUrl: 'https://w7.pngwing.com/pngs/378/624/png-transparent-iphone-14.png' },
    { name: 'MacBook Pro 13', storage: "Store 2", price: '$1600', quantity: 10, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl0-aAFWyrWWfP_xE1dMtKjsuCcYeeG-cL2A&s' },
    { name: 'MacBook Pro 13', storage: "Store 2", price: '$1100', quantity: 10, imageUrl: 'https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111883_macbookair.png' },
    { name: 'iPhone 15', storage: "Store 2", price: '$800', quantity: 10, imageUrl: 'https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-hero-230912_Full-Bleed-Image.jpg.large.jpg' },
    { name: 'Samsung Galaxy S23', storage: "Store 1", price: '$1200', quantity: 25, imageUrl: 'https://images.unsplash.com/photo-1678958274412-563119ec18ab?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'iPad Pro 12.9', storage: "Store 3", price: '$1100', quantity: 15, imageUrl: 'https://images.unsplash.com/photo-1661340272675-f6829791246e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aVBhZCUyMFBybyUyMDEyLjl8ZW58MHx8MHx8fDA%3D' },
    { name: 'Google Pixel 7', storage: "Store 1", price: '$850', quantity: 18, imageUrl: 'https://images.unsplash.com/photo-1596742578443-7682ef5251cd?q=80&w=2154&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Sony PlayStation 5', storage: "Store 4", price: '$500', quantity: 8, imageUrl: 'https://images.unsplash.com/photo-1678761442615-5af77170f925?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Dell XPS 15', storage: "Store 2", price: '$1700', quantity: 12, imageUrl: 'https://images.unsplash.com/photo-1622286346003-c5c7e63b1088?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    // Add more items here
  ];

  const [activeTab, setActiveTab] = useState('Invoice Lines');
  const [searchTerm, setSearchTerm] = useState("");
  const [order, setOrder] = useState(0);
  const [loading, setLoading] = useState(true); // Add loading state

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Stop loading after 1 second
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const menuItems = ['Invoice Lines', 'Details', 'Docs', 'Notes'];

  return (
    <section className= " w-9/12 text-white rounded-lg">
      <div className="flex gap-4 ">
        {menuItems.map((item) => (
          <div
            key={item}
            onClick={() => setActiveTab(item)}  // Set active tab on click
            className={`text-2xl relative py-2 px-4 rounded-t-2xl bg-opacity-25 cursor-pointer text-white ${
              activeTab === item
                ? 'text-opacity-100 bg-gray-500 '  // Selected button styles
                : 'bg-transparent text-opacity-40 hover:text-opacity-65'  // Default button styles
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <div className="tab p-10 rounded-b-2xl rounded-tr-2xl">
        <div className="flex justify-between">
          <div> <span className="text-white font-normal text-5xl">67</span>  <span className="text-4xl opacity-70">items</span></div>
          <div className="flex items-center gap-2">
            <CiSearch size={25} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search items"
              className="bg-transparent border-b border-gray-400 text-white placeholder-gray-400 focus:outline-none focus:border-gray-200 transition-colors"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <div className="flex bg-slate-400 bg-opacity-20 p-2 rounded-3xl gap-2 ">
              <div className={`text-white flex items-center justify-center rounded-full bg-white p-3 hover:bg-opacity-40 ${order === 0 ? 'bg-opacity-20' : 'bg-opacity-0'}`} onClick={() => setOrder(0)}>
                <CiGrid42 size={20} />
              </div>
              <div className={`flex items-center justify-center rounded-full bg-white p-3 hover:bg-opacity-40 text-white ${order === 1 ? 'bg-opacity-20' : 'bg-opacity-0'}`} onClick={() => setOrder(1)}>
                <CiViewList size={20} />
              </div>
            </div>
            <div className={`flex items-center justify-center rounded-full bg-white bg-opacity-20 p-4 size-14 hover:bg-opacity-40 text-white `}>
              <CiSettings size={40} />
            </div>
          </div>
        </div>

        {/* Skeleton Loader */}
        {loading ? (
          <div className="grid grid-cols-4 gap-1 mt-7">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="bg-gray-700 p-4 rounded-3xl animate-pulse">
                <div className="flex items-center gap-6 mb-2">
                  <div className="w-16 h-16 bg-gray-500 rounded-full animate-pulse"></div>
                  <div className="flex flex-col">
                    <div className="h-6 w-32 bg-gray-500 rounded animate-pulse"></div>
                    <div className="h-4 w-24 bg-gray-500 rounded animate-pulse"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="h-4 w-16 bg-gray-500 rounded animate-pulse"></div>
                  <div className="h-4 w-16 bg-gray-500 rounded animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className=" flex flex-wrap justify-center gap-4 mt-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-5 p-4 rounded-3xl h-[200px] w-[280px] flex flex-col justify-between"
            >
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
        
        )}
      </div>
    </section>
  );
};

export default InvoiceLines;
