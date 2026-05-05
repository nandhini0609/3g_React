import logo from "/brand-logo.svg"
import "./ServicesFooterSection.css"

const quickLinks = ["Home", "About", "Services", "Products", "Career", "Franchise", "Contact"]

const programs = [
    "Strength Training",
    "Weight Loss Program",
    "Functional Training",
    "Personal Training",
    "Group Classes",
    "Nutrition Guidance",
    "Weight Gain Program",
    "Zumba Class",
    "Contest Preparation"
]

export function ServicesFooterSection() {
    return (
        <footer className="servicesFooterSection" aria-label="Services page footer">
            <div className="servicesFooterOverlay" aria-hidden="true" />

            <div className="servicesFooterInner">
                <div className="servicesFooterBrandColumn">
                    <img src={logo} alt="3G Fitness Studio logo" className="servicesFooterLogo" />
                    <h2>
                        Let&apos;s
                        <br />
                        Transform
                        <br />
                        Your Life
                    </h2>

                    <p className="servicesFooterFollow">Follow Us -</p>
                    <div className="servicesFooterSocials" aria-label="Social links">
                        <a href="#" aria-label="Facebook">FB</a>
                        <a href="#" aria-label="LinkedIn">IN</a>
                        <a href="#" aria-label="Instagram">IG</a>
                    </div>
                </div>

                <div className="servicesFooterLinksColumn">
                    <h3>Quick Links</h3>
                    <ul>
                        {quickLinks.map((item) => (
                            <li key={item}>
                                <a href="#">{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="servicesFooterProgramsColumn">
                    <h3>Our Programs</h3>
                    <ul>
                        {programs.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className="servicesFooterContactColumn">
                    <h3>Contact</h3>
                    <p>
                        +91 86673 78012
                        <br />
                        +91 8778359643
                    </p>
                    <p>Contact@3rdgenerationfitnessstudio.com</p>
                    <p>
                        10, Alamadhi Rd, Vetrivel Nagar, ganesh Nagar,
                        <br />
                        New Vellanur, Tamil Nadu 600062
                    </p>
                </div>
            </div>

            <div className="servicesFooterCopyright">
                <p>
                    © 2026 3rd Generation Gym. All rights reserved. | Designed &amp; Developed By Manvian
                </p>
            </div>
        </footer>
    )
}
