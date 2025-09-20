import { navItems } from "../utils/menuConfig";
import NavItem from "./NavItem";

const NavItemsSection = () => {
   return (
      <div className="flex flex-col gap-8 items-center">
         {navItems.map((item, index) => {
            return (
               <NavItem
                  key={index}
                  to={item.path}
                  alt={item.label}
                  iconSrc={item.icon}
               />
            );
         })}
      </div>
   );
};

export default NavItemsSection;
