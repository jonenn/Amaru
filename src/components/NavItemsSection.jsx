import { navItems } from "../utils/menuConfig";
import NavItem from "./NavItem";
import { Tooltip } from "react-tooltip";

const NavItemsSection = () => {
   return (
      <div className="flex flex-col gap-4 items-center">
         {navItems.map((item, index) => (
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
               data-tooltip-id="nav-tooltip"
               data-tooltip-content={item.label}
               data-tooltip-place="right"
            />
         ))}
         <Tooltip id="nav-tooltip" className="max-w-min text-center" />
      </div>
   );
};

export default NavItemsSection;
