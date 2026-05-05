import { useState } from "react"
import "./ProductsCatalogSection.css"

const products = [
    {
        id: "whey",
        name: "Whey Protein",
        image: "/services/Strength_training.png",
        price: "Rs. 2,499"
    },
    {
        id: "fatburn",
        name: "Fat Burn Stack",
        image: "/services/Weight_loss.png",
        price: "Rs. 1,899"
    },
    {
        id: "resistance",
        name: "Resistance Kit",
        image: "/services/Functional.png",
        price: "Rs. 1,299"
    }
]

export function ProductsCatalogSection() {
    const [activeProduct, setActiveProduct] = useState("")

    return (
        <section className="productsCatalogSection" id="products-catalog" aria-labelledby="products-catalog-heading">
            <div className="productsCatalogInner">
                <h2 id="products-catalog-heading">Featured Products</h2>
                <p className="productsCatalogSub">Tap any Buy button to select a product.</p>

                <div className="productsCatalogGrid">
                    {products.map((item) => (
                        <article className="productCard" key={item.id}>
                            <img src={item.image} alt={item.name} className="productCardImage" />
                            <div className="productCardOverlay" />
                            <div className="productCardBody">
                                <h3>{item.name}</h3>
                                <p>{item.price}</p>
                                <button
                                    type="button"
                                    className="productCardBtn"
                                    onClick={() => setActiveProduct(item.name)}
                                >
                                    Buy Now &gt;&gt;
                                </button>
                            </div>
                        </article>
                    ))}
                </div>

                {activeProduct ? (
                    <p className="productsSelectedMessage" role="status">Selected: {activeProduct}. Our team will help you checkout.</p>
                ) : null}
            </div>
        </section>
    )
}
