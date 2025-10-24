/**
 * Centralized animation configurations for consistent, modern animations
 * across the entire application with responsive support
 */

// Detect if user prefers reduced motion
const prefersReducedMotion =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Detect mobile viewport
const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

/**
 * Modern spring-based easing configurations
 * Using spring physics for natural, fluid motion
 */
export const springConfig = {
  // Quick and snappy for hero sections
  hero: {
    type: 'spring',
    stiffness: 100,
    damping: 15,
    mass: 0.8,
  },
  // Smooth and fluid for content
  smooth: {
    type: 'spring',
    stiffness: 80,
    damping: 18,
    mass: 1,
  },
  // Gentle for cards and items
  gentle: {
    type: 'spring',
    stiffness: 60,
    damping: 20,
    mass: 1.2,
  },
} as const

/**
 * Tween-based easing for situations where spring isn't ideal
 */
export const tweenConfig = {
  // Fast and responsive
  fast: {
    duration: 0.4,
    ease: [0.25, 0.46, 0.45, 0.94], // easeOutQuad
  },
  // Medium pace for most content
  medium: {
    duration: 0.5,
    ease: [0.16, 1, 0.3, 1], // easeOutExpo
  },
  // Slower for emphasis
  slow: {
    duration: 0.6,
    ease: [0.16, 1, 0.3, 1], // easeOutExpo
  },
} as const

/**
 * Consistent offset values for fade animations
 */
const offsets = {
  small: isMobile ? 12 : 16,
  medium: isMobile ? 16 : 24,
  large: isMobile ? 20 : 32,
} as const

/**
 * Hero section animations - first content users see
 * Fast, confident entrance
 */
export const heroAnimations = {
  initial: { opacity: 0, y: offsets.medium },
  animate: { opacity: 1, y: 0 },
  transition: prefersReducedMotion ? { duration: 0.01 } : tweenConfig.fast,
}

/**
 * Stats or feature items with stagger
 */
export const staggerItemAnimation = (index: number) => ({
  initial: { opacity: 0, y: offsets.small },
  animate: { opacity: 1, y: 0 },
  transition: prefersReducedMotion
    ? { duration: 0.01 }
    : {
        ...tweenConfig.fast,
        delay: 0.1 + index * 0.05,
      },
})

/**
 * Scroll-triggered animations with whileInView
 * Smoother, more subtle for content in viewport
 */
export const scrollFadeIn = {
  initial: { opacity: 0, y: offsets.medium },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2, margin: '0px 0px -50px 0px' },
  transition: prefersReducedMotion ? { duration: 0.01 } : tweenConfig.medium,
}

/**
 * Card animations with stagger for grid layouts
 */
export const cardAnimation = (index: number) => ({
  initial: { opacity: 0, y: offsets.medium },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15, margin: '0px 0px -50px 0px' },
  transition: prefersReducedMotion
    ? { duration: 0.01 }
    : {
        ...tweenConfig.medium,
        delay: index * 0.06,
      },
})

/**
 * Horizontal slide animations
 */
export const slideFromLeft = {
  initial: { opacity: 0, x: isMobile ? -16 : -24 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.2, margin: '0px 0px -50px 0px' },
  transition: prefersReducedMotion ? { duration: 0.01 } : tweenConfig.medium,
}

export const slideFromRight = {
  initial: { opacity: 0, x: isMobile ? 16 : 24 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.2, margin: '0px 0px -50px 0px' },
  transition: prefersReducedMotion ? { duration: 0.01 } : tweenConfig.medium,
}

/**
 * Section animations with larger offset
 */
export const sectionAnimation = {
  initial: { opacity: 0, y: offsets.large },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15, margin: '0px 0px -80px 0px' },
  transition: prefersReducedMotion ? { duration: 0.01 } : tweenConfig.slow,
}

/**
 * Hover animations for interactive elements
 */
export const hoverLift = {
  whileHover: prefersReducedMotion
    ? {}
    : {
        y: -6,
        transition: { duration: 0.25, ease: [0.34, 1.56, 0.64, 1] as const }, // easeOutBack
      },
}

export const hoverLiftSubtle = {
  whileHover: prefersReducedMotion
    ? {}
    : {
        y: -4,
        transition: { duration: 0.2, ease: [0.34, 1.56, 0.64, 1] as const },
      },
}
