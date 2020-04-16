import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer>
      <section className={styles.rights}>
        <div className={styles.copy}>&copy; 2020</div>|
        <div className={styles.design}>
          Designed by <a href="https://vk.com/wemadefrombrokenparts">Meiks</a>
        </div>
      </section>
      <section className={styles.contacts}>
        <ul className={styles.contactList}>
          <li className={styles.contactItem}>
            <a href="https://github.com/batyshkaLenin" rel="me">
              <i className="icon-github-circled" />
            </a>
          </li>
          <li className={styles.contactItem}>
            <a href="https://vk.com/batyshkalenin" rel="me">
              <i className="icon-vkontakte" />
            </a>
          </li>
          <li className={styles.contactItem}>
            <a href="https://soundcloud.com/better_not_be_born" rel="me">
              <i className="icon-soundcloud" />
            </a>
          </li>
          <li className={styles.contactItem}>
            <a href="https://twitter.com/batyshkaLenin" rel="me">
              <i className="icon-twitter" />
            </a>
          </li>
          <li className={styles.contactItem}>
            <a href="https://t.me/batyshka_Lenin" rel="me">
              <i className="icon-telegram" />
            </a>
          </li>
        </ul>
      </section>
    </footer>
  )
}

export default Footer
