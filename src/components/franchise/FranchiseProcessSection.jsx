import "./FranchiseProcessSection.css"

export function FranchiseProcessSection() {
    const processSteps = [
        {
            id: 1,
            title: "Franchise Enquiry",
            description: "We look for partners who are passionate about fitness",
            image: "/rectangle-45.jpg",
            background: "pink"
        },
        {
            id: 2,
            title: "Discussion",
            description: "Detailed presentation of the business model, financials, and expectations.",
            image: "/rectangle-46.jpg",
            background: "dark"
        },
        {
            id: 3,
            title: "Location Approval",
            description: "Site selection assistance and final approval of the gym premises.",
            image: "/rectangle-48.png",
            background: "pink"
        },
        {
            id: 4,
            title: "Launch Support",
            description: "Pre-launch marketing, staff hiring, and grand opening execution.",
            image: "/rectangle-50.jpg",
            background: "dark"
        }
    ]

    return (
        <section className="franchiseProcessSection">
            <div className="franchiseProcessContainer">
                <div className="franchiseProcessHeader">
                    <div className="journeyLine"></div>
                    <h2 className="journeyLabel">THE JOURNEY</h2>
                    <div className="journeyLine"></div>
                </div>

                <h1 className="franchiseProcessTitle">FRANCHISE PROCESS</h1>

                <div className="franchiseProcessSteps">
                    {processSteps.map((step) => (
                        <div
                            key={step.id}
                            className={`processStep ${step.background === 'pink' ? 'pinkBg' : 'darkBg'}`}
                        >
                            <div className="stepContent">
                                <div className="stepNumber">{step.id}</div>
                                <h3 className="stepTitle">{step.title}</h3>
                                <p className="stepDescription">{step.description}</p>
                            </div>

                            <div className="stepImage">
                                <img src={step.image} alt={step.title} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
