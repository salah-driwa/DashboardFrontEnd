import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { motion } from 'framer-motion'; // Import Framer Motion
import { FaChromecast, FaPlay } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import FavSection from "./favSection";

function Midsection() {
  const items = ['Playlists', 'Artists', 'Albums', 'Streams', 'Friends Playlist'];
  const [selected, setSelected] = useState('Playlists');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // 1s loading state
    return () => clearTimeout(timer);
  }, []);
  const handleClick = (item) => {
    setSelected(item);
  };

  const tracks = [
    {
      cover: "https://marketplace.canva.com/EAEdeiU-IeI/1/0/1600w/canva-purple-and-red-orange-tumblr-aesthetic-chill-acoustic-classical-lo-fi-playlist-cover-jGlDSM71rNM.jpg",
      title: 'Sword of Destiny',
      trackNumber: 25,
      duration: '2h',
      date: '2024-10-04',
    },
    {
      cover: "https://www.musicinminnesota.com/wp-content/uploads/2022/01/Photo-by-xaviershanley-from-Pexels.jpg",
      title: 'Blade of Shadows',
      trackNumber: 30,
      duration: '3h 15m',
      date: '2024-09-21',
    },
    {
      cover: "https://i.scdn.co/image/ab67616d00001e02883f6655e148514a242bd19a",
      title: 'Eternal Nightfall',
      trackNumber: 18,
      duration: '4h 20m',
      date: '2024-08-15',
    },
    {
      cover: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84b4e230487d48a0a158d0cbca",
      title: 'Chronicles of Time',
      trackNumber: 22,
      duration: '1h 45m',
      date: '2024-07-28',
    },
    {
      cover: "https://external-preview.redd.it/i-made-a-playlist-with-the-best-chill-songs-for-yall-v0-ao4D3-cBPBTTrNHVQd5wf1Rs-Lb8aCqMIHJGZA51MUw.jpg?auto=webp&s=d1ed0dca4ccc0ad8cc8296c0e16ad2372cc71188",
      title: 'Wings of Eternity',
      trackNumber: 12,
      duration: '5h 30m',
      date: '2024-06-10',
    },
  ];

  return (
    <section className="w-full">
      {/* Top Section */}
      <div className="flex h-20 justify-between items-center w-full">
        {/* Search Bar */}
        <div className="flex gap-3 m-5 items-center w-[500px] bg-white bg-opacity-5 rounded-lg p-2">
          <IoIosSearch size={25} />
          <input
            type="text"
            placeholder="Search by artists, songs or albums"
            className="bg-transparent outline-none text-gray-500 placeholder:text-white placeholder:text-opacity-50"
          />
        </div>

        {/* Right Icons */}
        <div className="flex items-center mr-5">
          <div className="text-nowrap p-2 px-3 ml-3 h-fit text-base font-thin text-orange-900 border-2 border-orange-900 rounded-3xl">
            My channels &gt;
          </div>
          <div className="ml-8 flex items-center gap-5">
            <FaChromecast size={35} />
            <img
              className="rounded-full size-10 border-2 border-orange-900 p-1"
              src="https://i.pravatar.cc/300"
              alt="User Avatar"
            />
          </div>
        </div>
      </div>

      {/* Mid Section */}
      <div className="h-[800px] flex flex-col w-full">
        <div className="flex max-h-[70%]">
          <div className="w-full">
            {/* Playlist of the Day & Featured Video */}
            <div className="flex justify-evenly flex-wrap w-full">
              {/* Playlist of the Day */}
              <div
                className="rounded-2xl min-w-60 w-1/5 h-64 flex flex-col p-5"
                style={{
                  background:
                    'linear-gradient(90deg, rgba(65,39,53,0.5) 0%, rgb(37,32,44,1) 100%)',
                }}
              >
                <h6 className="text-sm text-white text-opacity-50">
                  69 tracks • 4 hours 37 minutes
                </h6>
                <h6 className="text-xl text-white">Playlist of the Day</h6>
                <img
                  src="https://cdn.venngage.com/template/thumbnail/small/bf008bfe-9bf6-4511-b795-e86f070bfff5.webp"
                  className="mx-auto mt-auto mb-5 w-32 rounded-md"
                  alt=""
                />
              </div>

              {/* Featured Video */}
              <div className="w-96 h-64 flex flex-col relative">
                <h6 className="z-20 ml-3 mt-auto text-sm text-white text-opacity-50">
                  NoCopyrightSounds • April 2023
                </h6>
                <h6 className="z-20 ml-3 mb-6 font-medium text-white">
                  SadBois & Gabriel Eli - Happier Now
                </h6>
                <div className="z-10 absolute brightness-75 rounded-lg">
                  <div className="bg-gradient-to-t right-0 bottom-0 h-1/3 w-full absolute z-20 from-red-900 rounded-xl to-transparent"></div>
                  <iframe
                    className="rounded-lg h-64 w-96"
                    src="https://www.youtube.com/embed/jTGcGcUquqk"
                    title="SadBois & Gabriel Eli - Happier Now | Electronic Rock | NCS - Copyright Free Music"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex gap-8 border-t mt-3 border-opacity-10 border-white text-white">
              {items.map((item) => (
                <motion.div
                  key={item}
                  onClick={() => handleClick(item)}
                  className={`cursor-pointer pt-2 ${
                    selected === item
                      ? 'text-[#a63f23] border-t-2 border-[rgb(166,63,35)]'
                      : 'text-gray-400 hover:text-white'
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  {item}
                </motion.div>
              ))}
            </div>

            {/* Track List */}
            <div className="flex flex-col w-full">
      {loading ? (
        // Skeleton Loader
        [...Array(5)].map((_, index) => (
          <div key={index} className="flex items-center justify-between w-full py-2 animate-pulse">
            <div className="flex items-center min-w-[250px]">
              <div className="w-10 h-10 bg-gray-700 rounded-lg mr-3"></div>
              <div className="h-4 w-24 bg-gray-700 rounded"></div>
            </div>
            <div className="flex items-center gap-10 min-w-[400px]">
              <div className="h-4 w-32 bg-gray-700 rounded"></div>
              <div className="h-4 w-24 bg-gray-700 rounded"></div>
              <div className="flex items-center gap-4">
                <div className="h-5 w-5 bg-gray-700 rounded-full"></div>
                <div className="h-5 w-5 bg-gray-700 rounded-full"></div>
              </div>
            </div>
          </div>
        ))
      ) : (
        // Actual Track List
        tracks.map((track, index) => (
          <div key={index} className="flex items-center hover:bg-gray-100/10 rounded-md px-2 justify-between w-full py-1">
            <div className="flex items-center min-w-[250px]">
              <img src={track.cover} alt="" className="w-10 h-10 rounded-lg mr-3" />
              <div className="text-white text-sm text-opacity-80">{track.title}</div>
            </div>
            <div className="flex items-center gap-10 min-w-[400px]">
              <div className="text-gray-400 min-w-[150px]">
                {track.trackNumber} tracks • {track.duration}
              </div>
              <div className="text-gray-400 min-w-[150px]">{track.date}</div>
              <div className="flex items-center gap-4">
                <FaPlay className="text-gray-400 cursor-pointer hover:text-white" />
                <BsThreeDotsVertical size={20} className="text-gray-400 cursor-pointer hover:text-white" />
              </div>
            </div>
          </div>
        ))
      )}
    </div>
          
          </div>
          
        <FavSection />
        </div>

      </div>
    </section>
  );
}

export default Midsection;
