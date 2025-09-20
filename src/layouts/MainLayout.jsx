import { Outlet } from 'react-router-dom';
import SideMenu from '@/components/SideMenu/SideMenu';

const MainLayout = () => {
   return (
      <div className="flex">
         <SideMenu />
         <div className="w-full bg-white-main md:rounded-l-2xl min-h-screen py-11 px-7">
            <Outlet />
         </div>
      </div>
   );
};

export default MainLayout;
