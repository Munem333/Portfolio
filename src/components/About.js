import React from 'react'
import data from '../data/data.json'
import { motion } from 'framer-motion'

const About = () => {
    const { aboutDescription, aboutImage } = data.data

    return (
        <motion.section 
            id="about" 
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
                    About
                </motion.h2>
                <div className="mt-6 grid md:grid-cols-3 gap-6 items-center">
                    <motion.div 
                        className="md:col-span-2 space-y-4 text-spacex-text-gray"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
                    >
                        {aboutDescription.map((p, i) => (
                            <motion.p 
                                key={i} 
                                className="leading-relaxed"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                            >
                                {p}
                            </motion.p>
                        ))}
                    </motion.div>
                    <motion.div 
                        className="flex justify-center md:justify-end"
                        initial={{ opacity: 0, scale: 0.8, x: 50 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
                    >
                        <motion.img 
                            src={aboutImage ? `/images/about/${aboutImage}` : '/images/about/pp.jpg'} 
                            alt="about" 
                            className="w-56 h-72 md:w-64 md:h-80 rounded-lg object-cover shadow"
                            whileHover={{ 
                                scale: 1.05,
                                boxShadow: "0 20px 40px rgba(255, 255, 255, 0.1)"
                            }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}

export default About
