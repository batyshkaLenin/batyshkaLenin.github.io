import { action, observable } from 'mobx'

class LocalStorageStoreService {
  @observable theme: 'dark' | 'light' = 'dark'
  @observable sound: boolean = false
  @observable shake: boolean = false

  constructor() {
    if (
      !localStorage.getItem('theme') ||
      localStorage.getItem('theme') === 'dark'
    ) {
      this.setTheme('dark')
    }
    if (localStorage.getItem('theme') === 'light') {
      this.setTheme('light')
    }
    if (
      !localStorage.getItem('muted') ||
      localStorage.getItem('muted') === 'true'
    ) {
      this.setSound(true)
    }
    if (localStorage.getItem('muted') === 'false') {
      this.setSound(false)
    }
  }

  @action shakeSound = () => {
    this.shake = true
    setTimeout(() => (this.shake = false), 1000)
  }

  @action changeTheme = () =>
    this.theme === 'dark' ? this.setTheme('light') : this.setTheme('dark')

  @action changeSound = () =>
    this.sound ? this.setSound(false) : this.setSound(true)

  @action setTheme(theme: 'dark' | 'light') {
    this.theme = theme
    localStorage.setItem('theme', theme)
    document.body.setAttribute('data-theme', theme)
  }
  @action setSound(mute: boolean) {
    this.sound = mute
    localStorage.setItem('muted', `${mute}`)
    const audios: HTMLCollectionOf<HTMLAudioElement> = document.getElementsByTagName(
      'audio'
    )
    if (audios.length) {
      Array.from(audios, audio => (audio.volume = mute ? 0 : 1))
    }
  }
}

export default new LocalStorageStoreService()
