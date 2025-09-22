'use client'

import React, { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface ScrollDownIndicatorProps {
  targetId?: string
  className?: string
  hideOnScroll?: boolean
}

const ScrollDownIndicator: React.FC<ScrollDownIndicatorProps> = ({
  targetId = 'courses',
  className = '',
  hideOnScroll = true
}) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (!hideOnScroll) return

    const handleScroll = () => {
      const scrolled = window.scrollY > 100
      setIsVisible(!scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [hideOnScroll])

  const scrollToTarget = () => {
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <div
      className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      } ${className}`}
    >
      <button
        onClick={scrollToTarget}
        className="group flex flex-col items-center space-y-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors duration-300"
        aria-label="Cuộn xuống để xem thêm"
      >
        <div className="flex flex-col items-center space-y-1">
          <span className="text-sm font-medium opacity-80">Cuộn xuống</span>
          <div className="relative">
            <div className="absolute inset-0 bg-white dark:bg-gray-900 rounded-full opacity-80 blur-sm"></div>
            <ChevronDown 
              className="relative w-6 h-6 animate-bounce group-hover:animate-pulse" 
              strokeWidth={2}
            />
          </div>
        </div>
        
        {/* Animated line */}
        <div className="w-px h-8 bg-gradient-to-b from-gray-400 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
      </button>
    </div>
  )
}

export default ScrollDownIndicator