import LogoSection from "./LogoSection";
import NavItemsSection from "./NavItemsSection";
import LogOut from "../assets/log-out.svg";

const SideMenu = () => {
   return (
      <nav className="flex flex-col gap-2 w-[63px] px-1 pt-3 pb-5 box-content justify-between items-center">
         <div className="flex flex-col gap-16 w-full">
            <LogoSection />
            <NavItemsSection />
         </div>
         <div className="flex flex-col items-center gap-5">
            <button className="relative cursor-pointer">
               <img
                  src="https://res.cloudinary.com/dedihqcsy/image/upload/v1758378474/image_vjfdhz.png"
                  alt=""
                  width={40}
               />
               <div className="bg-green-button border-green-main w-4 h-4 rounded-4xl absolute bottom-[-1px] right-[-4px] border-3"></div>
            </button>
            <button className="p-2 bg-green-hover rounded-2xl">
               <div className="bg-red-main p-1 rounded-lg">
                  <img src={LogOut} alt="log out icon" />
               </div>
            </button>
         </div>
      </nav>
   );
};

export default SideMenu;
