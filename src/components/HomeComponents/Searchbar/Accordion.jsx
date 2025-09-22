import Arrow from "@/assets/arrow.svg";

const Accordion = ({ title, children, isOpen, onToggle }) => {
   return (
      <>
         <div
            className="flex border-b-1 border-black-divisor w-full justify-between cursor-pointer px-4 py-3"
            onClick={onToggle}
         >
            <div className="relative tracking-tightest">{title}</div>
            <img
               src={Arrow}
               alt=""
               className={`transition-transform duration-300 ${
                  isOpen ? "rotate-180" : "rotate-0"
               }`}
            />
         </div>
         <div
            className={`flex transition-[max-height] duration-300 ease-in-out min-h-16 h-min overflow-scroll ${
               isOpen ? "h-auto m-2 max-h-[70vh]" : "h-0 m-0 hidden"
            }`}
         >
            {children}
         </div>
      </>
   );
};

export default Accordion;
