import "./ServicesNutritionSection.css"

const benefits = [
    "Better workout performance",
    "Supports fat loss & muscle gain",
    "Sustainable eating habits",
    "Improved overall health"
]

export function ServicesNutritionSection() {
    return (
        <section className="servicesNutritionSection" aria-labelledby="nutrition-guidance-heading">
            <div className="servicesNutritionInner">
                <article className="servicesNutritionContent">
                    <h2 id="nutrition-guidance-heading">Nutrition Guidance</h2>

                    <h3>Who It&apos;s For</h3>
                    <p>Suitable for anyone looking to improve results through proper nutrition.</p>

                    <h3>Benefits</h3>
                    <ul>
                        {benefits.map((benefit) => (
                            <li key={benefit}>{benefit}</li>
                        ))}
                    </ul>

                    <h3>Duration / Intensity</h3>
                    <p>Lifestyle-based &amp; flexible</p>

                    <button type="button" className="servicesNutritionBtn">Enquire Now &gt;&gt;</button>
                </article>

                <div className="servicesNutritionMedia">
                    <img
                        src="/services/Nutrition_guidance.png"
                        alt="Member having a healthy meal during nutrition guidance"
                        className="servicesNutritionImage"
                    />
                    <div className="servicesNutritionOverlay" aria-hidden="true" />
                    <p className="servicesNutritionLabel">Nutrition Guidance</p>
                </div>
            </div>
        </section>
    )
}
