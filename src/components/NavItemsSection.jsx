import { navItems } from "../utils/menuConfig";
import NavItem from "./NavItem";

const NavItemsSection = () => {
   return (
      <div className="flex flex-col gap-4 items-center">
         {navItems.map((item, index) => {
            return (
               <NavItem
                  key={index}
                  to={item.path}
                  alt={item.label}
                  iconSrc={item.icon}
                  className={({ isActive }) =>
                     `flex items-center px-4 py-2 rounded-[10px] hover:bg-green-hover ${
                        isActive ? "bg-green-active" : ""
                     }`
                  }
               />
            );
         })}
      </div>
   );
};

export default NavItemsSection;
