'use client'

import { motion } from 'framer-motion'
import styles from './Hero.module.scss'
import Image from "next/image";
const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 40 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.gridBg} />
      <div className={styles.glow1} />
      <div className={styles.glow2} />

      <div className={styles.content}>
        <motion.p className={styles.tag} {...fadeUp(0.2)}>
          Frontend Developer — Open to Work
        </motion.p>

        <motion.h1 className={styles.name} {...fadeUp(0.4)}>
          RAHUL<br />
          <span className={styles.cyan}>SHARMA</span>
        </motion.h1>

        <motion.p className={styles.role} {...fadeUp(0.6)}>
          I BUILD FOR THE WEB
        </motion.p>

        <motion.p className={styles.desc} {...fadeUp(0.8)}>
          Crafting pixel-perfect, performant digital experiences with React,
          modern CSS, and a relentless eye for detail.
        </motion.p>

        <motion.div className={styles.actions} {...fadeUp(1.0)}>
          <a href="#projects" className={styles.btnPrimary}>View My Work</a>
          <a href="#contact"  className={styles.btnSecondary}>Let's Talk</a>
        </motion.div>
      </div>
      <div className={styles.image}>
        <motion.div  {...fadeUp(1.0)}>
         <Image
            src="/skills-images.png"
            alt="skill"
         
            width="900"
            height="600"
          />
        </motion.div>
      </div>

      <motion.div
        className={styles.scroll}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
      >
        <span>Scroll</span>
        <div className={styles.scrollLine} />
      </motion.div>
    </section>
  )
}
