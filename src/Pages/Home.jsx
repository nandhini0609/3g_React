import logo from "/logo.png"
import "./Home.css"

export function Home() {
    return (
        <div className="homePage">
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

            <main className="hero">
                <p className="overline">3RD GEN</p>
                <h1>
                    TRAIN <span>HARD</span> SEE RESULTS.
                    <br />
                    <span>LIVE STRONG.</span>
                </h1>

                <p className="heroDesc">
                    Premium training plans, certified experts and a community built for
                    success, start your fitness transformation today.
                </p>

                <button className="getStarted" type="button">Get Started &gt;</button>
            </main>
        </div>
    )
}