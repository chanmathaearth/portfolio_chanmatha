import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";
import { Mail, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/Icons";
import profilePic from "../assets/profile.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Blobs */}
      <div className="blob top-[-10%] left-[-10%] opacity-30" />
      <div className="blob bottom-[-10%] right-[-10%] opacity-20" style={{ background: 'linear-gradient(180deg, rgba(168, 85, 247, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%)' }} />

      <div className="max-w-4xl mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-block"
        >
<div className="w-42 h-52 rounded-3xl bg-slate-900 p-[2px]">            <div className="w-full h-full rounded-[22px] bg-white flex items-center justify-center overflow-hidden">
              <img
                src={profilePic}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold mb-4 tracking-tight"
        >
          {portfolioData.name}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-xl md:text-2xl font-medium text-slate-500 mb-8"
        >
          {portfolioData.role}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-slate-900 text-white rounded-full font-medium flex items-center gap-2 hover:bg-slate-800 transition-all hover:gap-3"
          >
            View Projects <ArrowRight size={18} />
          </a>
          <div className="flex items-center gap-4">
            <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full text-slate-600 hover:text-accent-blue transition-colors">
              <GithubIcon size={20} />
            </a>
            <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full text-slate-600 hover:text-accent-purple transition-colors">
              <LinkedinIcon size={20} />
            </a>
            <a href={`mailto:${portfolioData.contact.email}`} className="p-3 glass rounded-full text-slate-600 hover:text-accent-cyan transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-slate-300 to-transparent mx-auto" />
      </motion.div>
    </section>
  );
};
