import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import Footer from './pages/Footer.jsx'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './index.css'
import logo from './assets/logog.svg'

export default function App() {
  return (
      <BrowserRouter>
        <header>
          <Link to="/" className="site-logo">
            <img src={logo} alt="logo" className="site-logo-img"/>
          </Link>
          <nav>
            <Link to="/about">About</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/About" element={<About />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
  )
}

