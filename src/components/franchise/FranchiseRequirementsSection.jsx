import "./FranchiseRequirementsSection.css"

const requirements = [
    {
        icon: "📍",
        label: "Area Requirement",
        value: "Minimum 2500 Sq. Ft.",
    },
    {
        icon: "💰",
        label: "Initial Investment",
        value: "30 - 35 Lakhs",
    },
    {
        icon: "⏱️",
        label: "ROI Timeline",
        value: "24 - 36 Months",
    },
]

export function FranchiseRequirementsSection() {
    return (
        <section className="franchiseRequirementsSection" aria-labelledby="franchise-requirements-heading">
            <div className="franchiseRequirementsInner">
                <div className="franchiseRequirementsVisual" aria-hidden="true">
                    <div className="franchiseRequirementsAccent" />

                    <div className="franchiseRequirementsImageStackTop">
                        <img src="/rectangle-48.png" alt="" className="franchiseRequirementsImageTop" />
                    </div>

                    <div className="franchiseRequirementsImageStackBottom">
                        <img src="/rectangle-50.jpg" alt="" className="franchiseRequirementsImageBottom" />
                    </div>
                </div>

                <div className="franchiseRequirementsContent">
                    <div className="franchiseRequirementsHeader">
                        <p className="franchiseRequirementsSubtitle">THE BLUEPRINT</p>
                        <h2 id="franchise-requirements-heading">
                            What You Need
                            <br />
                            To <span>Get Started</span>
                        </h2>
                    </div>

                    <p className="franchiseRequirementsDescription">
                        We look for partners who are passionate about fitness and committed to delivering a premium
                        experience.
                    </p>

                    <div className="franchiseRequirementsCards" role="list" aria-label="Franchise requirements">
                        {requirements.map((req, index) => (
                            <article key={index} className="franchiseRequirementCard" role="listitem">
                                <div className="franchiseRequirementIcon" aria-hidden="true">
                                    {req.icon}
                                </div>
                                <div className="franchiseRequirementText">
                                    <p className="franchiseRequirementLabel">{req.label}</p>
                                    <p className="franchiseRequirementValue">{req.value}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
