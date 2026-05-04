import "./AboutChooseSection.css"

const chooseCards = [
    {
        title: "PRO EQUIPMENT",
        text: "From strength to fat loss, our expert-led programs help you train smarter and achieve real results at any fitness level.",
        image: "/about_us/big_image.png",
    },
    {
        title: "EXPERT TRAINERS",
        text: "From strength to fat loss, our expert-led programs help you train smarter and achieve real results at any fitness level.",
        image: "/one.jpeg",
    },
    {
        title: "HEALTH REPORT",
        text: "From strength to fat loss, our expert-led programs help you train smarter and achieve real results at any fitness level.",
        image: "/about_us/small_image.png",
    },
]

export function AboutChooseSection() {
    return (
        <section className="aboutChooseSection" aria-labelledby="choose-heading">
            <div className="aboutChooseInner">
                <header className="chooseHeader">
                    <p className="chooseOverline">WHY CHOOSE US</p>
                    <h2 id="choose-heading" className="chooseHeading">
                        PERSONAL TRAINING <span className="accent">WILL WORK</span>
                        <br /> FOR YOU.
                    </h2>

                    <p className="chooseSub">
                        From strength to fat loss, our expert-led programs help you train smarter and
                        achieve real results at any fitness level.
                    </p>
                </header>

                <div className="chooseGrid">
                    {chooseCards.map((c) => (
                        <article
                            key={c.title}
                            className="chooseCard"
                            style={{ backgroundImage: `url(${c.image})` }}
                        >
                            <div className="chooseOverlay" aria-hidden="true" />
                            <div className="chooseCardContent">
                                <h3 className="chooseCardTitle">{c.title}</h3>
                                <p className="chooseCardText">{c.text}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
