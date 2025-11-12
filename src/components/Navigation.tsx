'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import styles from './Navigation.module.scss'
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
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Home' },
    // { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    // { href: '/store', label: 'Store' }
  ]

  return (
    <MotionWrapper
      className={styles.navigation}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={styles.container}>
        <MotionWrapper variants={itemVariants}>
          <Link href="/" className={styles.logo}>
            <Image src="/assets/images/kc-logo.svg" alt="Kane Creative" width={50} height={50} />
          </Link>
        </MotionWrapper>

        <ul className={styles.navList}>
          {navItems.map((item) => (
            <MotionWrapper key={item.href} variants={itemVariants}>
              <li>
                <Link
                  href={item.href}
                  className={`${styles.navLink} ${pathname === item.href ? styles.active : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            </MotionWrapper>
          ))}
        </ul>
      </div>
    </MotionWrapper>
  )
}

export default Navigation