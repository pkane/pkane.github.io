'use client'

import { useState } from 'react'
import styles from './Store.module.scss'
import MotionWrapper from '@/components/MotionWrapper'
import Image from 'next/image'

interface Product {
  id: number
  name: string
  price: number
  image: string
  description: string
  sizes?: string[]
  colors?: string[]
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
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

const gridContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

const gridItemVariants = {
  hidden: { 
    opacity: 0, 
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
}

// Placeholder merchandise data
const products: Product[] = [
  {
    id: 1,
    name: "Classic Logo Tee",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&crop=center",
    description: "Soft cotton t-shirt with our signature logo design",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Navy"]
  },
  {
    id: 2,
    name: "Creative Hoodie",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop&crop=center",
    description: "Comfortable hoodie perfect for creative sessions",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Grey", "Navy"]
  },
  {
    id: 3,
    name: "Design Mug",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=400&fit=crop&crop=center",
    description: "Ceramic mug with inspirational design quotes"
  },
  {
    id: 4,
    name: "Portfolio Tote Bag",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center",
    description: "Durable canvas tote bag for carrying your creative supplies",
    colors: ["Natural", "Black"]
  },
  {
    id: 5,
    name: "Minimalist Cap",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1588117305388-c2631a279f82?w=400&h=400&fit=crop&crop=center",
    description: "Clean design cap with embroidered logo",
    colors: ["Black", "White", "Navy"]
  },
  {
    id: 6,
    name: "Sticker Pack",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center",
    description: "Collection of creative stickers for laptops and notebooks"
  }
]

const Store = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product)
  }

  return (
    <div className={styles.storePage}>
      <div className={styles.container}>
        <MotionWrapper
          className={styles.hero}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <MotionWrapper variants={itemVariants}>
            <h1 className={styles.title}>Kane Creative Store</h1>
          </MotionWrapper>
          <MotionWrapper variants={itemVariants}>
            <p className={styles.subtitle}>
            Show your creative spirit with our carefully designed merchandise collection
            </p>
          </MotionWrapper>
        </MotionWrapper>        

        <section className={styles.products}>
          <MotionWrapper
            className={styles.grid}
            variants={gridContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.1 }}
          >
            {products.map((product) => (
              <MotionWrapper
                key={product.id}
                className={styles.productCard}
                variants={gridItemVariants}
              >
                <div className={styles.imageWrapper}>
                  <Image src={product.image} alt={product.name} className={styles.image} width={300} height={300} />
                  <div className={styles.overlay}>
                    <button
                      className={styles.viewButton}
                      onClick={() => handleProductClick(product)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
                <div className={styles.productInfo}>
                  <h3 className={styles.productName}>{product.name}</h3>
                  <p className={styles.productPrice}>${product.price}</p>
                  <p className={styles.productDescription}>{product.description}</p>
                </div>
              </MotionWrapper>
            ))}
          </MotionWrapper>
        </section>

        {selectedProduct && (
          <div className={styles.modal} onClick={() => setSelectedProduct(null)}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button
                className={styles.closeButton}
                onClick={() => setSelectedProduct(null)}
              >
                ×
              </button>
              <div className={styles.modalGrid}>
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className={styles.modalImage}
                  width={300}
                  height={300}
                />
                <div className={styles.modalInfo}>
                  <h2>{selectedProduct.name}</h2>
                  <p className={styles.modalPrice}>${selectedProduct.price}</p>
                  <p className={styles.modalDescription}>{selectedProduct.description}</p>

                  {selectedProduct.sizes && (
                    <div className={styles.options}>
                      <h4>Sizes</h4>
                      <div className={styles.optionButtons}>
                        {selectedProduct.sizes.map(size => (
                          <button key={size} className={styles.optionButton}>{size}</button>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedProduct.colors && (
                    <div className={styles.options}>
                      <h4>Colors</h4>
                      <div className={styles.optionButtons}>
                        {selectedProduct.colors.map(color => (
                          <button key={color} className={styles.optionButton}>{color}</button>
                        ))}
                      </div>
                    </div>
                  )}

                  <button className={styles.addToCartButton}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Store