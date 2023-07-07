import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
// Style
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Navbar.scss'

// Images
import Logo from '../assets/images/logo.svg'
import menubar from '../assets/images/icon-menu.svg'
import closemenu from '../assets/images/icon-menu-close.svg'
// Pages


export const Home = () => {


  const [shownMenu, setShownMenu] = useState(false)
  const showMenu = () => {
    setShownMenu(true)
    document.querySelector('body').classList.add('active')
  }

  const closeMenu = () => {
    setShownMenu(false)
    document.querySelector('body').classList.remove('active')
  }

 
  return (
      <header>
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <button onClick={showMenu} className="showMenuBar">
         <img src={menubar} alt="" />
        </button>
        <nav className={shownMenu ? 'show-menu' : ''}>

          <button onClick={closeMenu} className="showCloseBtn">
            <img src={closemenu} alt="" />
          </button>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/popular">Popular</Link>
            </li>
            <li>
              <Link to="/trending">Trending</Link>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
          </ul>
        </nav>
      </header>
  )
}

export default Home;