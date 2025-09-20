import { NavLink } from "react-router-dom";

const NavItem = ({ to, iconSrc, alt, className }) => {
   return (
      <NavLink to={to} className={className}>
         <img src={iconSrc} alt={alt} />
      </NavLink>
   );
};

export default NavItem;
