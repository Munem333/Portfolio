import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'
import data from '../data/data.json'
import SpacexEarth from './SpacexEarth'

const Hero = () => {
    const { fullName, titleArray, subTitle, resumeLink, profileImage } = data.data

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.6, -0.05, 0.01, 0.99]
            }
        }
    }

    return (
        <motion.section 
            id="top" 
            className="pt-10 relative overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            {/* Subtle background animation */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-20 left-10 w-72 h-72 bg-white opacity-[0.02] rounded-full blur-3xl"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-96 h-96 bg-white opacity-[0.02] rounded-full blur-3xl"
                    animate={{
                        x: [0, -100, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            </div>

            <div className="grid md:grid-cols-2 items-center gap-8 py-12 relative z-10">
                <motion.div variants={itemVariants}>
                    <motion.p 
                        className="text-sm text-spacex-text-gray"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        Hello, I am
                    </motion.p>
                    <motion.h1 
                        className="text-4xl md:text-5xl font-bold mt-2 text-spacex-text"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
                    >
                        {fullName}
                    </motion.h1>
                    <motion.div 
                        className="text-lg text-spacex-text-gray mt-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        <Typewriter words={titleArray} loop={0} cursor cursorStyle='|' typeSpeed={50} deleteSpeed={40} delaySpeed={1500} />
                    </motion.div>
                    <motion.p 
                        className="mt-6 text-spacex-text-gray"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                    >
                        {subTitle}
                    </motion.p>
                    <motion.div 
                        className="mt-6 flex items-center gap-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.6 }}
                    >
                        <motion.a 
                            href={resumeLink} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="px-4 py-2 bg-spacex-text text-spacex-black rounded spacex-glow"
                            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)" }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                        >
                            Download CV
                        </motion.a>
                        <motion.a 
                            href="#projects" 
                            className="px-4 py-2 border border-spacex-text-gray text-spacex-text rounded spacex-glow"
                            whileHover={{ scale: 1.05, borderColor: "#ffffff", boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)" }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                        >
                            View Projects
                        </motion.a>
                    </motion.div>
                </motion.div>
                <motion.div 
                    className="flex justify-center md:justify-end relative"
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ delay: 0.4, duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
                >
                    <SpacexEarth />
                    <motion.img 
                        src={profileImage ? `/images/about/${profileImage}` : '/images/about/pp.jpg'} 
                        alt="profile" 
                        className="w-48 h-64 md:w-56 md:h-72 rounded-xl object-cover shadow-lg relative z-10"
                        whileHover={{ 
                            scale: 1.05, 
                            rotate: 2,
                            boxShadow: "0 20px 40px rgba(255, 255, 255, 0.1)"
                        }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.div>
            </div>
        </motion.section>
    )
}

export default Hero
