const serviceCards = [
    {
        title: "Strength Training",
        image: "/services/Strength_training.png",
        alt: "Athlete performing strength training",
    },
    {
        title: "Weight Loss Program",
        image: "/services/Weight_loss.png",
        alt: "Woman doing a weight loss workout",
    },
    {
        title: "Functional Training",
        image: "/services/Functional.png",
        alt: "Trainer coaching a functional exercise",
    },
    {
        title: "Personal Training",
        image: "/services/Personal_training.png",
        alt: "Personal trainer assisting a client",
    },
]

export function ServicesSection() {
    return (
        <section className="servicesSection" aria-labelledby="services-heading">
            <div className="servicesIntro">
                <div className="servicesHeadingBlock">
                    <p className="servicesOverline">SERVICES</p>
                    <h2 id="services-heading">Programs Designed to Transform You</h2>
                </div>

                <div className="servicesCopy">
                    <p>
                        From strength to fat loss, our expert-led programs help you train
                        smarter and achieve real results at any fitness level.
                    </p>

                    <button className="servicesCta" type="button">
                        Know More &rsaquo;
                    </button>
                </div>
            </div>

            <div className="servicesGrid">
                {serviceCards.map((card) => (
                    <article className="serviceCard" key={card.title}>
                        <img src={card.image} alt={card.alt} className="serviceCardImage" />
                        <div className="serviceCardOverlay" />
                        <h3>{card.title}</h3>
                    </article>
                ))}
            </div>
        </section>
    )
}