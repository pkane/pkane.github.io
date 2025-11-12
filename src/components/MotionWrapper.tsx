'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface MotionWrapperProps {
  children: React.ReactNode
  className?: string
  initial?: any
  animate?: any
  transition?: any
  whileHover?: any
  whileInView?: any
  variants?: any
  viewport?: any
}

const MotionWrapper: React.FC<MotionWrapperProps> = ({
  children,
  className = '',
  ...motionProps
}) => {
  return (
    <motion.div className={className} {...motionProps}>
      {children}
    </motion.div>
  )
}

export default MotionWrapper