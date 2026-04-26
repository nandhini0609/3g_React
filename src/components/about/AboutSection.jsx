export function AboutSection() {
    return (
        <section className="aboutSection" aria-labelledby="about-heading">
            <div className="aboutInner">
                <div className="aboutLeft">
                    <p className="aboutOverline">ABOUT US</p>
                    <h2 id="about-heading">
                        More Than a Gym. A
                        <br />
                        Place to Transform.
                    </h2>

                    <div className="aboutContent">
                        <img
                            src="/about_us/small_image.png"
                            alt="Athlete lifting weights in gym"
                            className="aboutSmallImage"
                        />

                        <p>
                            We are a results-driven fitness community built to help you
                            become stronger, healthier, and more confident. Our programs are
                            designed by certified experts and backed by proven training
                            methods that deliver real, lasting results.
                        </p>
                    </div>
                </div>

                <div className="aboutRight">
                    <img
                        src="/about_us/big_image.png"
                        alt="Woman training with gym equipment"
                        className="aboutBigImage"
                    />
                </div>
            </div>
        </section>
    )
}
