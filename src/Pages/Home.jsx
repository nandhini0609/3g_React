import { AboutSection } from "../components/about/AboutSection"
import { HeroSection } from "../components/about/HeroSection"
import { NavbarSection } from "../components/about/NavbarSection"
import "./Home.css"

export function Home() {
    return (
        <div className="homePage">
            <NavbarSection />
            <HeroSection />
            <AboutSection />
        </div>
    )
}