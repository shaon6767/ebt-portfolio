import React, { useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion"

const skillsLeft = [
  { name: "PHOTOSHOP", percent: 100 },
  { name: "FIGMA", percent: 95 },
  { name: "ADOBE XD", percent: 60 },
  { name: "ADOBE ILLUSTRATOR", percent: 70 },
]

const skillsRight = [
  { name: "PHOTOSHOP", percent: 100 },
  { name: "FIGMA", percent: 95 },
  { name: "ADOBE XD", percent: 60 },
  { name: "ADOBE ILLUSTRATOR", percent: 70 },
]

const SkillBar = ({ name, percent, animate }) => (
  <div className="mb-8 font-rajdhani">
    <div className="flex justify-between mb-2">
      <span className="text-sm font-medium dark:text-white">
        {name}
      </span>
      <span className="text-sm font-medium dark:text-white">
        {percent}%
      </span>
    </div>

    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
      <div
        className="h-2 bg-red-500 rounded-full transition-all duration-1000 ease-out"
        style={{
          width: animate ? `${percent}%` : "0%",
          backgroundColor: '#ef4444',
        }}
      />
    </div>
  </div>
)

const Skills = () => {
  const sectionRef = useRef(null)
  const [hasBeenVisible, setHasBeenVisible] = useState(false)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasBeenVisible(true)
          setTimeout(() => {
            setAnimate(true)
          }, 50)
        } else {
          setHasBeenVisible(false)
          setAnimate(false)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 px-6 md:px-16"
    >

      <motion.div
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-10">
            Design Skill
          </h2>
          {skillsLeft.map((skill, index) => (
            <SkillBar 
              key={index} 
              {...skill} 
              animate={animate}
            />
          ))}
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-10">
            Development Skill
          </h2>
          {skillsRight.map((skill, index) => (
            <SkillBar 
              key={index} 
              {...skill} 
              animate={animate}
            />
          ))}
        </div>

      </motion.div>

    </section>
  )
}

export default Skills