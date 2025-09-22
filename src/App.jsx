import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";

function App() {
   return (
      <Routes>
         <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            {/* <Route path="/unidad-funcional" element={<UniFun />} /> */}
            {/* <Route path="/obligaciones" element={<Obligaciones />} /> */}
         </Route>
      </Routes>
   );
}

export default App;
