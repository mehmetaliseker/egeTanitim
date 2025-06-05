import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import SecondSection from '../components/SecondSection';
import AboutUs from '../components/AboutUs';
import Cards from '../components/Cards';
import Tarihce from '../components/Tarihce';
import Istatistik from '../components/Istatistik';
import Footer from '../components/Footer';
import EgeLogo from '../components/EgeLogo';

function Home() {
  return (
    <>
      <EgeLogo />

      <Navbar />

      <HeroSection />

      <SecondSection />

      <AboutUs />

      <Cards />

      <Tarihce />

      <Istatistik />
      
      <Footer />
      
    </>
  );
}

export default Home;