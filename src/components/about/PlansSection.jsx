import { useState } from "react"
import "./PlansSection.css"

const planTabs = ["General Training", "Personal Training", "Body Transformation"]

const pricingPlansByTab = {
    general: {
        plans: [
            {
                title: "Monthly Plan",
                prices: ["Rs. 1,499 (Regular)", "Rs. 999 (Student)"],
                featured: false,
            },
            {
                title: "3 Month Plan",
                prices: ["Rs. 4,499 (Regular)", "Rs. 2,499 (Student)"],
                featured: false,
            },
            {
                title: "6 Month Plan",
                prices: ["Rs. 7,999 (Regular)", "Rs. 4,999 (Student)"],
                featured: true,
            },
            {
                title: "Annual Plan",
                prices: ["Rs. 9,999 (Regular)", "Rs. 7,999 (Student)"],
                featured: false,
            },
        ],
        note: null,
    },
    personal: {
        plans: [
            {
                title: "12 Sessions",
                prices: ["Rs. 5,000"],
                featured: false,
            },
            {
                title: "16 Sessions",
                prices: ["Rs. 8,000"],
                featured: false,
            },
            {
                title: "24 Sessions",
                prices: ["Rs. 10,000"],
                featured: true,
            },
        ],
        note: "Personal Training & other add-ons are not included. Student price applicable only with valid ID. Terms & conditions apply.",
    },
    body: {
        plans: [
            {
                title: "90 Days Plan",
                prices: ["Rs. 20,000"],
                featured: false,
            },
            {
                title: "150 Days Plan",
                prices: ["Rs. 35,000"],
                featured: true,
            },
        ],
        note: "Personal Training & other add-ons are not included. Student price applicable only with valid ID. Terms & conditions apply.",
    },
}

export function PlansSection() {
    const [activeTab, setActiveTab] = useState("general")

    const activePlans = pricingPlansByTab[activeTab]

    return (
        <section className="plansSection" aria-labelledby="plans-heading">
            <div className="plansInner">
                <h2 id="plans-heading">
                    Choose the <span>Plan</span> That Fits Your Goals
                </h2>

                <div className="plansTabs" aria-label="Training categories">
                    {planTabs.map((tab) => {
                        const tabKey =
                            tab === "General Training" ? "general" : tab === "Personal Training" ? "personal" : "body"

                        return (
                            <button
                                key={tab}
                                type="button"
                                className={`planTab ${activeTab === tabKey ? "active" : ""}`}
                                onClick={() => setActiveTab(tabKey)}
                            >
                                {tab}
                            </button>
                        )
                    })}
                </div>

                <div
                    className="plansGrid"
                    style={{ "--plan-columns": Math.min(activePlans.plans.length, 4) }}
                >
                    {activePlans.plans.map((plan) => (
                        <article className={`planCard ${plan.featured ? "featured" : ""}`} key={plan.title}>
                            <div className="planCardAccent" aria-hidden="true" />
                            <span className="planChevrons planChevronsTop" aria-hidden="true">
                                &rsaquo;&rsaquo;&rsaquo;
                            </span>
                            <span className="planChevrons planChevronsBottom" aria-hidden="true">
                                &rsaquo;&rsaquo;&rsaquo;
                            </span>

                            <h3>{plan.title}</h3>

                            <div className="planPrices">
                                {plan.prices.map((price) => (
                                    <p key={price}>{price}</p>
                                ))}
                            </div>

                            <ul className="planFeatures">
                                <li>Steam bath - free</li>
                                <li>Diet chart - free</li>
                                <li>Workout plan - free</li>
                            </ul>

                            <button type="button" className={`planJoinBtn ${plan.featured ? "featured" : ""}`}>
                                Join Now &rsaquo;
                            </button>
                        </article>
                    ))}
                </div>

                {activePlans.note ? <p className="plansNote">{activePlans.note}</p> : null}
            </div>
        </section>
    )
}
