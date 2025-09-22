import LogoSection from "@/components/SideMenu/LogoSection";
import NavItemsSection from "@/components/SideMenu/NavItemsSection";
import ActiveProfile from "@/components/SideMenu/ActiveProfile";
import LogOutButton from "@/components/SideMenu/LogOutButton";

const SideMenu = ({ className }) => {
   return (
      <nav
         className={`${className} flex flex-col gap-2 max-w-[63px] px-1 pt-3 pb-5 justify-between items-center`}
      >
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
