const resultsCards = [
    {
        image: "/results/male_result.png",
        alt: "Male transformation before and after comparison",
    },
    {
        image: "/results/female_result.png",
        alt: "Female transformation before and after comparison",
    },
]

export function ResultsSection() {
    return (
        <section className="resultsSection" aria-labelledby="results-heading">
            <div className="resultsInner">
                <p className="resultsOverline">RESULTS</p>
                <h2 id="results-heading">Real People. Real Results.</h2>
                <p className="resultsSubheading">Transformations That Inspire.</p>

                <div className="resultsGrid">
                    {resultsCards.map((card) => (
                        <article className="resultCard" key={card.image}>
                            <div className="resultMedia">
                                <img src={card.image} alt={card.alt} className="resultImage" />
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}