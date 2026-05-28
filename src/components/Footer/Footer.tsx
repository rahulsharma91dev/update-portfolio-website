import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.text}>© 2025 itsrahulsharma.com — All rights reserved</span>
      <span className={styles.logo}>RS</span>
      <span className={styles.text}>Designed & Built by Rahul Sharma</span>
    </footer>
  )
}
