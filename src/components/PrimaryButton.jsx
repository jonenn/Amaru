import Plus from "@/assets/plus.svg";

const PrimaryButton = ({ children, plus, className, ...props }) => {
   return (
      <button
         className={`${className} group flex items-center justify-center gap-2
            bg-green-button hover:bg-black text-white-secondary
            rounded-[10px] px-6 py-2 cursor-pointer font-semibold
            transition-transform duration-300 ease-out
         `}
         {...props}
      >
         {children}
         {plus && (
            <img
               src={Plus}
               alt={children}
               className="
            w-5 h-5
            transition-transform duration-300 ease-out
            group-hover:rotate-90
            "
            />
         )}
      </button>
   );
};

export default PrimaryButton;
