// src/pages/index.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const cardData = [
  {
    id: 1,
    title: "Invoice Management Dashboard",
    link: "/dashboard",
    img: "https://cdn.dribbble.com/userupload/11811535/file/original-77173e3528d7e9a0b554f9e1c8ffc339.png?resize=1024x768",
  },
  {
    id: 2,
    title: "Storeshop - Dashboard",
    link: "/dashboard2",
    img: "https://cdn.dribbble.com/userupload/10748017/file/original-97ff7cb94cd567b53e39fc7cb238ee6d.png?resize=1024x768",
  },
  {
    id: 3,
    title: "Health Tracker Dashboard",
    link: "/dashboard3",
    img: "https://cdn.dribbble.com/userupload/10078496/file/original-263868fe956798afc77f8beff0255c84.png?resize=752x564&vertical=center",
  },
  {
    id: 4,
    title: "Discord Clone",
    link: "https://discord-clone12.netlify.app/",
    img: "  https://cdn.dribbble.com/userupload/14785078/file/original-e0412c4a7f985fc28b5c5418807cc427.png?resize=1600x1200",
  },
  {
    id: 5,
    title: "Streaming Platform",
    link: "https://w-anime.netlify.app/",
    img: "https://cdn.dribbble.com/userupload/8811119/file/original-0a7108bf8884a0bd730ebfda69bec178.png?resize=1024x768&vertical=center",
  },
  
  {
    id: 6,
    title: "Music Streaming Web Dashboard",
    link: "https://w-anime.netlify.app/",
    img: "https://cdn.dribbble.com/userupload/10197915/file/original-54d09f49bd7ac66da46995a5ff1ab7ce.png?resize=1024x768&vertical=center",
  },
];
const Index = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
  >
    <h1 className="text-4xl  font-bold text-white mb-8">Project</h1>
    <div className="flex flex-wrap gap-6 w-full px-4 justify-center">
      {cardData.map((card) => (
        <Link
          key={card.id}
          to={card.link}
          className="rounded-lg flex-grow max-w-xs min-w-[380px] h-96 overflow-hidden shadow-lg transform transition-transform hover:scale-105"
        >
          <img
            src={card.img}
            alt={card.title}
            className="w-full h-80 object-cover"
          />
          <div className="bg-white p-4">
            <h2 className="text-lg font-semibold text-gray-800">
              {card.title}
            </h2>
          </div>
        </Link>
      ))}
    </div>
  </motion.div>
  
  
  );
};

export default Index;
