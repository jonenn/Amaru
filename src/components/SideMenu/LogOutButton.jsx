import LogOut from "@/assets/log-out.svg";

const LogOutButton = () => {
   return (
      <button className="p-2 bg-green-hover rounded-2xl cursor-pointer">
         <div className="bg-red-main p-1 rounded-lg">
            <img src={LogOut} alt="log out icon" />
         </div>
      </button>
   );
};

export default LogOutButton;
