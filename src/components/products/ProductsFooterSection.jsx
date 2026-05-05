import { NavLink } from "react-router"
import logo from "/brand-logo.svg"
import "./ProductsFooterSection.css"

const programs = [
    "Strength Training",
    "Weight Loss Program",
    "Functional Training",
    "Personal Training",
    "Group Classes",
    "Nutrition Guidance"
]

export function ProductsFooterSection() {
    return (
        <footer className="productsFooterSection" aria-label="Products footer">
            <div className="productsFooterOverlay" />
            <div className="productsFooterInner">
                <div className="productsFooterBrandColumn">
                    <img src={logo} alt="3G Fitness Studio logo" className="productsFooterLogo" />
                    <h2>
                        Let&apos;s
                        <br />
                        Transform
                        <br />
                        Your Life
                    </h2>
                </div>

                <div className="productsFooterLinksColumn">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/services">Services</NavLink></li>
                        <li><NavLink to="/products">Products</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </div>

                <div className="productsFooterProgramsColumn">
                    <h3>Our Programs</h3>
                    <ul>
                        {programs.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                </div>
            </div>
            <div className="productsFooterCopyright">
                <p>Copyright 2026 3G Fitness Studio. All rights reserved.</p>
            </div>
        </footer>
    )
}
