import { useState } from "react"
import "./ServicesFaqSection.css"

const faqItems = [
    {
        question: "Do you offer a free trial or demo session?",
        answer: "Yes, we offer a trial session so you can experience our coaching style and facilities before enrolling."
    },
    {
        question: "How many days per week should I work out?",
        answer: "For most members, 3-5 sessions per week works best depending on goals, recovery, and training experience."
    },
    {
        question: "Is there a separate program for women?",
        answer: "Yes, we provide personalized plans for women including fat loss, strength, mobility, and nutrition guidance."
    },
    {
        question: "How can I enquire or sign up?",
        answer: "You can enquire through our contact page, call us directly, or visit the gym and our team will help you sign up."
    },
    {
        question: "What should I bring on my first day?",
        answer: "Comfortable workout clothes, water, and a towel. We provide everything else."
    }
]

export function ServicesFaqSection() {
    const [openIndex, setOpenIndex] = useState(4)

    const toggleFaq = (index) => {
        setOpenIndex((prev) => (prev === index ? -1 : index))
    }

    return (
        <section className="servicesFaqSection" aria-labelledby="services-faq-heading">
            <div className="servicesFaqInner">
                <h2 id="services-faq-heading">Frequently Asked Questions</h2>

                <div className="servicesFaqList" role="list">
                    {faqItems.map((item, index) => {
                        const isOpen = openIndex === index
                        const answerId = `services-faq-answer-${index}`
                        const questionId = `services-faq-question-${index}`

                        return (
                            <article
                                key={item.question}
                                className={`servicesFaqItem ${isOpen ? "isOpen" : ""}`}
                                role="listitem"
                            >
                                <button
                                    id={questionId}
                                    type="button"
                                    className="servicesFaqQuestion"
                                    aria-expanded={isOpen}
                                    aria-controls={answerId}
                                    onClick={() => toggleFaq(index)}
                                >
                                    <span>{item.question}</span>
                                    <span className="servicesFaqIcon" aria-hidden="true">{isOpen ? "^" : ">"}</span>
                                </button>

                                {isOpen ? (
                                    <p id={answerId} className="servicesFaqAnswer" role="region" aria-labelledby={questionId}>
                                        {item.answer}
                                    </p>
                                ) : null}
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
