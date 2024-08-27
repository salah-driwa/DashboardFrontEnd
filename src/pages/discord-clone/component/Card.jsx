/* eslint-disable no-unused-vars */
import ReactDOM from 'react-dom';



// eslint-disable-next-line react-refresh/only-export-components
function HoverCard ({ user, position })  {
  return ReactDOM.createPortal(
    <div
      style={{ top: position.top, left: position.left }}
      className="absolute z-50 w-64 p-4 bg-DbgColor text-white rounded-lg shadow-lg"
    >
      <img
        src={user.img}
        alt={user.name}
        className="size-14 border-2 rounded-full mb-2"
      />
      <p className="font-semibold">{user.name}</p>
      <p className="text-xs text-gray-400 mb-2">{user.status}</p>
      <a href={user.link} className="text-blue-400 text-sm underline mb-2">
        {user.link}
      </a>
      <div className="flex gap-2 mt-2">
        {user.badges.map((badge, index) => (
          <span key={index} className="text-xs bg-gray-600 px-2 py-1 rounded-lg">
            {badge}
          </span>
        ))}
      </div>
    </div>,
    document.body // Render the hover card outside the scroll container
  );
}
export default HoverCard