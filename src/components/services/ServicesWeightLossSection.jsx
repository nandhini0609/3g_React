import "./ServicesWeightLossSection.css"

const benefits = [
    "Effective fat loss",
    "Improved endurance & stamina",
    "Better metabolic health",
    "Sustainable lifestyle habits"
]

export function ServicesWeightLossSection() {
    return (
        <section className="servicesWeightLossSection" aria-labelledby="weight-loss-heading">
            <div className="servicesWeightLossInner">
                <article className="servicesWeightLossContent">
                    <h2 id="weight-loss-heading">Weight Loss Program</h2>

                    <h3>Who It&apos;s For</h3>
                    <p>Designed for individuals aiming to lose body fat safely and sustainably.</p>

                    <h3>Benefits</h3>
                    <ul>
                        {benefits.map((benefit) => (
                            <li key={benefit}>{benefit}</li>
                        ))}
                    </ul>

                    <h3>Duration / Intensity</h3>
                    <p>60 min per session • Moderate</p>

                    <button type="button" className="servicesWeightLossBtn">Enquire Now &gt;&gt;</button>
                </article>

                <div className="servicesWeightLossMedia">
                    <img
                        src="/services/Weight_loss.png"
                        alt="Member holding dumbbells during a weight loss training session"
                        className="servicesWeightLossImage"
                    />
                    <div className="servicesWeightLossOverlay" aria-hidden="true" />
                    <p className="servicesWeightLossLabel">Weight Loss Program</p>
                </div>
            </div>
        </section>
    )
}
