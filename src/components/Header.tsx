import React from 'react'
import Menu from './Menu'

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
      <div className="settings">
        <a
          id="speaker"
          className={mute ? 'speaker mute' : 'speaker'}
          onClick={() => toggleMute(!mute)}
        >
          <span />
        </a>
        <label id="switch" className="switch">
          <input
            type="checkbox"
            onChange={props.changeTheme}
            id="slider"
            checked={props.theme === 'light'}
          />
          <span className="slider round" />
        </label>
      </div>
    </header>
  )
}

export default Header
