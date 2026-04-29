import "./AboutHeaderSection.css"

export function AboutHeaderSection() {
    return (
        <section className="aboutHeaderSection" aria-labelledby="about-page-heading">
            <div className="aboutHeaderInner">
                <div className="aboutHeaderContent">
                    <h1 id="about-page-heading">About Us</h1>
                </div>

                <div className="aboutHeaderAccent" aria-hidden="true" />

                <div className="aboutHeaderImageWrap">
                    <img src="/banner.png" alt="Gym members training with battle ropes" className="aboutHeaderImage" />
                </div>
            </div>
        </section>
    )
}
