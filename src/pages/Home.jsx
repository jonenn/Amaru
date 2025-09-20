import MainProfile from '@/components/HomeComponents/header/MainProfile';
import MainTitle from '@/components/HomeComponents/header/MainTitle';
import ProfilePic from '@/components/HomeComponents/header/ProfilePic';
import { Searchbar } from '@/components/HomeComponents/Searchbar/Searchbar';

const Home = () => {
   return (
      <div>
         <div className="flex justify-between items-center">
            <MainTitle title="Demandas Activas" />
            <div className="flex gap-2 mx-1">
               <MainProfile name="Jonenn Dev" role="Administrador" />
               <ProfilePic image="" />
            </div>
         </div>
         <Searchbar />
      </div>
   );
};

export default Home;
