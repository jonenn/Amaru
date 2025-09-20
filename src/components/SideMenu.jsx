import LogoSection from "./LogoSection";
import NavItemsSection from "./NavItemsSection";

const SideMenu = () => {
   return (
      <nav className="flex flex-col gap-2 w-[63px] px-1 pt-3 pb-5 box-content">
         <div className="flex flex-col gap-16 w-full">
            <LogoSection />
            <NavItemsSection />
         </div>
      </nav>
   );
};

export default SideMenu;
