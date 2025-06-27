import { Outlet } from "react-router-dom";
import Navbar from "./components/custom/Navbar";
import Footer from "./components/custom/Footer";
import EgeLogo from './components/custom/EgeLogo';

function Layout() {
  return (
    <>
      <Navbar />
      <EgeLogo />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;