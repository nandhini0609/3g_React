import { NavbarSection } from "../components/about/NavbarSection"
import { ContactHeaderSection } from "../components/contact/ContactHeaderSection"
import { ContactInfoSection } from "../components/contact/ContactInfoSection"
import { ServicesFooterSection } from "../components/services/ServicesFooterSection"
import "../styles/appTokens.css"

export function Contact() {
    return (
        <div className="aboutPage">
            <NavbarSection />
            <ContactHeaderSection />
            <ContactInfoSection />
            <ServicesFooterSection />
        </div>
    )
}