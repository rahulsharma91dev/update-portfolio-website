'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills } from '@/lib/data'
import styles from './Skills.module.scss'

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className={styles.skills} ref={ref}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <p className="section-label section-label--dark">02 — Tech Stack</p>
        <h2 className={styles.heading}>WHAT I<br />WORK WITH</h2>
      </motion.div>

      <div className={styles.grid}>
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            className={styles.chip}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            whileHover={{ y: -6, borderColor: 'var(--cyan)' }}
          >
            <div className={styles.icon}>{skill.icon}</div>
            <div className={styles.name}>{skill.name}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
