import { NavbarSection } from "../components/about/NavbarSection"
import { FranchiseHeaderSection } from "../components/franchise/FranchiseHeaderSection"
import { FranchiseIntroSection } from "../components/franchise/FranchiseIntroSection"
import { ServicesFooterSection } from "../components/services/ServicesFooterSection"
import "./FranchisePage.css"

export function FranchisePage() {
    return (
        <div className="franchisePage">
            <NavbarSection />
            <FranchiseHeaderSection />
            <FranchiseIntroSection />
            <ServicesFooterSection />
        </div>
    )
}