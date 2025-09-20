import { Link } from "react-router-dom";
import Logo from "@/assets/logo.svg";

const LogoSection = () => {
   return (
      <Link to="/" className="flex flex-col gap-2 items-center">
         <img
            src="https://res.cloudinary.com/dedihqcsy/image/upload/v1758337461/Group_c1jtpa.png"
            className="px-2"
            width={60}
         />
         <img src={Logo} className="px-1" />
      </Link>
   );
};

export default LogoSection;
