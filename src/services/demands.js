const API = import.meta.env.VITE_API_LINK || "http://localhost:3001/";

const getDemands = async (route) => {
   try {
      const response = await fetch(new URL(route, API));
      const data = await response.json();
      // console.log(data);
      return data;
   } catch (error) {
      console.error(err);
   }
};

export default getDemands;
