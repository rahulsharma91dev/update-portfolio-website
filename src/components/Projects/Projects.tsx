'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { projects } from '@/lib/data'
import styles from './Projects.module.scss'

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className={styles.projects} ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className={styles.heading}
      >
        <p className="section-label">03 — Projects</p>
        <h2 >THINGS I'VE<br />BUILT</h2>
      </motion.div>

      <div className={styles.grid}>
        {projects.map((p, i) => (
          <motion.div
            key={p.num}
            className={styles.card}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            whileHover={{ y: -8 }}
          >
            <div className={styles.topLine} />
            <div className={styles.num}>{p.num}</div>
            <h3 className={styles.title}>{p.title}</h3>
            <p className={styles.desc}>{p.desc}</p>
            <div className={styles.tags}>
              {p.tags.map(tag => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
            {/* <div className={styles.links}>
              <a href={p.live}   className={styles.link}>Live Demo</a>
              <a href={p.github} className={styles.link}>GitHub</a>
            </div> */}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
