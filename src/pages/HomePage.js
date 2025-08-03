import HeroSection from '../components/HeroSection'
import MenuHighlights from '../components/MenuHighlights'
import TestimonialsSection from '../components/TestimonialsSection'
import AboutSection from '../components/AboutSection'

const HomePage = () => {
    return (
        <main className="main">
            <HeroSection />
            <MenuHighlights />
            <TestimonialsSection />
            <AboutSection />
        </main>
    )
}

export default HomePage
