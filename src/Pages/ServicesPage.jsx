import { NavbarSection } from "../components/about/NavbarSection"
import { ServicesHeaderSection } from "../components/services/ServicesHeaderSection"
import "../styles/appTokens.css"
import "./ServicesPage.css"

export function ServicesPage() {
    return (
        <div className="servicesPage">
            <NavbarSection />
            <ServicesHeaderSection />
        </div>
    )
}
