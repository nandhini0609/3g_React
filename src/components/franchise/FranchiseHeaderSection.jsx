import "./FranchiseHeaderSection.css"

export function FranchiseHeaderSection() {
    return (
        <section className="franchiseHeaderSection" aria-labelledby="franchise-page-heading">
            <div className="franchiseHeaderOverlay" aria-hidden="true" />

            <div className="franchiseHeaderInner">
                <img src="/logo.png" alt="3rd Generation Fitness Studio" className="franchiseHeaderLogo" />
                <h1 id="franchise-page-heading">Franchise</h1>
            </div>
        </section>
    )
}