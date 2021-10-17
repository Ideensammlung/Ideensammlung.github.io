import Link from 'next/link'
import { useState } from 'react'
import SidebarMdx from '../_sidebar.mdx'
import styles from './sidebar.module.css'

export default function Sidebar() {
  const [showNav, setShowNav] = useState(false)

  return (
    <div className={`${styles.container} ${showNav ? styles.showNav : ''}`}>
      <div className={styles.logo}>
        <Link href="/">
          Ideensammlung
        </Link>

        <div className={styles.navToggle} onClick={() => setShowNav(!showNav)}>
          Open navigation
        </div>
      </div>

      <nav className={styles.nav} role="navigation">
        <SidebarMdx />
      </nav>
    </div>
  )
}
