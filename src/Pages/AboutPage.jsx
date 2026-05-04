import { NavbarSection } from "../components/about/NavbarSection"
import { AboutHeaderSection } from "../components/aboutPage/AboutHeaderSection"
import { AboutTrainerSection } from "../components/aboutPage/AboutTrainerSection"
import { AboutCardsSection } from "../components/aboutPage/AboutCardsSection"
import { AboutChooseSection } from "../components/aboutPage/AboutChooseSection"
import { AboutCoachesSection } from "../components/aboutPage/AboutCoachesSection"
import { AboutInfrastructureSection } from "../components/aboutPage/AboutInfrastructureSection"
import { AboutFooterSection } from "../components/aboutPage/AboutFooterSection"
import "../styles/appTokens.css"

export function AboutPage() {
    return (
        <div className="aboutPage">
            <NavbarSection />
            <AboutHeaderSection />
            <AboutTrainerSection />
            <AboutCardsSection />
            <AboutChooseSection />
            <AboutCoachesSection />
            <AboutInfrastructureSection />
            <AboutFooterSection />
        </div>
    )
}
