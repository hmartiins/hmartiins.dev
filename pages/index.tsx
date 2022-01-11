import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.headerText}>hmartiins.dev</h1>

        <section className={styles.section}>
          <Image
            className={styles.profileImage}
            src="https://avatars.githubusercontent.com/u/51277667?v=4"
            alt="My Face"
            width={100}
            height={100}
          />

          <span className={styles.textSection}>
            Blog pessoal de Henrique Martins,<br /> aqui eu posto alguns artigos que eu escrevo
          </span>
        </section>
      </header>
    </div>
  )
}

export default Home
