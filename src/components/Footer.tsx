import React from 'react'

const Footer = () => {
  return (
    <footer>
      <section className="rights">
        <div className="copy">&copy; 2020</div>|
        <div className="design">
          Designed by <a href="https://vk.com/wemadefrombrokenparts">Meiks</a>
        </div>
      </section>
      <section className="contacts">
        <ul className="contact-list">
          <li className="contact-item">
            <a href="https://github.com/batyshkaLenin" rel="me">
              <i className="icon-github-circled" />
            </a>
          </li>
          <li className="contact-item">
            <a href="https://vk.com/batyshkalenin" rel="me">
              <i className="icon-vkontakte" />
            </a>
          </li>
          <li className="contact-item">
            <a href="https://soundcloud.com/better_not_be_born" rel="me">
              <i className="icon-soundcloud" />
            </a>
          </li>
          <li className="contact-item">
            <a href="https://twitter.com/batyshkaLenin" rel="me">
              <i className="icon-twitter" />
            </a>
          </li>
          <li className="contact-item">
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
