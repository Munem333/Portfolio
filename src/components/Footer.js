import React from 'react'
import data from '../data/data.json'

const Footer = () => {
    const { socialLinks } = data.data

    return (
        <footer className="mt-12 border-t border-spacex-gray py-8 bg-spacex-black">
            <div className="container-max flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-spacex-text-gray">© {new Date().getFullYear()} {data.data.fullName}. All rights reserved.</p>
                <div className="flex items-center gap-3">
                    {socialLinks.linkedin && <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="text-spacex-text-gray hover:text-spacex-text transition-colors">LinkedIn</a>}
                    {socialLinks.github && <a href={socialLinks.github} target="_blank" rel="noreferrer" className="text-spacex-text-gray hover:text-spacex-text transition-colors">GitHub</a>}
                    {socialLinks.instagram && <a href={socialLinks.instagram} target="_blank" rel="noreferrer" className="text-spacex-text-gray hover:text-spacex-text transition-colors">Instagram</a>}
                </div>
            </div>
        </footer>
    )
}

export default Footer
