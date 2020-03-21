import React from 'react'
import Layout from 'src/components/Layout'
import styles from './Main.module.scss'

const Main = () => {
  const play = () => {
    const speaker = document.getElementById('speaker')
    if (localStorage.getItem('muted') === 'true') {
      if (speaker) {
        speaker.classList.add('shake')
      }
      setTimeout(() => speaker && speaker.classList.remove('shake'), 1000)
    } else {
      document.getElementsByTagName('audio')[0].play()
    }
  }
  const pause = () => document.getElementsByTagName('audio')[0].pause()
  return (
    <Layout>
      <section className={styles.page}>
        <section className={styles.text}>
          <article>
            <h1 className={styles.name}>Александр Сидоренко</h1>
            <p>
              "Это алхимия!" - говорю я, когда пишу код. Программист, машинист,
              вуаерист. Профессионально выгораю и мастерски чешу левую ногу
              большим пальцем правой ноги. Играю на гитаре. Пока что Макс не
              может придумать больше лоремипсума для этого текста, но я думаю вы
              переживёте.
            </p>
          </article>
        </section>
        <section onMouseOver={play} onMouseOut={pause} className={styles.photo}>
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
}

export default Main
