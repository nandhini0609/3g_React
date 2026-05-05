import "./ServicesStrengthSection.css"

const benefits = [
    "Increases muscle mass & strength",
    "Improves posture and bone health",
    "Boosts metabolism",
    "Enhances overall performance"
]

export function ServicesStrengthSection() {
    return (
        <section className="servicesStrengthSection" aria-labelledby="strength-training-heading">
            <div className="servicesStrengthInner">
                <div className="servicesStrengthMedia">
                    <img
                        src="/services/Strength_training.png"
                        alt="Athlete during a strength training session"
                        className="servicesStrengthImage"
                    />
                    <div className="servicesStrengthOverlay" aria-hidden="true" />
                    <p className="servicesStrengthLabel">Strength Training</p>
                </div>

                <article className="servicesStrengthContent">
                    <h2 id="strength-training-heading">Strength Training</h2>

                    <h3>Who It&apos;s For</h3>
                    <p>Ideal for beginners to advanced members looking to build overall fitness.</p>

                    <h3>Benefits</h3>
                    <ul>
                        {benefits.map((benefit) => (
                            <li key={benefit}>{benefit}</li>
                        ))}
                    </ul>

                    <h3>Duration / Intensity</h3>
                    <p>45-75 min per session • Moderate to High</p>

                    <button type="button" className="servicesEnquireBtn">Enquire Now &gt;&gt;</button>
                </article>
            </div>
        </section>
    )
}
