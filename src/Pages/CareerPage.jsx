import { NavbarSection } from "../components/about/NavbarSection"
import { CareerHeaderSection } from "../components/carreer/CareerHeaderSection"
import { CareerPositionsSection } from "../components/carreer/CareerPositionsSection"
import { CareerApplySection } from "../components/carreer/CareerApplySection"
import { ServicesFooterSection } from "../components/services/ServicesFooterSection"
import "./CareerPage.css"

export function CareerPage() {
    return (
        <div className="careerPage">
            <NavbarSection />
            <CareerHeaderSection />
            <CareerPositionsSection />
            <CareerApplySection />
            <ServicesFooterSection />
        </div>
    )
}