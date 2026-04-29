import "./AboutTrainerSection.css"

const highlights = ["Modern Facilities", "Expert Team", "Diverse Offering", "Fitness Focus"]

export function AboutTrainerSection() {
    return (
        <section className="aboutTrainerSection" aria-labelledby="about-trainer-heading">
            <div className="aboutTrainerInner">
                <header className="aboutTrainerHeader">
                    <p className="aboutTrainerOverline">About 3rd Generation</p>
                    <h2 id="about-trainer-heading">
                        Always Provide Best <span>Fitness Trainers.</span>
                    </h2>
                </header>

                <div className="aboutTrainerContent">
                    <div className="aboutTrainerMediaWrap">
                        <img
                            src="/one.jpeg"
                            alt="Fitness trainer standing in gym"
                            className="aboutTrainerImage"
                        />

                        <div className="aboutTrainerExperience" aria-label="Years of fitness experience">
                            <p className="aboutTrainerExperienceYears">25+</p>
                            <p className="aboutTrainerExperienceText">Years of Fitness Experience</p>
                        </div>
                    </div>

                    <div className="aboutTrainerDetails">
                        <p>
                            Harum congue eiusmod minus saepe, qui quis facere dolor scelerisque
                            magnis ea nec parturient, iste odio, accumsan distinctio quibusdam
                            nonummy placerat, habitasse sit. Iaculis consequatur iaculis
                            accusantium. Ligula quasi ligula suspendisse quos! A numquam qui
                            commodo nemo corporis hac laboris.
                        </p>

                        <div className="aboutTrainerHighlights" role="list" aria-label="Why train with us">
                            {highlights.map((item) => (
                                <div className="aboutTrainerBadge" role="listitem" key={item}>
                                    <span className="aboutTrainerBadgeIcon" aria-hidden="true">✓</span>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
