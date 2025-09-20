import { NavLink } from "react-router-dom";

const NavItem = ({ to, iconSrc, alt, className, ...props }) => {
   return (
      <NavLink to={to} className={className} {...props}>
         <img src={iconSrc} alt={alt} />
      </NavLink>
   );
};

export default NavItem;
