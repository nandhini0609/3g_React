import { AboutSection } from "../components/about/AboutSection"
import { HeroSection } from "../components/about/HeroSection"
import { NavbarSection } from "../components/about/NavbarSection"
import { ServicesSection } from "../components/about/ServicesSection"
import "./Home.css"

export function Home() {
    return (
        <div className="homePage">
            <NavbarSection />
            <HeroSection />
            <AboutSection />
            <ServicesSection />
        </div>
    )
}