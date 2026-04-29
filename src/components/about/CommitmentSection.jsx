export function CommitmentSection() {
    return (
        <section className="commitmentSection" aria-labelledby="commitment-heading">
            <div className="commitmentInner">
                <header className="commitmentHeader">
                    <h2 id="commitment-heading">Our Commitment</h2>
                    <p>
                        We are confident in delivering visible and measurable transformation.
                        With proper training, discipline and diet adherence, we guarantee results.
                    </p>
                    <p className="commitmentTagline">Your transformation is our responsibility!</p>
                </header>

                <article className="commitmentCard" aria-label="Fitness journey call to action">
                    <h3>
                        Start Your Fitness
                        <br />
                        Journey Today.
                    </h3>

                    <p>
                        Train with expert coaches, modern equipment,
                        <br />
                        and programs designed to deliver real results.
                    </p>

                    <a className="commitmentCta" href="/contact">
                        Contact Us &rsaquo;&rsaquo;
                    </a>
                </article>
            </div>
        </section>
    )
}
