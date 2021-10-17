import styles from './layout.module.css'
import Sidebar from './sidebar.js'

export default function Layout({ children }) {
  return (
    <div className={styles.main}>
      <nav className={styles.sidebar}>
        <Sidebar />
      </nav>

      <main className={styles.content}>
        <div className={styles.contentWrapper}>
          {children}
        </div>
      </main>
    </div>
  )
}
