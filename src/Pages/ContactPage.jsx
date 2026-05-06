import { NavbarSection } from "../components/about/NavbarSection"
import { ContactHeaderSection } from "../components/contact/ContactHeaderSection"
import { ServicesFooterSection } from "../components/services/ServicesFooterSection"
import "../styles/appTokens.css"

export function Contact() {
    return (
        <div className="aboutPage">
            <NavbarSection />
            <ContactHeaderSection />
            <ServicesFooterSection />
        </div>
    )
}