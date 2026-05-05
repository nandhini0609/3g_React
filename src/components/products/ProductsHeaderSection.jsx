import "./ProductsHeaderSection.css"

export function ProductsHeaderSection({ onExploreClick }) {
    return (
        <section className="productsHeaderSection" aria-labelledby="products-page-heading">
            <div className="productsHeaderInner">
                <p className="productsHeaderOverline">3G FITNESS STORE</p>
                <h1 id="products-page-heading">Products</h1>
                <p className="productsHeaderCopy">
                    Fuel your training with handpicked supplements, accessories, and essentials used by our coaches and members.
                </p>
                <button type="button" className="productsHeaderBtn" onClick={onExploreClick}>Explore Products &gt;&gt;</button>
            </div>
        </section>
    )
}
