'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { experience } from '@/lib/data'
import styles from './Experience.module.scss'

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className={styles.experience} ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className={styles.heading}
      >
        <p className="section-label section-label--dark">04 — Experience</p>
        <h2 >WHERE I'VE<br />WORKED</h2>
      </motion.div>

      <div className={styles.timeline}>
        {experience.map((exp, i) => (
          <motion.div
            key={exp.role}
            className={styles.item}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.15 + 0.3 }}
          >
            <div className={styles.dot} />
            <div className={styles.date}>{exp.date}</div>
            <div className={styles.role}>{exp.role}</div>
            <div className={styles.company}>{exp.company} · {exp.type}</div>
            <div className={styles.desc}>{exp.desc}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
