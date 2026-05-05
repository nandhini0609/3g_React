import { NavbarSection } from "../components/about/NavbarSection"
import { ServicesHeaderSection } from "../components/services/ServicesHeaderSection"
import { ServicesStrengthSection } from "../components/services/ServicesStrengthSection"
import { ServicesWeightLossSection } from "../components/services/ServicesWeightLossSection"
import { ServicesFunctionalSection } from "../components/services/ServicesFunctionalSection"
import { ServicesNutritionSection } from "../components/services/ServicesNutritionSection"
import { ServicesFaqSection } from "../components/services/ServicesFaqSection"
import { ServicesFooterSection } from "../components/services/ServicesFooterSection"
import "../styles/appTokens.css"
import "./ServicesPage.css"

export function ServicesPage() {
    return (
        <div className="servicesPage">
            <NavbarSection />
            <ServicesHeaderSection />
            <ServicesStrengthSection />
            <ServicesWeightLossSection />
            <ServicesFunctionalSection />
            <ServicesNutritionSection />
            <ServicesFaqSection />
            <ServicesFooterSection />
        </div>
    )
}
