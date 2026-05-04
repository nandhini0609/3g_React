import logo from "/brand-logo.svg"
import "./AboutFooterSection.css"

const quickLinks = ["Home", "About", "Services", "Products", "Career", "Franchise", "Contact"]

const programs = [
    "Strength Training",
    "Weight Loss Program",
    "Functional Training",
    "Personal Training",
    "Group Classes",
    "Nutrition Guidance",
]

export function AboutFooterSection() {
    return (
        <footer className="aboutFooterSection" aria-label="About page footer">
            <div className="aboutFooterOverlay" aria-hidden="true" />

            <div className="aboutFooterInner">
                <div className="aboutFooterBrandColumn">
                    <img src={logo} alt="3G Fitness Studio logo" className="aboutFooterLogo" />
                    <h2>
                        Let&apos;s
                        <br />
                        Transform
                        <br />
                        Your Life
                    </h2>

                    <p className="aboutFooterFollow">Follow Us -</p>
                    <div className="aboutFooterSocials" aria-label="Social links">
                        <a href="#" aria-label="Facebook">
                            FB
                        </a>
                        <a href="#" aria-label="LinkedIn">
                            IN
                        </a>
                        <a href="#" aria-label="Instagram">
                            IG
                        </a>
                    </div>
                </div>

                <div className="aboutFooterLinksColumn">
                    <h3>Quick Links</h3>
                    <ul>
                        {quickLinks.map((item) => (
                            <li key={item}>
                                <a href="#">{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="aboutFooterProgramsColumn">
                    <h3>Our Programs</h3>
                    <ul>
                        {programs.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className="aboutFooterContactColumn">
                    <h3>Contact</h3>
                    <p>
                        Phone: +91 91234 56780
                        <br />
                        Helpline: +91 90123 45678
                    </p>
                    <p>Email: hello@3gfitstudio.in</p>
                    <p>
                        Address: No. 28, Lake View Road, Anna Nagar West,
                        <br />
                        Chennai, Tamil Nadu 600040
                    </p>
                </div>
            </div>

            <div className="aboutFooterCopyright">
                <p>Copyright 2026 3G Fitness Studio. All rights reserved.</p>
            </div>
        </footer>
    )
}
