import "./AboutCardsSection.css"

const cards = [
    {
        title: "OUR VISION",
        text: "From strength to fat loss, our expert-led programs help you train smarter and achieve real results at any fitness level.",
    },
    {
        title: "OUR MISSION",
        featured: true,
        text: "From strength to fat loss, our expert-led programs help you train smarter and achieve real results at any fitness level.",
    },
    {
        title: "OUR VALUE",
        text: "From strength to fat loss, our expert-led programs help you train smarter and achieve real results at any fitness level.",
    },
]

export function AboutCardsSection() {
    return (
        <section className="aboutCardsSection" aria-label="About values">
            <div className="aboutCardsInner">
                {cards.map((c) => (
                    <article className={`aboutCard ${c.featured ? "featured" : ""}`} key={c.title}>
                        <div className="aboutCardIcon" aria-hidden="true">
                            <span className="square" />
                        </div>

                        <h3 className="aboutCardTitle">{c.title}</h3>

                        <p className="aboutCardText">{c.text}</p>
                    </article>
                ))}
            </div>
        </section>
    )
}
