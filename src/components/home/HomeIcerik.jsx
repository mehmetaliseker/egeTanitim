import HeroSection from './HeroSection';
import SecondSection from './SecondSection';
import AboutUs from './AboutUs';
import Cards from './Cards';
import Tarihce from './Tarihce';
import Istatistik from './Istatistik';
import AnimatedSection from '../custom/AnimatedSection';
import GeriBildirim from './GeriBildirim';
import YetmisinciYil from './yetmisinciYil';

function HomeIcerik() {
    return (
        <>
            <YetmisinciYil />

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

            <AnimatedSection>
                <GeriBildirim />
            </AnimatedSection>
        </>
    )
}

export default HomeIcerik;