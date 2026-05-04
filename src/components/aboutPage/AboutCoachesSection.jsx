import "./AboutCoachesSection.css"

const coaches = [
    {
        name: "Aarav Kumar",
        role: "Personal Trainer",
        image: "/two.jpeg",
        alt: "Male coach holding a barbell in a gym",
    },
    {
        name: "Ananya Singh",
        role: "Personal Trainer",
        image: "/three.jpeg",
        alt: "Female coach training in a fitness studio",
    },
    {
        name: "Vikram Patel",
        role: "Personal Trainer",
        image: "/results/male_result.png",
        alt: "Body transformation result in 12 weeks",
    },
]

export function AboutCoachesSection() {
    return (
        <section className="aboutCoachesSection" aria-labelledby="about-coaches-heading">
            <div className="aboutCoachesInner">
                <p className="aboutCoachesOverline">TRAINERS</p>

                <h2 id="about-coaches-heading" className="aboutCoachesHeading">
                    TEAM OF <span>EXPERT</span> COACHES.
                </h2>

                <div className="aboutCoachesGrid" role="list" aria-label="Coaches gallery">
                    {coaches.map((coach) => (
                        <article className="aboutCoachCard" role="listitem" key={coach.name}>
                            <div className="aboutCoachMedia">
                                <span className="aboutCoachAccent" aria-hidden="true" />
                                <img src={coach.image} alt={coach.alt} className="aboutCoachImage" />
                            </div>
                            <div className="aboutCoachInfo">
                                <h3 className="aboutCoachName">{coach.name}</h3>
                                <p className="aboutCoachRole">{coach.role}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
