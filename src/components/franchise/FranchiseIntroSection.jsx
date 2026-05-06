import { useNavigate } from "react-router"
import "./FranchiseIntroSection.css"

export function FranchiseIntroSection() {
    const navigate = useNavigate()

    return (
        <section className="franchiseIntroSection" aria-labelledby="franchise-intro-heading">
            <div className="franchiseIntroInner">
                <div className="franchiseIntroContent">
                    <h2 id="franchise-intro-heading">
                        Build Your <span>Fitness Empire</span>
                        <br />
                        At <span>3RD GEN</span>
                    </h2>

                    <p>
                        We believe fitness is not just about lifting weights it&apos;s about building strength,
                        confidence, and a healthier lifestyle. Our gym is designed to motivate you at every step,
                        whether you&apos;re a beginner or a seasoned athlete. We offer a fully equipped training space,
                        expert-certified trainers, and a supportive environment that pushes you to become the best
                        version of yourself. From strength training and cardio to functional workouts and personal
                        training, we focus on results-driven fitness programs tailored to your goals.
                    </p>

                    <button type="button" className="franchiseIntroBtn" onClick={() => navigate("/contact")}>
                        Enquire Now
                        <span aria-hidden="true">›</span>
                    </button>
                </div>

                <div className="franchiseIntroVisual" aria-hidden="true">
                    <div className="franchiseIntroImageTallWrap">
                        <img src="/three.jpeg" alt="" className="franchiseIntroImageTall" />
                    </div>

                    <div className="franchiseIntroImageMainWrap">
                        <img src="/one.jpeg" alt="" className="franchiseIntroImageMain" />
                    </div>
                </div>
            </div>
        </section>
    )
}