import { PiCalendarBlank } from 'react-icons/pi';
const Navbar = () => {
  return (
    <div className="w-full p-5 shadow-md flex items-center justify-between">
      <p className="font-semibold text-lg">Welcome back, David👋👋🏾</p>
      <div className="flex items-center gap-3">
        <div className="flex gap-1 items-center text-lg">
          <PiCalendarBlank />
          <span className="text-gray-400 text-sm tracking-tighter">
            14 May 2023
          </span>
        </div>
        <div className="w-7 h-7 rounded-full bg-slate-900"></div>
      </div>
    </div>
  );
};

export default Navbar;
