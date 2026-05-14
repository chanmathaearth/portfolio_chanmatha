import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";
import { Mail, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/Icons";
import profilePic from "../assets/profile.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Animated Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-blue/5 blur-[120px] rounded-full pointer-events-none"
      />

      {/* Background Blobs with Slow Floating Motion */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="blob top-[-10%] left-[-10%] opacity-20"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          x: [0, -15, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="blob bottom-[-10%] right-[-10%] opacity-15"
        style={{ background: 'linear-gradient(180deg, rgba(168, 85, 247, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%)' }}
      />

      <div className="max-w-4xl mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 inline-block relative"
        >
          {/* Pulsing Glow behind Profile */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-stone-400 blur-2xl rounded-full opacity-35"/>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="w-42 h-52 rounded-3xl bg-slate-900 p-[2px] relative z-10 shadow-2xl"
          >
            <div className="w-full h-full rounded-[22px] bg-white flex items-center justify-center overflow-hidden">
              <img
                src={profilePic}
                alt="Profile"
                className="w-full h-full object-contain scale-120"
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-4 tracking-tight"
        >
          {portfolioData.name}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl md:text-2xl font-medium text-slate-500 mb-8"
        >
          {portfolioData.role}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            animate={{
              boxShadow: [
                "0px 0px 0px rgba(15, 23, 42, 0)",
                "0px 10px 25px rgba(15, 23, 42, 0.15)",
                "0px 0px 0px rgba(15, 23, 42, 0)",
              ]
            }}
            transition={{
              boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
            className="px-8 py-3 bg-slate-900 text-white rounded-full font-medium flex items-center gap-2 hover:bg-slate-800 transition-colors shadow-lg"
          >
            View Projects <ArrowRight size={18} />
          </motion.a>

          <div className="flex items-center gap-4">
            {[
              { href: portfolioData.contact.github, icon: <GithubIcon size={20} />, color: "hover:text-accent-blue" },
              { href: portfolioData.contact.linkedin, icon: <LinkedinIcon size={20} />, color: "hover:text-accent-purple" },
              { href: `mailto:${portfolioData.contact.email}`, icon: <Mail size={20} />, color: "hover:text-accent-cyan" }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 glass rounded-full text-slate-600 ${social.color} transition-colors shadow-sm`}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator with Bounce */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest font-bold opacity-50 mb-1">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-slate-300 via-slate-400 to-transparent"
        />
      </motion.div>
    </section>
  );
};
