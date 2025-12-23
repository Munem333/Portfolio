import React from 'react'
import data from '../data/data.json'
import { motion } from 'framer-motion'

const Experience = () => {
  const { experience } = data.data

  return (
    <motion.section 
      id="experience" 
      className="py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="container-max">
        <motion.h2 
          className="text-2xl font-semibold text-spacex-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>
        <div className="mt-6 space-y-4">
          {experience.map((e, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }}
              whileHover={{ 
                x: 10,
                boxShadow: "0 10px 30px rgba(255, 255, 255, 0.1)"
              }}
              className="p-4 border border-spacex-light-gray rounded bg-spacex-gray spacex-glow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-spacex-text">{e.role} — {e.company}</h3>
                  <p className="text-sm text-spacex-text-gray mt-1">{e.duration}</p>
                </div>
              </div>
              <ul className="mt-3 list-disc ml-5 text-spacex-text-gray">
                {e.achievements.map((a, idx) => <li key={idx}>{a}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Experience
