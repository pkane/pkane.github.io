'use client'

import { useState } from 'react'
import styles from './Contact.module.scss'
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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      if (!response.ok) {
        throw new Error('Failed to send message')
      }
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={styles.contactPage}>
      <div className={styles.container}>
        <MotionWrapper
          className={styles.hero}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <MotionWrapper variants={itemVariants}>
            <h1 className={styles.title}>Get In Touch</h1>
          </MotionWrapper>
          <MotionWrapper variants={itemVariants}>
            <p className={styles.subtitle}>
              Ready to start your next project? Let&apos;s discuss how we can help bring your vision to life.
            </p>
          </MotionWrapper>
        </MotionWrapper>

        <section className={styles.content}>
          <div className={styles.grid}>
            <MotionWrapper variants={contentContainerVariants} initial="hidden" whileInView="visible" viewport={{ amount: 0.4 }} className={styles.info}>
              <MotionWrapper variants={itemVariants}>
                <h2>Let&apos;s Work Together</h2>
              </MotionWrapper>
              <MotionWrapper variants={itemVariants}> 
                <p>
                  Whether you need a complete brand overhaul, a new website, or just want to
                  chat about your ideas, we&apos;d love to hear from you. Every great project
                  starts with a conversation.
                </p>
              </MotionWrapper>
              <MotionWrapper variants={itemVariants}>
                <div className={styles.contactItem}>
                  <h3>Office</h3>
                  <MotionWrapper variants={itemVariants}>
                    <address>
                      Kane Creative<br />
                      3564 Sutton Heights Cir<br />
                      Fairfax, VA 22030
                    </address>
                  </MotionWrapper>
                </div>
              </MotionWrapper>
            </MotionWrapper>

            <MotionWrapper variants={contentContainerVariants} initial="hidden" whileInView="visible" viewport={{ amount: 0.4 }} className={styles.formSection}>
              <form className={styles.form} onSubmit={handleSubmit}>
                <MotionWrapper variants={itemVariants} className={styles.formGroup}>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? styles.error : ''}
                  />
                  {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
                </MotionWrapper>

                <MotionWrapper variants={itemVariants} className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? styles.error : ''}
                  />
                  {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
                </MotionWrapper>

                <MotionWrapper variants={itemVariants} className={styles.formGroup}>
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={errors.subject ? styles.error : ''}
                  />
                  {errors.subject && <span className={styles.errorMessage}>{errors.subject}</span>}
                </MotionWrapper>

                <MotionWrapper variants={itemVariants} className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? styles.error : ''}
                  ></textarea>
                  {errors.message && <span className={styles.errorMessage}>{errors.message}</span>}
                </MotionWrapper>

                <MotionWrapper variants={itemVariants}>
                  <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                  {submitStatus === 'success' && (
                    <p className={styles.successMessage}>Message sent successfully! We&apos;ll get back to you soon.</p>
                  )}
                  {submitStatus === 'error' && (
                    <p className={styles.errorMessage}>Failed to send message. Please try again or email us directly.</p>
                  )}
                </MotionWrapper>
              </form>
            </MotionWrapper>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Contact