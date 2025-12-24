import React from 'react'
import { motion } from 'framer-motion'

const SpacexEarth = () => {
  return (
    <motion.div
      className="earth-wrapper pointer-events-none"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <div className="earth">
        <div className="earth-core" />
        <div className="earth-glow" />
        <div className="earth-shine" />
        <div className="earth-lines earth-lines-1" />
        <div className="earth-lines earth-lines-2" />
        <div className="earth-spot" />
      </div>
    </motion.div>
  )
}

export default SpacexEarth


