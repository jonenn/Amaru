import { Link } from "react-router-dom";
import Logo from "@/assets/logo.svg";

const LogoSection = () => {
   return (
      <Link to="/" className="flex flex-row md:flex-col md:gap-2 items-center">
         <img
            src="https://res.cloudinary.com/dedihqcsy/image/upload/v1758337461/Group_c1jtpa.png"
            className="md:px-2 h-[27px] md:w-[60px] md:h-auto"
         />
         <img src={Logo} className="px-1 md:w-[50px]" />
      </Link>
   );
};

export default LogoSection;
