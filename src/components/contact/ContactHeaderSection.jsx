import "./ContactHeaderSection.css"

export function ContactHeaderSection() {
    return (
        <section className="contactHeaderSection" aria-labelledby="contact-page-heading">
            <div className="contactHeaderBackdrop" aria-hidden="true" />

            <div className="contactHeaderInner">
                <div className="contactHeaderImageWrap" aria-hidden="true">
                    <img src="/rectangle-45.jpg" alt="" className="contactHeaderBackgroundImage" />
                    <img src="/rectangle-50.jpg" alt="" className="contactHeaderForegroundImage" />
                </div>

                <div className="contactHeaderContent">
                    <h1 id="contact-page-heading">Contact Us</h1>
                </div>
            </div>
        </section>
    )
}
