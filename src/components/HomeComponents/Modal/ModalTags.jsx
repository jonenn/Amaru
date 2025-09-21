const ModalTags = ({ tags }) => {
   return (
      <div className="flex flex-wrap gap-2.5">
         {tags.map((tag, i) => (
            <span
               key={i}
               className="py-1 px-2 bg-green-secondary rounded-md text-sm"
            >
               {tag}
            </span>
         ))}
      </div>
   );
};

export { ModalTags };
