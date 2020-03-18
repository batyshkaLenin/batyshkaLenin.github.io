import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <nav>
      <ul className="menu">
        <NavLink to="/" className="menu-item" activeClassName="active">
          обо мне
        </NavLink>
        <NavLink to="/blog" className="menu-item" activeClassName="active">
          блог
        </NavLink>
        <NavLink to="/music" className="menu-item" activeClassName="active">
          музыка
        </NavLink>
      </ul>
    </nav>
  )
}

export default Menu
