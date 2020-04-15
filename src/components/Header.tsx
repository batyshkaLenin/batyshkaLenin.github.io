import React from 'react'
import Menu from './Menu'
import styles from './Header.module.scss'
import classNames from 'classnames'
import { inject, observer } from 'mobx-react'

const Header = inject('localStore')(
  observer(({ localStore }: any) => {
    const { shake, sound, theme, changeTheme, changeSound } = localStore

    return (
      <header>
        <Menu />
        <div className={styles.settings}>
          <a
            id="speaker"
            className={classNames(
              styles.speaker,
              sound ? styles.mute : '',
              shake ? styles.shake : ''
            )}
            onClick={changeSound}
          >
            <span />
          </a>
          <label id="switch" className={styles.switch}>
            <input
              type="checkbox"
              onChange={changeTheme}
              id="slider"
              checked={theme === 'light'}
            />
            <span className={classNames(styles.slider, styles.round)} />
          </label>
        </div>
      </header>
    )
  })
)

export default Header
