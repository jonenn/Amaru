import Burger from "@/assets/burger-menu.svg";
import LogoSection from "../SideMenu/LogoSection";
import ProfilePic from "../HomeComponents/header/ProfilePic";

const MobileMenu = ({ ...props }) => {
   return (
      <div {...props}>
         <div className="flex gap-3">
            <img src={Burger} alt="Mobile menu" />
            <LogoSection />
         </div>
         <ProfilePic />
      </div>
   );
};

export default MobileMenu;
