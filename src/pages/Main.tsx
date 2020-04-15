import React from 'react'
import Layout from 'src/components/Layout'
import styles from './Main.module.scss'
import { inject, observer } from 'mobx-react'

const Main = inject('localStore')(
  observer(({ localStore }: any) => {
    const { sound, shakeSound } = localStore
    const play = () =>
      sound ? shakeSound() : document.getElementsByTagName('audio')[0].play()

    const pause = () => document.getElementsByTagName('audio')[0].pause()
    return (
      <Layout>
        <section className={styles.page}>
          <section className={styles.text}>
            <article>
              <h1 className={styles.name}>Александр Сидоренко</h1>
              <p>
                "Это алхимия!" - говорю я, когда пишу код. Программист, усопший
                вождь, взломщик. Участвую в хакатонах, соревнованиях по
                информационной безопасности и веду образовательный проект
                Blurred Education. Хочу сыграть ООО "Моя оборона" на всех
                струнных музыкальных инструментах (сейчас сыграл на шести) и
                разработать бомбический проект с командой Blurred Technologies.
              </p>
            </article>
          </section>
          <section
            onMouseOver={play}
            onMouseOut={pause}
            className={styles.photo}
          >
            <img
              className={styles.me}
              src="me.png"
              alt="Александр Сидоренко в мексиканской шляпе и с банджо в руках"
            />
            <audio>
              <source src="banjo.mp3" />
            </audio>
          </section>
        </section>
      </Layout>
    )
  })
)

export default Main
