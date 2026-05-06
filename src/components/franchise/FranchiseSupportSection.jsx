import "./FranchiseSupportSection.css"

const supportFeatures = [
    {
        title: "Marketing Support",
        description: "Full-scale digital marketing, local SEO, and brand guidelines to ensure your gym is packed from day one.",
        icon: "📈",
        featured: false,
    },
    {
        title: "Training & Onboarding",
        description: "Comprehensive training for owners and staff on sales, management, and fitness excellence.",
        icon: "👥",
        featured: true,
    },
    {
        title: "Equipment Guidance",
        description: "Exclusive partnerships with top-tier equipment manufacturers for premium gear at wholesale prices.",
        icon: "⚙️",
        featured: false,
    },
    {
        title: "Software & Ops Support",
        description: "Proprietary gym management software and streamlined workflows for maximum efficiency.",
        icon: "⚙️",
        featured: false,
    },
]

export function FranchiseSupportSection() {
    return (
        <section className="franchiseSupportSection" aria-labelledby="franchise-support-heading">
            <div className="franchiseSupportInner">
                <div className="franchiseSupportHeader">
                    <p className="franchiseSupportSubtitle">WHY PARTNER WITH US</p>
                    <h2 id="franchise-support-heading">Unmatched Support</h2>
                </div>

                <div className="franchiseSupportGrid" role="list" aria-label="Partnership support features">
                    {supportFeatures.map((feature, index) => (
                        <article
                            key={index}
                            className={`franchiseSupportCard${feature.featured ? " isFeatured" : ""}`}
                            role="listitem"
                        >
                            <div className="franchiseSupportCardInner">
                                <h3>{feature.title}</h3>
                                <div className="franchiseSupportCardLine" aria-hidden="true" />
                                <p>{feature.description}</p>
                            </div>
                            <div className="franchiseSupportCardIcon" aria-hidden="true">
                                {feature.icon}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
