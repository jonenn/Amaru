import DashboardIcon from "../assets/dashboard.svg";
import UnifunIcon from "../assets/unifun.svg";
import ObligacionesIcon from "../assets/obligaciones.svg";
import NormatividadIcon from "../assets/normatividad.svg";
import CalendarioIcon from "../assets/calendario.svg";
import ReportesIcon from "../assets/reportes.svg";
import AdminIcon from "../assets/admin.svg";

export const navItems = [
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
