const MainProfile = ({ name, role }) => {
   return (
      <div className="flex flex-col items-end gap-2 justify-center">
         <h4 className="flex text-base font-semibold tracking-tightest leading-4 text-black-main">
            {name}
         </h4>
         <p className="font-normal text-xs text-black-secondary tracking-tightest">
            {role}
         </p>
      </div>
   );
};

export default MainProfile;
