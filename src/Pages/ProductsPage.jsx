import { useRef } from "react"
import { NavbarSection } from "../components/about/NavbarSection"
import { ProductsHeaderSection } from "../components/products/ProductsHeaderSection"
import { ProductsCatalogSection } from "../components/products/ProductsCatalogSection"
import { ProductsBenefitsSection } from "../components/products/ProductsBenefitsSection"
import { ProductsFaqSection } from "../components/products/ProductsFaqSection"
import { ServicesFooterSection } from "../components/services/ServicesFooterSection"
import "../styles/appTokens.css"
import "./ProductsPage.css"

export function ProductsPage() {
    const catalogRef = useRef(null)

    const handleExploreClick = () => {
        catalogRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    }

    return (
        <div className="productsPage">
            <NavbarSection />
            <ProductsHeaderSection onExploreClick={handleExploreClick} />
            <div ref={catalogRef}>
                <ProductsCatalogSection />
            </div>
            <ProductsBenefitsSection />
            <ProductsFaqSection />
            <ServicesFooterSection />
        </div>
    )
}
