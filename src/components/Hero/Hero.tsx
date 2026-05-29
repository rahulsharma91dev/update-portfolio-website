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

      {/* LEFT — Text */}
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
          <a href="#contact" className={styles.btnSecondary}>Let's Talk</a>
        </motion.div>
      </div>

      {/* RIGHT — Image */}
      <motion.div
        className={styles.imageWrapper}
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={styles.imageFrame}>
          <Image
            src="/skills-images.png"      
            alt="Rahul Sharma"
            fill
            priority
            className={styles.image}
            sizes="(max-width: 768px) 100vw, 100vw"
          />
          <div className={styles.imageBorder} />
          <div className={styles.imageGlow} />
        </div>

        {/* Floating badge */}
        <motion.div
          className={styles.badge}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className={styles.badgeDot} />
          Available for Work
        </motion.div>
      </motion.div>

      <div className={styles.scroll}>
        <span>Scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  
  )
}
