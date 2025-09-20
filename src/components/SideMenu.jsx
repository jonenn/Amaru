import LogoSection from "./LogoSection";
import NavItemsSection from "./NavItemsSection";
import ActiveProfile from "./ActiveProfile";
import LogOutButton from "./LogOutButton";

const SideMenu = () => {
   return (
      <nav className="flex flex-col gap-2 w-[63px] px-1 pt-3 pb-5 box-content justify-between items-center">
         <div className="flex flex-col gap-16 w-full">
            <LogoSection />
            <NavItemsSection />
         </div>
         <div className="flex flex-col items-center gap-5">
            <ActiveProfile />
            <LogOutButton />
         </div>
      </nav>
   );
};

export default SideMenu;
