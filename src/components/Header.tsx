import React from 'react'
import Menu from './Menu'
import styles from './Header.module.scss'
import classNames from 'classnames'

interface IProps {
  theme: string
  changeTheme: any
}

const Header = (props: IProps) => {
  const router = window.location
  const [mute, setMute] = React.useState<boolean>(true)
  const toggleMute = (mute: boolean) => {
    localStorage.setItem('muted', `${mute}`)
    if (mute) {
      setMute(mute)
      if (router.pathname === '/')
        document.getElementsByTagName('audio')[0].volume = 0
    } else {
      setMute(mute)
      if (router.pathname === '/')
        document.getElementsByTagName('audio')[0].volume = 1
    }
  }
  React.useEffect(() => {
    if (
      !localStorage.getItem('muted') ||
      localStorage.getItem('muted') === 'true'
    ) {
      toggleMute(true)
    }
    if (localStorage.getItem('muted') === 'false') {
      toggleMute(false)
    }
  }, [])
  return (
    <header>
      <Menu />
      <div className={styles.settings}>
        <a
          id="speaker"
          className={classNames(styles.speaker, mute ? styles.mute : '')}
          onClick={() => toggleMute(!mute)}
        >
          <span />
        </a>
        <label id="switch" className={styles.switch}>
          <input
            type="checkbox"
            onChange={props.changeTheme}
            id="slider"
            checked={props.theme === 'light'}
          />
          <span className={classNames(styles.slider, styles.round)} />
        </label>
      </div>
    </header>
  )
}

export default Header
