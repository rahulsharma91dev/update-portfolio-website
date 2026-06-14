'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './About.module.scss'

const stats = [
  { num: '10+', label: 'Years Experience' },
  { num: '5', label: 'Projects Built' },
  { num: '5', label: 'Happy Clients' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
    }),
  }

  return (
    <section id="about" className={styles.about} ref={ref}>
      <div className={styles.accent}>RS</div>
      <div className={styles.grid}>
        <motion.div
          custom={0}
          variants={variants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <p className="section-label">01 — About Me</p>
          <h2 className={styles.heading}>
FRONTEND<br />DEVELOPER<br />BY <em>PASSION</em>
          </h2>
        </motion.div>

        <motion.div
          custom={1}
          variants={variants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <p className={styles.text}>
            10+ years. Multiple roles. One constant — building things for the web.
From teaching web design to students, to engineering interfaces at Chetu India Pvt. Ltd., my journey has been hands-on from day one. I've translated mockups into responsive frontends, collaborated with dev and QA teams, and sat in client meetings turning vague requirements into real, working products.
My stack: HTML · CSS · JavaScript · React.js · jQuery · Bootstrap · Responsive Design.

          </p>
          <p className={styles.text}>
         Right now, I'm an Associate Developer — and I'm on a mission to master React.js/Next.js and push my frontend skills to the next level.
          </p>

          <div className={styles.stats}>
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                custom={i + 2}
                variants={variants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
              >
                <div className={styles.statNum}>{s.num}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
