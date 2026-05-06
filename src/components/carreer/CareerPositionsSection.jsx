import "./CareerPositionsSection.css"

const positions = [
    {
        title: "Front Desk Executive",
        details: "Morning shift : 5.30 AM - 2.00 PM Vacancies : 1 Salary : ₹12,000 - ₹15,000 + Incentives",
        active: true,
    },
    {
        title: "Front Desk Executive",
        details: "Evening shift : 2.00 PM - 11.00 PM Vacancies : 2 Salary : ₹12,000 - ₹15,000 + Incentives",
    },
    {
        title: "Manager",
        details: "Vacancies : 1 Salary : ₹25,000 + Incentives",
    },
    {
        title: "Head Coach",
        details: "Vacancies : 1 Salary : ₹18,000 + Incentives",
    },
    {
        title: "Senior Coach",
        details: "Vacancies : 2 Salary : ₹15,000 + Incentives",
    },
    {
        title: "Junior Coach",
        details: "Vacancies : 5 Salary : ₹12,000 + Incentives",
    },
]

export function CareerPositionsSection() {
    return (
        <section className="careerPositionsSection" aria-labelledby="career-positions-heading">
            <div className="careerPositionsInner">
                <h2 id="career-positions-heading">Open Positions</h2>

                <div className="careerPositionsGrid" role="list" aria-label="Open job positions">
                    {positions.map((position) => (
                        <article
                            key={`${position.title}-${position.details}`}
                            className={`careerPositionCard${position.active ? " isActive" : ""}`}
                            role="listitem"
                        >
                            <div className="careerPositionHeader">
                                <h3>{position.title}</h3>
                                <div className="careerPositionCheck" aria-hidden="true">
                                    <span />
                                </div>
                            </div>

                            <p>{position.details}</p>
                        </article>
                    ))}
                </div>

                <div className="careerPositionsPager" aria-label="Pagination">
                    <button type="button" className="careerPagerBtn" aria-label="Previous positions page">
                        ‹
                    </button>
                    <button type="button" className="careerPagerBtn isCurrent" aria-current="page">
                        1
                    </button>
                    <button type="button" className="careerPagerBtn" aria-label="Next positions page">
                        ›
                    </button>
                </div>
            </div>
        </section>
    )
}