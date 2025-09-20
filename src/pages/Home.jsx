const Home = () => {
   return (
      <div className="flex justify-between items-center">
         <h1 className="text-2xl font-bold tracking-tightest leading-normal text-black-main">
            Demandas Activas
         </h1>
         <div className="flex gap-2">
            <div className="flex flex-col items-end gap-2 justify-center">
               <h4 className="flex text-base font-semibold tracking-tightest leading-4 text-black-main">
                  Jonenn Dev
               </h4>
               <p className="font-normal text-xs text-black-secondary tracking-tightest">
                  Administrador
               </p>
            </div>
            <div className="flex h-[43px] w-[43px] items-center justify-center bg-green-button rounded-lg">
               <img
                  src="https://res.cloudinary.com/dedihqcsy/image/upload/v1752815474/Jonenn_xo0ndy.gif"
                  alt=""
                  width={36}
                  className="object-contain"
               />
            </div>
         </div>
      </div>
   );
};

export default Home;
