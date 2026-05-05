import { NavbarSection } from "../components/about/NavbarSection"
import { ServicesHeaderSection } from "../components/services/ServicesHeaderSection"
import { ServicesStrengthSection } from "../components/services/ServicesStrengthSection"
import "../styles/appTokens.css"
import "./ServicesPage.css"

export function ServicesPage() {
    return (
        <div className="servicesPage">
            <NavbarSection />
            <ServicesHeaderSection />
            <ServicesStrengthSection />
        </div>
    )
}
