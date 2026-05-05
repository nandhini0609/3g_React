import "./ServicesHeaderSection.css"

export function ServicesHeaderSection() {
    return (
        <section className="servicesHeaderSection" aria-labelledby="services-page-heading">
            <div className="servicesHeaderInner">
                <div className="servicesHeaderContent">
                    <h1 id="services-page-heading">Services</h1>
                </div>

                <div className="servicesHeaderAccent" aria-hidden="true" />

                <div className="servicesHeaderImageWrap">
                    <img
                        src="/services/Group_training.png"
                        alt="Members training together with gym ropes"
                        className="servicesHeaderImage"
                    />
                </div>
            </div>
        </section>
    )
}
