'use client'

import styles from './Footer.module.scss'
import MotionWrapper from './MotionWrapper'

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      ease: [0.25, 0.1, 0.25, 1],
      type: "spring", 
      damping: 20, 
      bounce: 0,
      staggerChildren: 0.1,
      delayChildren: 0.5
    }
  }
}

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: -10
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.25, 0.1, 0.25, 1],
      type: "spring", 
      damping: 20, 
      bounce: 0
    }
  }
}

const Navigation = () => {
  return (
    <MotionWrapper
      className={styles.navigation}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={styles.container}>
        <p>Copyright 2025 Kane Creative</p>
      </div>
    </MotionWrapper>
  )
}

export default Navigation