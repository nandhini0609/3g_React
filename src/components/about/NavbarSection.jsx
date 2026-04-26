import logo from "/logo.png"

export function NavbarSection() {
    return (
        <header className="navbar">
            <img src={logo} alt="3rd generation gym logo" className="navbarImg" />

            <nav className="navLinks" aria-label="Primary">
                <a href="#" className="active">Home</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Products</a>
                <a href="#">Career</a>
                <a href="#">Franchise</a>
                <a href="#">Contact</a>
            </nav>

            <button className="joinBtn" type="button">Join Now &gt;&gt;</button>
        </header>
    )
}
