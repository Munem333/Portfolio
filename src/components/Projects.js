import React from 'react'
import data from '../data/data.json'
import { motion } from 'framer-motion'

const Projects = ({ limit }) => {
  const { projects } = data.data

  const list = limit ? projects.slice(0, limit) : projects

  return (
    <motion.section 
      id="projects" 
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
          Projects
        </motion.h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {list.map((p, idx) => (
            <motion.article 
              key={idx} 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }}
              whileHover={{ 
                scale: 1.03, 
                y: -5,
                boxShadow: "0 20px 40px rgba(255, 255, 255, 0.15)"
              }}
              className="rounded-lg overflow-hidden shadow hover:shadow-lg transition bg-spacex-gray border border-spacex-light-gray spacex-glow"
            >
              <div className="p-6">
                  <h3 className="text-sm text-spacex-text-gray">{p.projectType}</h3>
                  <h4 className="text-xl font-semibold mt-1 text-spacex-text">{p.projectName}</h4>
                  <p className="mt-3 text-spacex-text-gray">{p.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.techStack.map((t,i)=> (
                      <span key={i} className="text-xs px-2 py-1 bg-spacex-light-gray text-spacex-text-gray rounded border border-spacex-gray flex items-center gap-1.5">
                        {t.image && (
                          <img
                            src={`/images/icons/${t.image}.png`}
                            alt={t.name}
                            className="w-4 h-4 object-contain"
                            onError={(e) => {
                              if (!e.target.src.includes('.svg')) {
                                e.target.onerror = null;
                                e.target.src = `/images/icons/${t.image}.svg`;
                              }
                            }}
                          />
                        )}
                        {t.name}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-3">
                    {p.githubLink && <a href={p.githubLink} target="_blank" rel="noreferrer" className="text-sm px-3 py-2 border border-spacex-text-gray text-spacex-text rounded hover:bg-spacex-light-gray transition-colors">Source</a>}
                    {p.liveLink && <a href={p.liveLink} target="_blank" rel="noreferrer" className="text-sm px-3 py-2 bg-spacex-text text-spacex-black rounded hover:bg-spacex-text-gray transition-colors">Live</a>}
                  </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Projects
