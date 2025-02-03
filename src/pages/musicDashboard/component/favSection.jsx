import { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { MdArrowForwardIos } from "react-icons/md";

function FavSection() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // 1s loading state
    return () => clearTimeout(timer);
  }, []);

  const favoriteArtists = [
    { id: 1, name: "Ice Nine Kills", subscribers: "432k", img: "https://pixaab.com/wp-content/uploads/2023/08/for-real-album-cover-art-psd1-templates-pixaab-Large.jpeg" },
    { id: 2, name: "Bloodywood", subscribers: "31k", img: "https://i.scdn.co/image/ab67616d00001e0267cf92b139a3d7ea71a54118" },
    { id: 3, name: "Bad Omens", subscribers: "183k", img: "https://i.namu.wiki/i/8mnP9gM3Wx2DZ4E_LKe_3Ux4Ul4NgXbweG0g1EaJoZeJO7m-W3scJ0dWxjku2X7Ia-9wK_E-_G246VNHWqYaZA.webp" },
    { id: 4, name: "Lorna Shore", subscribers: "108k", img: "https://cdns-images.dzcdn.net/images/cover/a8723e5f960532cf3f4491f6e9aa3b41/0x1900-000000-80-0-0.jpg" },
    { id: 5, name: "Anniskokay", subscribers: "79k", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt6sqorNDfKhAQM1KJHb9vdPriZ3UafojQDQ&s" },
  ];

  const newReleases = [
    { id: 1, title: "Calamity", artist: "Amisokay", img: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da8430e0999f7f2bd261980eac13" },
    { id: 2, title: "Last Resort", artist: "Reimagined", img: "https://i.scdn.co/image/ab67616d00001e02df18d3c75fb64b5060f1e690" },
  ];

  const listenMoreOften = [
    { id: 1, title: "Blood Orange", artist: "Berried Alive", img: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b7fd92108782021.5fc5820ec90ba.png" },
    { id: 2, title: "Soul Decay", artist: "Make Them Suffer", img: "https://i.scdn.co/image/ab67616d00001e02e4179b3fb74beaf0cdfa7a13" },
  ];

  return (
    <div className="min-w-72 ml-3 flex flex-col gap-2 px-4">
      {loading ? (
        // Skeleton Loading
        <div className="animate-pulse">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-gray-700 rounded"></div>
              <div className="flex flex-col gap-1">
                <div className="h-4 w-28 bg-gray-700 rounded"></div>
                <div className="h-3 w-20 bg-gray-700 rounded"></div>
              </div>
            </div>
          ))}
          
          {/* Skeleton for Listen More Often */}
          <div className="mb-4">
            {[...Array(2)].map((_, index) => (
              <div key={index} className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gray-700 rounded"></div>
                <div className="flex flex-col gap-1 w-full">
                  <div className="h-4 w-32 bg-gray-700 rounded"></div>
                  <div className="h-3 w-24 bg-gray-700 rounded"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Skeleton for Favorite Artists */}
          <div>
            {[...Array(5)].map((_, index) => (
              <div key={index} className="flex items-center gap-3 mb-3 hover:bg-gray-700 p-1 rounded-lg">
                <div className="w-12 h-12 bg-gray-700 rounded"></div>
                <div className="flex flex-col gap-1 w-full">
                  <div className="h-4 w-32 bg-gray-700 rounded"></div>
                  <div className="h-3 w-24 bg-gray-700 rounded"></div>
                </div>
                <div className="ml-auto w-6 h-6 bg-gray-700 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="animate-fade-in">
          {/* New Releases */}
          <div className="text-white mb-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold mb-2 opacity-30">New Releases</h3>
              <h4 className="text-xs font-thin mb-2 text-orange-900">See all</h4>
            </div>
            {newReleases.map((release) => (
              <div key={release.id} className="flex items-center gap-3 mb-3">
                <img src={release.img} alt={release.title} className="w-12 h-12 rounded" />
                <div>
                  <div className="text-white font-bold">{release.title}</div>
                  <div className="text-gray-400 text-sm">{release.artist}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Listen More Often */}
          <div className="text-white mb-4">
            <h3 className="text-lg font-bold mb-2 opacity-30">Listen More Often</h3>
            {listenMoreOften.map((track) => (
              <div key={track.id} className="flex items-center hover:bg-gray-700 p-1 rounded-lg gap-3 mb-3">
                <img src={track.img} alt={track.title} className="w-12 h-12 rounded" />
                <div className="flex justify-between w-full">
                  <div>
                    <div className="text-white font-bold">{track.title}</div>
                    <div className="text-gray-400 text-sm">{track.artist}</div>
                  </div>
                  <div className="flex gap-4 items-center mr-5">
                    <FaHeart color="red" />
                    <HiDotsVertical size={18} opacity={0.6} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Favorite Artists */}
          <div className="text-white">
            <div className="flex justify-between items-center w-full">
              <h3 className="text-lg font-bold mb-2 opacity-30">Favorite Artists</h3>
              <h4 className="text-xs font-thin mb-2 text-orange-900">See all</h4>
            </div>
            {favoriteArtists.map((artist, index) => (
              <div key={artist.id} className="flex items-center gap-3 mb-3 hover:bg-gray-700 p-1 rounded-lg">
                <span className="text-gray-400 text-5xl font-bold w-5">{index + 1}</span>
                <img src={artist.img} alt={artist.name} className="w-10 h-10 rounded-md" />
                <div>
                  <div className="text-white font-bold">{artist.name}</div>
                  <div className="text-gray-400 text-sm">{artist.subscribers} subscribers</div>
                </div>
                <div className="ml-auto">
                  <MdArrowForwardIos />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default FavSection;
