import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import classNames from 'classnames'
import styles from './Menu.module.scss'

const Menu = () => {
  const path = useLocation().pathname
  return (
    <nav>
      <ul className={styles.menu}>
        <li
          className={classNames(styles.menuItem, path === '/' && styles.active)}
        >
          <NavLink to="/">обо мне</NavLink>
        </li>
        <li
          className={classNames(
            styles.menuItem,
            /post+|blog/.test(path) && styles.active
          )}
        >
          <NavLink to="/blog" className={styles.menuItem}>
            блог
          </NavLink>
        </li>
        <li
          className={classNames(
            styles.menuItem,
            path === '/music' && styles.active
          )}
        >
          <NavLink to="/music" className="menu-item">
            музыка
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
