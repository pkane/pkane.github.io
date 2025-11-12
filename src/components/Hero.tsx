'use client'

import Image from 'next/image'
import styles from './Hero.module.scss'
import MotionWrapper from './MotionWrapper'
import Link from 'next/link'

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      ease: [0.25, 0.1, 0.25, 1],
      type: "spring", damping: 20, bounce: 0,
      staggerChildren: 0.2,
      delayChildren: 0.5
    }
  }
}

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.25, 0.1, 0.25, 1],
      type: "spring", damping: 20, bounce: 0
    }
  }
}

const Hero = () => {
  return (
    <section className={styles.hero}>
      <MotionWrapper className={styles.container}
          variants={containerVariants}
          initial="hidden"
          animate="visible"      
      >
        <div
          className={styles.content}
        >
          <MotionWrapper variants={itemVariants}>
            <h1 className={styles.title}>
              Small studio. {" "}
              <span className={styles.accent}>Big Design.</span>
            </h1>
          </MotionWrapper>
        </div>
        <MotionWrapper
          className={styles.featured}
          variants={containerVariants}      
          initial="hidden"
          animate="visible"             
        >
          <MotionWrapper variants={itemVariants}>
            <p className={styles.subtitle}>
             We craft beautiful, functional experiences that connect brands with their audiences.
              Specializing in branding, modern web design, and digital solutions.
            </p>
          </MotionWrapper>

          <MotionWrapper 
            className={styles.cta}
            variants={itemVariants}
          >
            {/* <button className={styles.primaryBtn}>See Our Work</button> */}
            <Link href="/contact" className={styles.secondaryBtn}>Get In Touch</Link>
          </MotionWrapper>
        </MotionWrapper>
      </MotionWrapper>
      {/* <MotionWrapper
          className={styles.visual}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className={styles.gradient}></div>
      </MotionWrapper> */}
    </section>
  )
}

export default Hero