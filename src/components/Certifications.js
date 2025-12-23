import React from 'react'
import data from '../data/data.json'
import { motion } from 'framer-motion'

const Certifications = () => {
  const { certifications } = data.data

  return (
    <motion.section 
      id="certifications" 
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
          Certifications
        </motion.h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {certifications.map((cert, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }}
              whileHover={{ 
                y: -5,
                scale: 1.02,
                boxShadow: "0 10px 30px rgba(255, 255, 255, 0.1)"
              }}
              className="p-4 border border-spacex-light-gray rounded bg-spacex-gray spacex-glow"
            >
              <h3 className="font-medium text-spacex-text">{cert.name}</h3>
              <p className="text-sm text-spacex-text-gray mt-1">{cert.issuer} • {cert.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Certifications
 