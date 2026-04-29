import { Routes, Route } from 'react-router'
import { Home } from './Pages/Home'
import { Contact } from './Pages/ContactPage'
import { AboutPage } from './Pages/AboutPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<AboutPage />}></Route>
      <Route path="contact" element={<Contact />}></Route>
    </Routes>
  )


}

export default App
