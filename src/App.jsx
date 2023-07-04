import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import Footer from './pages/Footer.jsx'
import Vans from './pages/Vans.jsx'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './index.css'
import logo from './assets/logog.svg'
import './server.js'
import VanDetails from './pages/VanDetails.jsx'

export default function App() {
  console.log(Routes)
  return (
      <BrowserRouter>
        <header>
          <Link to="/" className="site-logo">
            <img src={logo} alt="logo" className="site-logo-img"/>
          </Link>
          <nav>
            <Link to="/about">About</Link>
            <Link to="/vans">Vans</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/vans" element={<Vans />}/>
          <Route path="/vans/:id" element={<VanDetails />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
  )
}

