export function ResultsSection() {
    return (
        <section className="resultsSection" aria-labelledby="results-heading">
            <div className="resultsInner">
                <p className="resultsOverline">RESULTS</p>
                <h2 id="results-heading">
                    Real People. Real Results.
                </h2>
                <p className="resultsSubheading">Transformations That Inspire.</p>

                <div className="resultsGrid">
                    <article className="resultCard">
                        <div className="resultMedia">
                            <img
                                src="/results/male_result.png"
                                alt="Male transformation before and after comparison"
                                className="resultImage"
                            />
                        </div>
                    </article>

                    <article className="resultCard">
                        <div className="resultMedia">
                            <img
                                src="/results/female_result.png"
                                alt="Female transformation before and after comparison"
                                className="resultImage"
                            />
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}