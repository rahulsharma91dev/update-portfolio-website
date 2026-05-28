'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { navLinks } from '@/lib/data'
import styles from './Navbar.module.scss'

export default function Navbar() {
  return (
    <motion.nav
      className={styles.nav}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className={styles.logo}>
        <span>rahul</span>.sharma<span className={styles.blink}>_</span>
      </div>

      <ul className={styles.links}>
        {navLinks.map((link, i) => (
          <motion.li
            key={link.href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i + 0.4 }}
          >
            <a href={link.href}>{link.label}</a>
          </motion.li>
        ))}
      </ul>

      <motion.a
        href="/resume.pdf"
        className={styles.cta}
        download
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        whileHover={{ scale: 1.04 }}
      >
        Download CV
      </motion.a>
    </motion.nav>
  )
}
