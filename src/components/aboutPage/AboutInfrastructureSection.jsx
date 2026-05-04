import "./AboutInfrastructureSection.css"

export function AboutInfrastructureSection() {
    return (
        <section className="aboutInfrastructureSection" aria-labelledby="infrastructure-heading">
            <div className="aboutInfrastructureInner">
                <div className="aboutInfrastructureContent">
                    <p className="aboutInfrastructureOverline">INFRASTRUCTURE</p>

                    <h2 id="infrastructure-heading" className="aboutInfrastructureHeading">
                        EXPLORE OUR
                        <br />
                        <span>GYM SPACE</span>
                    </h2>

                    <p className="aboutInfrastructureText">
                        From strength to fat loss, our expert-led programs help you train smarter
                        and achieve real results at any fitness level.
                    </p>

                    <div className="aboutInfrastructureDots" aria-hidden="true">
                        <span />
                        <span />
                        <span />
                        <strong>...</strong>
                    </div>
                </div>

                <div className="aboutInfrastructureMedia">
                    <img
                        src="/rectangle-46.jpg"
                        alt="Trainer and member doing battle rope workout in gym"
                        className="aboutInfrastructureImage"
                    />
                    <div className="aboutInfrastructureStripe" aria-hidden="true" />
                    <p className="aboutInfrastructureTag">INFRASTRUCTURE</p>
                </div>
            </div>
        </section>
    )
}
