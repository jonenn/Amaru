import Plus from "@/assets/plus.svg";

const PrimaryButton = ({ children }) => {
   return (
      <button className="flex bg-green-button hover:bg-black text-white-secondary justify-center gap-2 rounded-[10px] px-6 py-2 cursor-pointer w-1/2 font-semibold">
         {children}
         <img src={Plus} alt={children} />
      </button>
   );
};

export default PrimaryButton;
