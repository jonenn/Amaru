import { NavLink } from "react-router-dom";

const NavItem = ({ to, iconSrc, alt }) => {
   return (
      <NavLink to={to}>
         <img src={iconSrc} alt={alt} />
      </NavLink>
   );
};

export default NavItem;
