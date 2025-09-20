import SideMenu from "../components/SideMenu";

const MainLayout = () => {
   return (
      <div className="flex">
         <SideMenu />
         <main className="w-full bg-white-main md:rounded-l-2xl min-h-screen py-11 px-7">
            Hi!
         </main>
      </div>
   );
};

export default MainLayout;
