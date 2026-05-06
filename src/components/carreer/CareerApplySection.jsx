import { useState } from "react"
import "./CareerApplySection.css"

export function CareerApplySection() {
    const [submitState, setSubmitState] = useState("idle")
    const [statusMessage, setStatusMessage] = useState("")
    const [fileName, setFileName] = useState("No File Chosen")

    const handleSubmit = (event) => {
        event.preventDefault()

        if (submitState === "submitting") {
            return
        }

        const formData = new FormData(event.currentTarget)
        const name = String(formData.get("name") || "").trim()
        const email = String(formData.get("email") || "").trim()
        const position = String(formData.get("position") || "").trim()

        if (!name || !email || !position) {
            setSubmitState("error")
            setStatusMessage("Please fill Name, E-mail, and Job Position before submitting.")
            return
        }

        setSubmitState("submitting")
        setStatusMessage("Submitting your application...")

        setTimeout(() => {
            setSubmitState("success")
            setStatusMessage("Application submitted successfully. Our team will contact you soon.")
            event.currentTarget.reset()
            setFileName("No File Chosen")
        }, 800)
    }

    const handleFileChange = (event) => {
        const selectedFile = event.target.files?.[0]
        setFileName(selectedFile ? selectedFile.name : "No File Chosen")
    }

    const submitButtonLabel = submitState === "submitting" ? "Submitting..." : submitState === "success" ? "Submitted" : "Submit"

    return (
        <section className="careerApplySection" aria-labelledby="career-apply-heading">
            <div className="careerApplyInner">
                <div className="careerApplyMedia">
                    <img
                        src="/one.jpeg"
                        alt="Trainer performing strength training in a gym"
                        className="careerApplyImage"
                    />
                </div>

                <div className="careerApplyFormCard">
                    <h2 id="career-apply-heading">Apply Now !</h2>

                    <form className="careerApplyForm" onSubmit={handleSubmit}>
                        <input type="text" name="name" placeholder="Name" aria-label="Name" required />
                        <input type="tel" name="contact" placeholder="+91  Contact" aria-label="Contact number" />
                        <input type="email" name="email" placeholder="E-mail" aria-label="Email" required />
                        <input type="text" name="position" placeholder="Job Position" aria-label="Job position" required />
                        <textarea name="message" rows="5" placeholder="Message" aria-label="Message" />

                        <div className="careerApplyUploadRow" aria-label="Resume upload area">
                            <label className="careerApplyUploadButton">
                                <span aria-hidden="true">⇪</span>
                                Upload File
                                <input type="file" name="resume" onChange={handleFileChange} />
                            </label>
                            <span className="careerApplyUploadText">{fileName}</span>
                        </div>

                        <p className="careerApplyHint">Drag &amp; drop your file here (PDF, DOCX, JPG, PNG) Max size: 5MB</p>

                        {statusMessage && (
                            <p className={`careerApplyStatus careerApplyStatus${submitState === "error" ? "Error" : "Success"}`}>
                                {statusMessage}
                            </p>
                        )}

                        <button type="submit" className="careerApplySubmitBtn" disabled={submitState === "submitting"}>
                            {submitButtonLabel}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}