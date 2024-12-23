import { ThemeProvider } from './context/ThemeContext'

import { Footer } from './components/Footer'
import { Header } from './components/Header'

import styles from './app.module.css'

export function App() {

  return (
    <ThemeProvider>
      <Header className={styles.header}/>
      <section className={styles.section}>
        texto príncipal
      </section>
      <Footer className={styles.footer} />
    </ThemeProvider>
  )
}