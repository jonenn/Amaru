import MainProfile from "@/components/HomeComponents/MainProfile";
import MainTitle from "@/components/HomeComponents/MainTitle";
import ProfilePic from "@/components/HomeComponents/ProfilePic";

const Home = () => {
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

export default Home;
