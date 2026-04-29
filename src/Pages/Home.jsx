import { AboutSection } from "../components/about/AboutSection"
import { HeroSection } from "../components/about/HeroSection"
import { NavbarSection } from "../components/about/NavbarSection"
import { ResultsSection } from "../components/about/ResultsSection"
import { ServicesSection } from "../components/about/ServicesSection"
import { TestimonialsSection } from "../components/about/TestimonialsSection"
import { PlansSection } from "../components/about/PlansSection"
import "./Home.css"

export function Home() {
    return (
        <div className="homePage">
            <NavbarSection />
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <ResultsSection />
            <TestimonialsSection />
            <PlansSection />
        </div>
    )
}