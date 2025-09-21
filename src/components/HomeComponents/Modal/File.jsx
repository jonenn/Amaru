import FileIcon from "@/assets/file.svg";
import DownloadIcon from "@/assets/download.svg";

const File = ({ documents }) => {
   return documents.map((doc) => (
      <button
         className="flex bg-green-download w-full justify-between px-3 py-1.5 cursor-pointer items-center"
         onClick={() =>
            console.log("Here you'll be able to download your file")
         }
         key={doc.id}
      >
         <span className="flex gap-2">
            <img src={FileIcon} alt="File icon" />
            <p className="tracking-tightest">
               {doc.name} — {doc.type}
            </p>
         </span>
         <img src={DownloadIcon} alt="Download icon" />
      </button>
   ));
};

export default File;
