import { useState } from "react"
import "./FranchiseContactSection.css"

export function FranchiseContactSection() {
    const [submitState, setSubmitState] = useState("idle")
    const [statusMessage, setStatusMessage] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()

        if (submitState === "submitting") {
            return
        }

        const formData = new FormData(event.currentTarget)
        const name = formData.get("name")?.toString().trim()
        const contact = formData.get("contact")?.toString().trim()
        const email = formData.get("email")?.toString().trim()
        const city = formData.get("city")?.toString().trim()
        const investment = formData.get("investment")?.toString().trim()

        if (!name || !contact || !email || !city || !investment) {
            setSubmitState("error")
            setStatusMessage("Please fill all fields before submitting.")
            return
        }

        setSubmitState("submitting")
        setStatusMessage("Submitting your enquiry...")

        window.setTimeout(() => {
            setSubmitState("success")
            setStatusMessage("Enquiry submitted successfully. Our franchise team will contact you within 24 hours.")
            event.currentTarget.reset()
        }, 800)
    }

    const submitButtonLabel = submitState === "submitting" ? "Submitting..." : submitState === "success" ? "Submitted" : "Submit Enquiry"

    return (
        <section className="franchiseContactSection">
            <div className="franchiseContactContainer">
                <div className="franchiseContactInfo">
                    <div className="franchiseContactEyebrow">
                        <span>GET IN TOUCH</span>
                        <span className="franchiseContactLine"></span>
                    </div>

                    <h2 className="franchiseContactTitle">
                        Let's Build Your <span>Fitness Goals</span> Together.
                    </h2>

                    <div className="franchiseContactDetails">
                        <div className="contactDetail">
                            <h3>Head Office</h3>
                            <p>10, Alamadhi Rd, Vetrivel Nagar, ganesh Nagar, New Vellanur, Tamil Nadu 600062</p>
                        </div>

                        <div className="contactDetail">
                            <h3>Email Support</h3>
                            <p>Contact@3rdgenerationfitnessstudio.com</p>
                        </div>

                        <div className="contactDetail">
                            <h3>Let's Talk</h3>
                            <p>+91 8667378012 / +91 8778359643</p>
                        </div>
                    </div>
                </div>

                <div className="franchiseContactFormCard">
                    <h3>Start Your Application</h3>
                    <p>Fill out the form below and our franchise manager will contact you within 24 hours.</p>

                    <form className="franchiseContactForm" onSubmit={handleSubmit}>
                        <input type="text" name="name" placeholder="Name" aria-label="Name" />
                        <input type="tel" name="contact" placeholder="+91 - Contact" aria-label="Contact number" />
                        <input type="email" name="email" placeholder="Email" aria-label="Email address" />
                        <input type="text" name="city" placeholder="City" aria-label="City" />
                        <input type="text" name="investment" placeholder="Investment Capacity" aria-label="Investment capacity" />

                        {statusMessage ? (
                            <p className={`franchiseContactStatus franchiseContactStatus${submitState === "error" ? "Error" : "Success"}`}>
                                {statusMessage}
                            </p>
                        ) : null}

                        <button type="submit" className="franchiseContactSubmitBtn" disabled={submitState === "submitting"}>
                            {submitButtonLabel}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
