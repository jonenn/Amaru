import GoBack from "@/assets/goback-arrow.svg";

const SecondaryButton = ({ children, ...props }) => {
   return (
      <button
         className="
            group flex items-center justify-center 
            border border-green-active text-green-active 
            rounded-[10px] px-6 py-2 cursor-pointer font-semibold
            hover:bg-green-hover-2
            transition-all duration-300 ease-out hover:gap-2
         "
         {...props}
      >
         <img
            src={GoBack}
            alt="Go back"
            className="
    opacity-0 max-w-0
    group-hover:opacity-100 group-hover:max-w-[24px]
    transition-all duration-300 ease-out
  "
         />
         {children}
      </button>
   );
};

export default SecondaryButton;
