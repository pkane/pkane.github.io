'use client'

import Image from 'next/image'
import styles from './PortfolioGallery.module.scss'
import MotionWrapper from './MotionWrapper'

interface PortfolioItem {
  id: number
  title: string
  category: string
  image: string
  description: string
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    }
  }
}

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
}

// Placeholder data - replace with real portfolio items later
const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Brand Identity Design",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=500&h=300&fit=crop&crop=center",
    description: "Complete brand identity system for a tech startup"
  },
  {
    id: 2,
    title: "E-commerce Website",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop&crop=center",
    description: "Modern e-commerce platform with seamless user experience"
  },
  {
    id: 3,
    title: "Mobile App UI",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop&crop=center",
    description: "Intuitive mobile application interface design"
  },
  {
    id: 4,
    title: "Print Campaign",
    category: "Print Design",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&h=300&fit=crop&crop=center",
    description: "Creative print advertising campaign"
  },
  {
    id: 5,
    title: "Logo Collection",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1588059172795-b4fba9e3b012?w=500&h=300&fit=crop&crop=center",
    description: "Collection of distinctive logo designs"
  },
  {
    id: 6,
    title: "Web Application",
    category: "Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&crop=center",
    description: "Custom web application with advanced functionality"
  }
]

const PortfolioGallery = () => {
  return (
    <section className={styles.gallery}>
      <div className={styles.container}>
        <MotionWrapper
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Featured Work</h2>
          <p className={styles.subtitle}>
            A selection of recent projects showcasing creativity and technical expertise
          </p>
        </MotionWrapper>

        <MotionWrapper 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.4 }}
        >
          {portfolioItems.map((item) => (
            <MotionWrapper
              key={item.id}
              className={styles.card}
              variants={itemVariants}
            >
              <div className={styles.imageWrapper}>
                <Image src={item.image} alt={item.title} className={styles.image} width={500} height={500} />
                <div className={styles.overlay}>
                  <div className={styles.overlayContent}>
                    <span className={styles.category}>{item.category}</span>
                    <h3 className={styles.itemTitle}>{item.title}</h3>
                    <p className={styles.description}>{item.description}</p>
                    <button className={styles.viewButton}>View Project</button>
                  </div>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </MotionWrapper>
      </div>
    </section>
  )
}

export default PortfolioGallery