'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { email, socials } from '@/lib/data'
import styles from './Contact.module.scss'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className={styles.contact} ref={ref}>
      <div className={styles.bgText}>HI</div>
      <motion.div
        className={styles.inner}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <p className="section-label">05 — Contact</p>
        <h2 className={styles.heading}>
          LET'S<br /><em>WORK</em> TOGETHER
        </h2>
        <h3 className='semi-heading'> Open to Frontend Developer / UI Engineer opportunities.</h3>
        <p className={styles.sub}>
       
          Have a project in mind, a role to fill, or just want to say hello?
          My inbox is always open.
        </p>
        <motion.a
          href={`mailto:${email}`}
          className={styles.email}
          whileHover={{ color: 'var(--cyan-dim)', x: 6 }}
          transition={{ duration: 0.2 }}
        >
          {email}
        </motion.a>
        {/* <div className={styles.socials}>
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              className={styles.social}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 + 0.5 }}
              whileHover={{ color: 'var(--cyan-dim)' }}
            >
              {s.label}
            </motion.a>
          ))}
        </div> */}
      </motion.div>
    </section>
  )
}
