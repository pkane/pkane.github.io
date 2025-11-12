'use client'

import styles from './About.module.scss'
import MotionWrapper from '@/components/MotionWrapper'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
}

const contentContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.6
    }
  }
}

const delayedContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 1.0
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
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
}

const About = () => {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.container}>
        <MotionWrapper
          className={styles.hero}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <MotionWrapper variants={itemVariants}>
            <h1 className={styles.title}>About Kane Creative</h1>
          </MotionWrapper>
          <MotionWrapper variants={itemVariants}>
            <p className={styles.subtitle}>
              Passionate about creating meaningful digital experiences that make a difference
            </p>
          </MotionWrapper>
        </MotionWrapper>

        <section className={styles.content}>
          <div className={styles.grid}>
            <MotionWrapper variants={contentContainerVariants} initial="hidden" whileInView="visible" viewport={{ amount: 0.4 }} className={styles.story}>
              <MotionWrapper variants={itemVariants}>
                <h2>Our Story</h2>
              </MotionWrapper>
              <MotionWrapper variants={itemVariants}>
                <p>
                  Founded with a mission that every business should have a strong brand that
                  tells a story and resonates with its customers.
                </p>
              </MotionWrapper>
              <MotionWrapper variants={itemVariants}>
                <p>
                  A husband and wife team, Kane&nbsp;Creative has been crafting exceptional digital experiences for over
                  a decade. We believe in the power of design to transform businesses and
                  connect people.
                </p>
              </MotionWrapper>
              <MotionWrapper variants={itemVariants}>
                <p>
                  Our team combines strategic thinking with creative execution, ensuring
                  every project not only looks stunning but also delivers measurable results.
                  From brand identity to web applications, we approach each challenge with
                  fresh perspective and proven expertise.
                </p>
              </MotionWrapper>
            </MotionWrapper>

            <MotionWrapper variants={delayedContainerVariants} initial="hidden" whileInView="visible" viewport={{ amount: 0.4 }} className={styles.values} >
              <MotionWrapper variants={itemVariants}>
                <h2>Our Values</h2>
              </MotionWrapper>
                <MotionWrapper variants={itemVariants}>
                  <div className={styles.valueItem}>
                    <h3>Innovation</h3>
                    <p>Pushing boundaries and exploring new possibilities in every project</p>
                  </div>
                </MotionWrapper>
                <MotionWrapper variants={itemVariants}>
                  <div className={styles.valueItem}>
                    <h3>Quality</h3>
                    <p>Delivering exceptional work that exceeds expectations</p>
                  </div>
                </MotionWrapper>
                <MotionWrapper variants={itemVariants}>
                  <div className={styles.valueItem}>
                    <h3>Collaboration</h3>
                    <p>Working closely with clients to bring their vision to life</p>
                  </div>
                </MotionWrapper>
            </MotionWrapper>
          </div>
        </section>

        <section className={styles.skills}>
          <MotionWrapper variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ amount: 0.4 }}>
            <MotionWrapper variants={itemVariants}>
              <h2>What We Do</h2>
            </MotionWrapper>
            <div className={styles.skillsGrid}>
              <MotionWrapper variants={itemVariants} className={styles.skillCard}>
                  <h3>Brand Identity</h3>
                  <p>Logo design, brand guidelines, and visual identity systems</p>
              </MotionWrapper>
              <MotionWrapper variants={itemVariants} className={styles.skillCard}>
                  <h3>Web Design</h3>
                  <p>Responsive websites and user interface design</p>
              </MotionWrapper>
              <MotionWrapper variants={itemVariants} className={styles.skillCard}>
                  <h3>Development</h3>
                  <p>Custom web applications and e-commerce solutions</p>
              </MotionWrapper>
              <MotionWrapper variants={itemVariants} className={styles.skillCard}>
                  <h3>Print Design</h3>
                  <p>Marketing materials, packaging, and publication design</p>
              </MotionWrapper>
            </div>
          </MotionWrapper>
        </section>
      </div>
    </div>
  )
}

export default About