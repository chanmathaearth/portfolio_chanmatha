import { Section } from "../components/Section";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";
import { ExternalLink, Calendar, CheckCircle2, PlayCircle } from "lucide-react";
import { GithubIcon } from "../components/Icons";

export const Projects = () => {
  return (
    <Section id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 gap-12">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              key={index} 
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
            >
              {/* Project Image */}
              <div className="glass-card p-0 overflow-hidden aspect-video bg-slate-50 flex items-start justify-center relative group">
                {/* Main Image Link */}
                <a href={project.links.demo || project.links.web || project.links.github} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-0 block">
                  {project.image ? (
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400 font-medium transition-transform duration-500 group-hover:scale-110">
                      {project.title} Preview
                    </div>
                  )}
                </a>

                {/* Overlay with links on hover */}
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20 pointer-events-none">
                  <div className="flex items-center gap-4 pointer-events-auto">
                    {project.links?.demo && (
                      <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="px-4 py-3 bg-white rounded-full text-slate-900 hover:scale-110 transition-transform shadow-xl flex items-center gap-2 font-bold">
                        <PlayCircle size={20} className="text-accent-cyan" />
                        Watch Demo
                      </a>
                    )}
                    {project.links?.github && (
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full text-slate-900 hover:scale-110 transition-transform shadow-xl" title="Source Code">
                        <GithubIcon size={20} />
                      </a>
                    )}
                    {project.links?.web && (
                      <a href={project.links.web} target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full text-slate-900 hover:scale-110 transition-transform shadow-xl" title="Live Site">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div>
                <div className="flex items-center gap-2 text-sm font-medium text-accent-blue mb-2">
                  <Calendar size={14} />
                  {project.date}
                </div>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-slate-600 mb-6">{project.description}</p>
                
                <div className="space-y-3 mb-6">
                  {project.highlights.map((highlight, hIndex) => (
                    <div key={hIndex} className="flex gap-3 text-sm text-slate-600">
                      <CheckCircle2 size={18} className="text-accent-cyan shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-bold text-slate-500 uppercase tracking-wider">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
