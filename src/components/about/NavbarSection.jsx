import logo from "/brand-logo.svg"
import { NavLink } from "react-router"
import "./NavbarSection.css"

export function NavbarSection() {
    return (
        <header className="navbar">
            <img src={logo} alt="3G Fitness Studio logo" className="navbarImg" />

            <nav className="navLinks" aria-label="Primary">
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <a href="#">Services</a>
                <a href="#">Products</a>
                <a href="#">Career</a>
                <a href="#">Franchise</a>
                <NavLink to="/contact">Contact</NavLink>
            </nav>

            <button className="joinBtn" type="button">Join Now &gt;&gt;</button>
        </header>
    )
}
