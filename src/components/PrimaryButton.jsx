import Plus from "@/assets/plus.svg";

const PrimaryButton = ({
   children,
   plus,
   className = "",
   disabled,
   ...props
}) => {
   return (
      <button
         disabled={disabled}
         className={`
            group flex items-center justify-center gap-2
            rounded-[10px] px-6 py-2 font-semibold
            transition-transform duration-300 ease-out
            ${
               disabled
                  ? "bg-gray-disabled text-white cursor-not-allowed"
                  : "bg-green-button hover:bg-black text-white-secondary cursor-pointer"
            }
            ${className}
         `}
         {...props}
      >
         {children}
         {plus && (
            <img
               src={Plus}
               alt={children}
               className="w-5 h-5 transition-transform duration-300 ease-out group-hover:rotate-90"
            />
         )}
      </button>
   );
};

export default PrimaryButton;
