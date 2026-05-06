import { useNavigate } from "react-router"
import "./CareerHeaderSection.css"

export function CareerHeaderSection() {
    const navigate = useNavigate()

    return (
        <section className="careerHeaderSection" aria-labelledby="career-page-heading">
            <div className="careerHeaderInner">
                <div className="careerHeaderContent">
                    <p className="careerHeaderOverline">3G FITNESS STUDIO</p>
                    <h1 id="career-page-heading">Career</h1>
                    <p className="careerHeaderCopy">
                        Build a stronger future with a team that values coaching, discipline, and growth.
                        Join an environment where trainers and support staff learn, lead, and progress together.
                    </p>

                    <div className="careerHeaderHighlights" aria-label="Career highlights">
                        <div>
                            <strong>10+</strong>
                            <span>Roles to grow into</span>
                        </div>
                        <div>
                            <strong>1 Team</strong>
                            <span>One coaching culture</span>
                        </div>
                        <div>
                            <strong>Daily</strong>
                            <span>Training and mentorship</span>
                        </div>
                    </div>

                    <button type="button" className="careerHeaderBtn" onClick={() => navigate("/contact")}>
                        Apply Now &gt;&gt;
                    </button>
                </div>

                <div className="careerHeaderVisual" aria-hidden="true">
                    <div className="careerHeaderVisualGlow" />
                    <div className="careerHeaderImageFrame">
                        <img src="/banner.png" alt="Trainers coaching members during battle rope training" className="careerHeaderImage" />
                    </div>

                    <div className="careerHeaderFloatCard careerHeaderFloatCardTop">
                        <span>Coaching</span>
                        <strong>Lead from the floor</strong>
                    </div>

                    <div className="careerHeaderFloatCard careerHeaderFloatCardBottom">
                        <span>Growth</span>
                        <strong>Learn, teach, repeat</strong>
                    </div>
                </div>
            </div>
        </section>
    )
}