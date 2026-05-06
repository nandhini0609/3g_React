import "./ProductsHeaderSection.css"

export function ProductsHeaderSection({ onExploreClick }) {
    return (
        <section className="productsHeaderSection" aria-labelledby="products-page-heading">
            <div className="productsHeaderInner">
                <div className="productsHeaderContent">
                    <p className="productsHeaderOverline">3G FITNESS STORE</p>
                    <h1 id="products-page-heading">Products</h1>
                    <p className="productsHeaderCopy">
                        Fuel your training with handpicked supplements, accessories, and essentials used by our coaches and members.
                    </p>

                    <div className="productsHeaderHighlights" aria-label="Product highlights">
                        <div>
                            <strong>Supplements</strong>
                            <span>Pre-workout, protein, recovery</span>
                        </div>
                        <div>
                            <strong>Accessories</strong>
                            <span>Gloves, belts, wraps, mats</span>
                        </div>
                        <div>
                            <strong>Essentials</strong>
                            <span>Everyday gear for better sessions</span>
                        </div>
                    </div>

                    <button type="button" className="productsHeaderBtn" onClick={onExploreClick}>
                        Explore Products &gt;&gt;
                    </button>
                </div>

                <div className="productsHeaderVisual" aria-hidden="true">
                    <div className="productsHeaderVisualGlow" />
                    <div className="productsHeaderImageFrame">
                        <img
                            src="/four.jpeg"
                            alt="Athlete training in a gym with dumbbells in the foreground"
                            className="productsHeaderImage"
                        />
                    </div>

                    <div className="productsHeaderFloatCard productsHeaderFloatCardTop">
                        <span>New arrivals</span>
                        <strong>Equipment curated for daily training</strong>
                    </div>

                    <div className="productsHeaderFloatCard productsHeaderFloatCardBottom">
                        <span>Top picks</span>
                        <strong>Built for performance and recovery</strong>
                    </div>
                </div>
            </div>
        </section>
    )
}
