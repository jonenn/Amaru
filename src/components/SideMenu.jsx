import Logo from "../assets/logo.svg";
import NavItem from "./NavItem";
import DashboardIcon from "../assets/dashboard.svg";
import UnifunIcon from "../assets/unifun.svg";
import ObligacionesIcon from "../assets/obligaciones.svg";
import NormatividadIcon from "../assets/normatividad.svg";
import CalendarioIcon from "../assets/calendario.svg";
import ReportesIcon from "../assets/reportes.svg";
import AdminIcon from "../assets/admin.svg";

const navItems = [
   { label: "Dashboard", path: "/", icon: DashboardIcon },
   { label: "Unidad Funcional", path: "/unidad-funcional", icon: UnifunIcon },
   { label: "Mis Obligaciones", path: "/obligaciones", icon: ObligacionesIcon },
   {
      label: "Normatividad Ambiental",
      path: "/normatividad-ambiental",
      icon: NormatividadIcon,
   },
   { label: "Calendario", path: "/calendario", icon: CalendarioIcon },
   { label: "Reportes", path: "/reportes", icon: ReportesIcon },
   { label: "Admin", path: "/admin", icon: AdminIcon },
];

const SideMenu = () => {
   return (
      <nav className="flex flex-col gap-2 max-w-[66px] px-1 pt-3 pb-5">
         <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-2">
               <img
                  src="https://res.cloudinary.com/dedihqcsy/image/upload/v1758337461/Group_c1jtpa.png"
                  className="px-2"
               />
               <img src={Logo} className="px-1" />
            </div>
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
         </div>
      </nav>
   );
};

export default SideMenu;
