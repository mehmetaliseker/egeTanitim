import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import SecondSection from '../components/SecondSection';
import AboutUs from '../components/AboutUs';
import Cards from '../components/Cards';
import Tarihce from '../components/Tarihce';
import Istatistik from '../components/Istatistik';
import Footer from '../components/Footer';
import EgeLogo from '../components/EgeLogo';
import AnimatedSection from '../components/AnimatedSection'; 
import YetmisinciYil from '../components/yetmisinciYil';


function Home() {
  return (
    <>
      <EgeLogo />

      <YetmisinciYil />

      <Navbar />
      
      <HeroSection />

      <AnimatedSection>
        <SecondSection />
      </AnimatedSection>

      <AnimatedSection>
        <AboutUs />
      </AnimatedSection>

      <AnimatedSection>
        <Cards />
      </AnimatedSection>

      <AnimatedSection>
        <Tarihce />
      </AnimatedSection>

      <AnimatedSection>
        <Istatistik />
      </AnimatedSection>

      <Footer />
    </>
  );
}

export default Home;
