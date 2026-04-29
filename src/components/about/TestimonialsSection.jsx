import { useState } from "react"
import "./TestimonialsSection.css"

const testimonials = [
    {
        quote:
            "This is an excellent facility for workouts, equipped with first-class equipment and supported by highly trained trainers who motivate and guide us towards achieving our goals. A special thanks to Mr. Praveen for offering such a gym at a reasonable price.",
        author: "Agilesh GS",
    },
    {
        quote:
            "The coaching is structured, the equipment is top-tier, and the atmosphere keeps you consistent. The team pushes you without making the space feel intimidating.",
        author: "Nandhini P",
    },
    {
        quote:
            "A clean, focused gym with trainers who actually pay attention. I saw better strength and energy within the first few weeks.",
        author: "Karthik R",
    },
]

export function TestimonialsSection() {
    const [activeIndex, setActiveIndex] = useState(0)

    const previousTestimonial = () => {
        setActiveIndex((currentIndex) => (currentIndex - 1 + testimonials.length) % testimonials.length)
    }

    const nextTestimonial = () => {
        setActiveIndex((currentIndex) => (currentIndex + 1) % testimonials.length)
    }

    return (
        <section className="testimonialsSection" aria-labelledby="testimonials-heading">
            <div className="testimonialsInner">
                <h2 id="testimonials-heading">
                    Real <span>Stories.</span> Honest <span>Results.</span>
                </h2>

                <div className="testimonialsCarousel" aria-live="polite">
                    <div
                        className="testimonialsTrack"
                        style={{ transform: `translateX(-${activeIndex * 84}%)` }}
                    >
                        {testimonials.map((testimonial) => (
                            <article className="storyCard" key={testimonial.author}>
                                <div className="storyQuoteMark" aria-hidden="true">
                                    “
                                </div>
                                <p className="storyQuote">{testimonial.quote}</p>
                                <p className="storyAuthor">{testimonial.author}</p>
                            </article>
                        ))}
                    </div>
                </div>

                <div className="storyControls" aria-label="Testimonial navigation">
                    <button
                        type="button"
                        className="storyButton"
                        onClick={previousTestimonial}
                        aria-label="Previous testimonial"
                    >
                        ←
                    </button>
                    <button
                        type="button"
                        className="storyButton"
                        onClick={nextTestimonial}
                        aria-label="Next testimonial"
                    >
                        →
                    </button>
                </div>
            </div>
        </section>
    )
}