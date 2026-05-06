import { NavbarSection } from "../components/about/NavbarSection"
import { FranchiseHeaderSection } from "../components/franchise/FranchiseHeaderSection"
import { ServicesFooterSection } from "../components/services/ServicesFooterSection"
import "./FranchisePage.css"

export function FranchisePage() {
    return (
        <div className="franchisePage">
            <NavbarSection />
            <FranchiseHeaderSection />
            <ServicesFooterSection />
        </div>
    )
}