import React, { useEffect, useState } from 'react'
import Nav from "./Nav"
import "./styles/Header.scss"
import { useTheme } from '../../context/ThemeContext'
import FixedTop from './FixedTop'
const Header = () => {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    handleScroll()

    window.addEventListener('scroll',handleScroll)

  }, [])

  return (
    <header className={`${scrolled? "scroll":"" }`}>
      <div className="inner">
        <h4>LOGO</h4>
        <div className="right-wrap">
          <button className='mob-nav-btn'>
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </button>
          <Nav />
         <button className="btn" onClick={toggleTheme}>
            {theme === "dark" ? "☀️" : "🌑"}
          </button>

        </div>
      </div>
      <FixedTop/>
    </header>
  )
}

export default Header