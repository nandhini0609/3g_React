import { Routes, Route } from 'react-router'
import { Home } from './Pages/Home'
import { Contact } from './Pages/ContactPage'
import { AboutPage } from './Pages/AboutPage'
import { ServicesPage } from './Pages/ServicesPage'
import { ProductsPage } from './Pages/ProductsPage'
import { CareerPage } from './Pages/CareerPage'
import { FranchisePage } from './Pages/FranchisePage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<AboutPage />}></Route>
      <Route path="services" element={<ServicesPage />}></Route>
      <Route path="products" element={<ProductsPage />}></Route>
      <Route path="career" element={<CareerPage />}></Route>
      <Route path="franchise" element={<FranchisePage />}></Route>
      <Route path="contact" element={<Contact />}></Route>
    </Routes>
  )


}

export default App
