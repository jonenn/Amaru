import MainProfile from "@/components/HomeComponents/header/MainProfile";
import MainTitle from "@/components/HomeComponents/header/MainTitle";
import ProfilePic from "@/components/HomeComponents/header/ProfilePic";

const Header = () => {
   return (
      <div className="flex justify-between items-center">
         <MainTitle title="Demandas Activas" />
         <div className="flex gap-2 mx-1">
            <MainProfile name="Jonenn Dev" role="Administrador" />
            <ProfilePic image="" />
         </div>
      </div>
   );
};

export { Header };
