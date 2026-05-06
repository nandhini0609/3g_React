import { useState } from "react"
import "./ContactInfoSection.css"

export function ContactInfoSection() {
    const [submitState, setSubmitState] = useState("idle")
    const [statusMessage, setStatusMessage] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.currentTarget

        if (submitState === "submitting") {
            return
        }

        const formData = new FormData(event.currentTarget)
        const name = formData.get("name")?.toString().trim()
        const contact = formData.get("contact")?.toString().trim()
        const email = formData.get("email")?.toString().trim()
        const message = formData.get("message")?.toString().trim()

        if (!name || !contact || !email || !message) {
            setSubmitState("error")
            setStatusMessage("Please fill Name, Contact, E-mail, and Message before submitting.")
            return
        }

        setSubmitState("submitting")
        setStatusMessage("Submitting your message...")
        form.reset()

        window.setTimeout(() => {
            setSubmitState("success")
            setStatusMessage("Message sent successfully. Our team will contact you soon.")

            window.setTimeout(() => {
                setSubmitState("idle")
                setStatusMessage("")
            }, 1400)
        }, 800)
    }

    const submitButtonLabel = submitState === "submitting" ? "Submitting..." : submitState === "success" ? "Submitted" : "Submit"

    return (
        <section className="contactInfoSection">
            <div className="contactInfoContainer">
                <div className="contactInfoCards" aria-label="Contact details">
                    <article className="contactInfoCard">
                        <div className="contactInfoIcon" aria-hidden="true">☎</div>
                        <h3>Contact</h3>
                        <p>+91 86673 78012</p>
                        <p>+91 8778359643</p>
                    </article>

                    <article className="contactInfoCard">
                        <div className="contactInfoIcon" aria-hidden="true">✉</div>
                        <h3>Mail</h3>
                        <p>Contact@3rdgenerationfitnessstudio.com</p>
                    </article>

                    <article className="contactInfoCard">
                        <div className="contactInfoIcon" aria-hidden="true">⌖</div>
                        <h3>Address</h3>
                        <p>10, Alamadhi Rd, Vetrivel Nagar, ganesh Nagar, New Vellanur, Tamil Nadu 600062</p>
                    </article>
                </div>

                <div className="contactInfoLayout">
                    <div className="contactFormCard">
                        <h2>Get In Touch</h2>

                        <form className="contactForm" onSubmit={handleSubmit}>
                            <input type="text" name="name" placeholder="Name" aria-label="Name" />
                            <input type="tel" name="contact" placeholder="+91 - Contact" aria-label="Contact number" />
                            <input type="email" name="email" placeholder="E-mail" aria-label="Email address" />
                            <textarea name="message" rows="5" placeholder="Message" aria-label="Message" />

                            {statusMessage ? (
                                <p className={`contactFormStatus contactFormStatus${submitState === "error" ? "Error" : "Success"}`}>
                                    {statusMessage}
                                </p>
                            ) : null}

                            <button type="submit" className="contactFormSubmitBtn" disabled={submitState === "submitting"}>
                                {submitButtonLabel}
                            </button>
                        </form>
                    </div>

                    <div className="contactMapCard" aria-label="Map location">
                        <iframe
                            title="3rd Generation Fitness Studio location map"
                            src="https://www.google.com/maps?q=10%20Alamadhi%20Rd%2C%20Vetrivel%20Nagar%2C%20ganesh%20Nagar%2C%20New%20Vellanur%2C%20Tamil%20Nadu%20600062&output=embed"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
