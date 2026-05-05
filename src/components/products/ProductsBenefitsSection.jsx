import { useNavigate } from "react-router"
import "./ProductsBenefitsSection.css"

export function ProductsBenefitsSection() {
    const navigate = useNavigate()

    return (
        <section className="productsBenefitsSection" aria-labelledby="products-benefits-heading">
            <div className="productsBenefitsInner">
                <h2 id="products-benefits-heading">Why Buy From 3G</h2>
                <ul>
                    <li>Coach-approved product quality</li>
                    <li>Guidance based on your fitness goal</li>
                    <li>Transparent pricing and recommendations</li>
                </ul>
                <button
                    type="button"
                    className="productsBenefitsBtn"
                    onClick={() => navigate("/contact")}
                >
                    Get Consultation &gt;&gt;
                </button>
            </div>
        </section>
    )
}
