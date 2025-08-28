import React from 'react'
import Nav from "./Nav"
import "./styles/Header.scss"
import { useTheme } from '../../context/ThemeContext'

const Header = () => {
  return (
    <header>
      <div className="inner">
        <h4>LOGO</h4>
        <div className="right-wrap">

          <Nav />
          <button onClick={toggleTheme}>{theme}</button>
        </div>
      </div>
    </header>
  )
}

export default Header