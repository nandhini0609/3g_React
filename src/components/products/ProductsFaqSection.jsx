import { useState } from "react"
import "./ProductsFaqSection.css"

const faqItems = [
    {
        question: "Can I buy products without gym membership?",
        answer: "Yes. You can purchase products directly from our store with or without a membership."
    },
    {
        question: "Do you suggest products based on goals?",
        answer: "Yes. Our coaches recommend products based on fat loss, strength, recovery, and daily nutrition needs."
    },
    {
        question: "Are products original and sealed?",
        answer: "Absolutely. We provide authentic products from verified distributors only."
    }
]

export function ProductsFaqSection() {
    const [openIndex, setOpenIndex] = useState(0)

    return (
        <section className="productsFaqSection" aria-labelledby="products-faq-heading">
            <div className="productsFaqInner">
                <h2 id="products-faq-heading">Products FAQ</h2>
                <div className="productsFaqList">
                    {faqItems.map((item, index) => {
                        const isOpen = openIndex === index
                        return (
                            <article key={item.question} className={`productsFaqItem ${isOpen ? "isOpen" : ""}`}>
                                <button
                                    type="button"
                                    className="productsFaqQuestion"
                                    onClick={() => setOpenIndex((prev) => (prev === index ? -1 : index))}
                                    aria-expanded={isOpen}
                                >
                                    <span>{item.question}</span>
                                    <span>{isOpen ? "^" : ">"}</span>
                                </button>
                                {isOpen ? <p className="productsFaqAnswer">{item.answer}</p> : null}
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
