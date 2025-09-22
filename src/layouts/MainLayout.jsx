import { Outlet } from "react-router-dom";
import SideMenu from "@/components/SideMenu/SideMenu";
import MobileMenu from "@/components/MobileMenu/MobileMenu";

const MainLayout = () => {
   return (
      <div className="flex flex-col md:flex-row relative">
         <SideMenu className="hidden md:flex md:flex-col" />
         <MobileMenu className="flex md:hidden py-4.5 px-3 gap-3 justify-between" />
         <div className="w-full bg-white-main md:rounded-l-2xl min-h-screen">
            <Outlet />
         </div>
      </div>
   );
};

export default MainLayout;
