import ProfileImage from "../assets/images/profile.jpg";
import { FiBell } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = ({onSidebar}) => {
  return (
    <header className="flex items-center justify-between h-20 px-10 mb-20 bg-custom text-white">
      <div className="flex gap-2 items-center">
        <GiHamburgerMenu className="text-2xl ml-3 cursor-pointer" onClick={() => onSidebar()} />
        <img src={ProfileImage} className="w-12 rounded-full" alt="profile" />
        <div className="flex flex-col items-center justify-center ">
          <span>استیو جابز</span>
          <span className="text-gray-400">مدیر عامل</span>
        </div>
      </div>
      <div className="flex items-center justify-between gap-10">
        <div className="bg-white p-1 rounded-xl hidden md:block">
          <input type="text" className="border-0 outline-0 text-gray-500 px-2" placeholder="جستجو..." />
          <button className="bg-yellow-600 px-8 duration-300 hover:bg-yellow-900 py-2 rounded-lg cursor-pointer">بگرد</button>
        </div>
        <FiBell className="cursor-pointer text-2xl" />
      </div>
    </header>
  );
};

export default Header;
