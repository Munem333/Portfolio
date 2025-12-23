import React from 'react'
import data from '../data/data.json'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { motion } from 'framer-motion'

function Skills() {
    const { skills } = data.data

    return (
        <motion.section 
            id="skills" 
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
                    Skills
                </motion.h2>
                <div className="mt-6 grid gap-6 md:grid-cols-3">
                    {skills.map((group, idx) => (
                        <motion.div 
                            key={idx} 
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: idx * 0.1, duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }}
                            whileHover={{ 
                                y: -5,
                                boxShadow: "0 10px 30px rgba(255, 255, 255, 0.1)"
                            }}
                            className="p-4 border border-spacex-light-gray rounded-lg bg-spacex-gray shadow spacex-glow"
                        >
                            <h3 className="font-medium mb-3 text-spacex-text">{group.title}</h3>
                            <div className="space-y-3">
                                {group.skillname.map((s, i) => (
                                    <div key={i} className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <img 
                                                src={`/images/icons/${s.image}.png`} 
                                                alt={s.name} 
                                                className="w-8 h-8 object-contain" 
                                                onError={(e) => { 
                                                    if (!e.target.src.includes('.svg')) {
                                                        e.target.onerror = null; 
                                                        e.target.src = `/images/icons/${s.image}.svg`;
                                                    }
                                                }} 
                                            />
                                            <span className="text-spacex-text-gray">{s.name}</span>
                                        </div>
                                        <div className="w-20">
                                            <CircularProgressbar value={Math.min(95, 60 + (i * 4))} text={`${Math.min(95, 60 + (i * 4))}%`} styles={buildStyles({textSize:'30px', pathColor:'#ffffff', textColor:'#ffffff'})} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    )
}

export default Skills
