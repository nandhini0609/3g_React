import "./ServicesFunctionalSection.css"

const benefits = [
    "Improves flexibility & coordination",
    "Enhances core stability",
    "Reduces injury risk",
    "Boosts overall movement efficiency"
]

export function ServicesFunctionalSection() {
    return (
        <section className="servicesFunctionalSection" aria-labelledby="functional-training-heading">
            <div className="servicesFunctionalInner">
                <div className="servicesFunctionalMedia">
                    <img
                        src="/services/Functional.png"
                        alt="Trainer guiding a member through a functional workout"
                        className="servicesFunctionalImage"
                    />
                    <div className="servicesFunctionalOverlay" aria-hidden="true" />
                    <p className="servicesFunctionalLabel">Functional Training</p>
                </div>

                <article className="servicesFunctionalContent">
                    <h2 id="functional-training-heading">Functional Training</h2>

                    <h3>Who It&apos;s For</h3>
                    <p>Perfect for those who want better mobility, balance, and day-to-day strength.</p>

                    <h3>Benefits</h3>
                    <ul>
                        {benefits.map((benefit) => (
                            <li key={benefit}>{benefit}</li>
                        ))}
                    </ul>

                    <h3>Duration / Intensity</h3>
                    <p>45-60 min per session • Low to High</p>

                    <button type="button" className="servicesFunctionalBtn">Enquire Now &gt;&gt;</button>
                </article>
            </div>
        </section>
    )
}
