import { NavbarSection } from "../components/about/NavbarSection"
import { FranchiseHeaderSection } from "../components/franchise/FranchiseHeaderSection"
import { FranchiseIntroSection } from "../components/franchise/FranchiseIntroSection"
import { FranchiseSupportSection } from "../components/franchise/FranchiseSupportSection"
import { FranchiseRequirementsSection } from "../components/franchise/FranchiseRequirementsSection"
import { FranchiseProcessSection } from "../components/franchise/FranchiseProcessSection"
import { FranchiseContactSection } from "../components/franchise/FranchiseContactSection"
import { ServicesFooterSection } from "../components/services/ServicesFooterSection"
import "./FranchisePage.css"

export function FranchisePage() {
    return (
        <div className="franchisePage">
            <NavbarSection />
            <FranchiseHeaderSection />
            <FranchiseIntroSection />
            <FranchiseSupportSection />
            <FranchiseRequirementsSection />
            <FranchiseProcessSection />
            <FranchiseContactSection />
            <ServicesFooterSection />
        </div>
    )
}