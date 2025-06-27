import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Myo from "./pages/Myo";
import Fakulte from "./pages/Fakulte";
import Bolum from "./pages/Bolum";
import LandingPage from "./pages/LandingPage";
import Layout from "./Layout";

function App() {
  return (
    <Routes>
      <Route index element={<LandingPage />} />
      
      <Route path="/" element={<Layout />}> 
        <Route path="home" element={<Home />} />
        <Route path="myo" element={<Myo />} />
        <Route path="fakulte" element={<Fakulte />} />
        <Route path="bolum" element={<Bolum />} />
      </Route>

    </Routes>
  );
}

export default App;
