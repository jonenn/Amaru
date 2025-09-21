import FileIcon from "@/assets/file.svg";
import DownloadIcon from "@/assets/download.svg";

const Files = ({ documents }) => {
   return (
      <div className="flex flex-col gap-2">
         {documents.map((doc) => (
            <button
               key={doc.id}
               className="flex bg-green-download w-full justify-between px-3 py-1.5 cursor-pointer items-center rounded-lg"
               onClick={() =>
                  console.log("Here you'll be able to download your file")
               }
            >
               <span className="flex gap-2 items-center">
                  <img src={FileIcon} alt="File icon" />
                  <p className="tracking-tightest">
                     {doc.name} — {doc.type}
                  </p>
               </span>
               <img src={DownloadIcon} alt="Download icon" />
            </button>
         ))}
      </div>
   );
};

export default Files;
