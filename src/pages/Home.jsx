import { Card } from '@/components/HomeComponents/Card/Card';
import { Header } from '@/components/HomeComponents/header/Header';
import { Searchbar } from '@/components/HomeComponents/Searchbar/Searchbar';

const Home = () => {
   return (
      <main className="flex flex-col gap-1.5">
         <Header />
         <Searchbar />
         <div class="grid grid-cols-4 gap-3">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
         </div>
      </main>
   );
};

export default Home;
