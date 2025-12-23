import React, { useState } from 'react'
import { motion } from 'framer-motion'
import data from '../data/data.json'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const { contactParagraph, email, fullName, phone, socialLinks } = data.data

    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState(null)

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            // Requires user to set EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_USER_ID in .env
            await emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, {
                from_name: form.name,
                from_email: form.email,
                message: form.message,
            }, process.env.REACT_APP_EMAILJS_USER_ID)
            setStatus('SENT')
            setForm({ name: '', email: '', message: '' })
        } catch (err) {
            setStatus('ERROR')
        }
    }

    return (
        <motion.section 
            id="contact" 
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
                    Contact
                </motion.h2>
                <motion.p 
                    className="mt-3 text-spacex-text-gray"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                >
                    {contactParagraph}
                </motion.p>
                <div className="mt-6 grid md:grid-cols-2 gap-6">
                    <motion.form 
                        onSubmit={handleSubmit} 
                        className="space-y-4"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.input 
                            name="name" 
                            value={form.name} 
                            onChange={handleChange} 
                            placeholder="Your name" 
                            className="w-full border border-spacex-light-gray bg-spacex-gray text-spacex-text px-3 py-2 rounded focus:outline-none focus:border-spacex-text transition-colors" 
                            required
                            whileFocus={{ scale: 1.02, borderColor: "#ffffff" }}
                        />
                        <motion.input 
                            name="email" 
                            value={form.email} 
                            onChange={handleChange} 
                            placeholder="Your email" 
                            type="email" 
                            className="w-full border border-spacex-light-gray bg-spacex-gray text-spacex-text px-3 py-2 rounded focus:outline-none focus:border-spacex-text transition-colors" 
                            required
                            whileFocus={{ scale: 1.02, borderColor: "#ffffff" }}
                        />
                        <motion.textarea 
                            name="message" 
                            value={form.message} 
                            onChange={handleChange} 
                            rows={6} 
                            placeholder="Message" 
                            className="w-full border border-spacex-light-gray bg-spacex-gray text-spacex-text px-3 py-2 rounded focus:outline-none focus:border-spacex-text transition-colors" 
                            required
                            whileFocus={{ scale: 1.02, borderColor: "#ffffff" }}
                        />
                        <div>
                            <motion.button 
                                type="submit" 
                                className="px-4 py-2 bg-spacex-text text-spacex-black rounded spacex-glow"
                                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)" }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Send Message
                            </motion.button>
                            {status === 'SENT' && <span className="ml-3 text-green-400">Message sent — thank you!</span>}
                            {status === 'ERROR' && <span className="ml-3 text-red-400">Error sending message. Configure EmailJS keys.</span>}
                        </div>
                    </motion.form>
                    <motion.div 
                        className="p-4 border border-spacex-light-gray rounded bg-spacex-gray spacex-glow"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        whileHover={{ 
                            y: -5,
                            boxShadow: "0 10px 30px rgba(255, 255, 255, 0.1)"
                        }}
                    >
                        <h3 className="font-medium text-spacex-text">Get in touch</h3>
                        <p className="mt-2 text-spacex-text-gray">Email: <a className="text-spacex-text hover:text-spacex-text-gray transition-colors" href={`mailto:${email}`}>{email}</a></p>
                        {phone && <p className="mt-2 text-spacex-text-gray">Phone: <a className="text-spacex-text hover:text-spacex-text-gray transition-colors" href={`tel:${phone}`}>{phone}</a></p>}
                        <div className="mt-4 flex gap-3">
                            {socialLinks.github && <a href={socialLinks.github} target="_blank" rel="noreferrer" className="text-spacex-text hover:text-spacex-text-gray transition-colors">GitHub</a>}
                            {socialLinks.linkedin && <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="text-spacex-text hover:text-spacex-text-gray transition-colors">LinkedIn</a>}
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}

export default Contact
