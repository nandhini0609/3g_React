import { NavbarSection } from "../components/about/NavbarSection"
import { AboutHeaderSection } from "../components/aboutPage/AboutHeaderSection"
import { AboutTrainerSection } from "../components/aboutPage/AboutTrainerSection"
import "../styles/appTokens.css"

export function AboutPage() {
    return (
        <div className="aboutPage">
            <NavbarSection />
            <AboutHeaderSection />
            <AboutTrainerSection />
        </div>
    )
}
