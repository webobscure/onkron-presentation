import React, { useState } from 'react'
import './Header.css'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div className="announcement-bar">Hier wird Ihr Text stehen</div>
      <header className="header">
        <div className="container">
          <a href="/" className="logo">
            <img
              src="https://onkron.de/cdn/shop/t/19/assets/onkron_rgb.svg?v=93925287087293842091741168169/"
              alt="Логотип"
            />
          </a>
          <nav className={menuOpen ? 'nav open' : 'nav'}>
            <ul>
              <li>
                <a href="#services">Dienstleistungen</a>
              </li>
              <li>
                <a href="#logistics">Lieferung und Logistik</a>
              </li>
              <li>
                <a href="#pricing">Honorare und Kosten</a>
              </li>
              <li>
                <a href="#about">Über das Unternehmen</a>
              </li>
            </ul>
          </nav>
          <button className="burger" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
    </>
  )
}

export default Header
