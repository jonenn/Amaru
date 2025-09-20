const ActiveProfile = () => {
   return (
      <button className="relative cursor-pointer">
         <img
            src="https://res.cloudinary.com/dedihqcsy/image/upload/v1758378474/image_vjfdhz.png"
            alt=""
            width={40}
         />
         <div className="bg-green-button border-green-main w-4 h-4 rounded-4xl absolute bottom-[-1px] right-[-4px] border-3"></div>
      </button>
   );
};

export default ActiveProfile;
