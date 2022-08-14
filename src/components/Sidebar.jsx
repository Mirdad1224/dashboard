import LogoImage from "../assets/images/logo.svg";
import SidebarItem from "./SidebarItem";
import { MdHomeFilled } from "react-icons/md";
import { BiTable } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { SiCodefactor } from "react-icons/si";
import { BsBoxSeam } from "react-icons/bs";

const Sidebar = ({ isOpen, onSidebar }) => {
  return (
    <aside
      className={`bg-[#080860] z-20 w-4/5 md:w-3/5 lg:w-2/5 xl:w-1/5 h-screen text-white p-8 fixed right-0 ${
        isOpen ? "" : "hidden"
      } `}
    >
      <div className="flex items-center justify-center gap-4 border-b border-white py-2">
        <img src={LogoImage} alt="logo" className="bg-white rounded-lg" />
        <h4 className="text-lg">پنل مدیریت</h4>
      </div>
      <div className="mt-10">
        <SidebarItem
          onClick={() => onSidebar()}
          title="داشبورد"
          icon={<MdHomeFilled />}
          href="/"
        />
        <SidebarItem
          onClick={() => onSidebar()}
          title="جداول"
          icon={<BiTable />}
          href="/tables"
        />
        <SidebarItem
          onClick={() => onSidebar()}
          title="محصولات"
          icon={<CgProfile />}
          href="/products"
        />
        <SidebarItem
          onClick={() => onSidebar()}
          title="صورت حساب"
          icon={<SiCodefactor />}
          href="/factor"
        />
        <SidebarItem
          onClick={() => onSidebar()}
          title="پروفایل"
          icon={<BsBoxSeam />}
          href="/profile"
        />
      </div>
    </aside>
  );
};

export default Sidebar;
