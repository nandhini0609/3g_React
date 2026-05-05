import { NavbarSection } from "../components/about/NavbarSection"
import { ServicesFooterSection } from "../components/services/ServicesFooterSection"
import "../styles/appTokens.css"

export function Contact() {
    return (
        <div className="aboutPage">
            <NavbarSection />
            <section style={{ minHeight: "50vh", padding: "2rem 1.2rem", background: "#e8e8ea", color: "#111" }}>
                <h1 style={{ margin: 0, fontFamily: "Anton, sans-serif", fontWeight: 400 }}>Contact</h1>
            </section>
            <ServicesFooterSection />
        </div>
    )
}