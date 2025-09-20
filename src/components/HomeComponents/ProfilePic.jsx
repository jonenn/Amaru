const ProfilePic = ({ image }) => {
   return (
      <div className="flex h-[43px] w-[43px] items-center justify-center bg-green-button rounded-lg">
         <img
            src={
               image ||
               `https://res.cloudinary.com/dedihqcsy/image/upload/v1752815474/Jonenn_xo0ndy.gif`
            }
            alt=""
            width={36}
            className="object-contain"
         />
      </div>
   );
};

export default ProfilePic;
