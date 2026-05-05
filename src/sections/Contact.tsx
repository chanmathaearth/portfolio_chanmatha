import { Section } from "../components/Section";
import { portfolioData } from "../data/portfolio";
import { Mail, Phone, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/Icons";

export const Contact = () => {
  return (
    <Section id="contact" className="bg-slate-900 text-white overflow-hidden relative">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-blue/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
        <p className="text-slate-400 mb-12 max-w-xl mx-auto">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 text-left">
          <div className="backdrop-blur-md bg-white/5 border border-white/10 p-8 rounded-3xl">
            <h3 className="text-xl font-bold mb-6 text-white">Contact Info</h3>
            <div className="space-y-6">
              <a href={`mailto:${portfolioData.contact.email}`} className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                <div className="p-3 bg-white/10 rounded-2xl group-hover:bg-accent-blue/20 transition-colors">
                  <Mail size={20} className="text-accent-blue" />
                </div>
                <span>{portfolioData.contact.email}</span>
              </a>
              <a href={`tel:${portfolioData.contact.phone}`} className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                <div className="p-3 bg-white/10 rounded-2xl group-hover:bg-accent-purple/20 transition-colors">
                  <Phone size={20} className="text-accent-purple" />
                </div>
                <span>{portfolioData.contact.phone}</span>
              </a>
            </div>
          </div>

          <div className="backdrop-blur-md bg-white/5 border border-white/10 p-8 rounded-3xl">
            <h3 className="text-xl font-bold mb-6 text-white">Socials</h3>
            <div className="space-y-6">
              <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                <div className="p-3 bg-white/10 rounded-2xl group-hover:bg-slate-700 transition-colors">
                  <GithubIcon size={20} />
                </div>
                <span>GitHub Profile</span>
              </a>
              <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                <div className="p-3 bg-white/10 rounded-2xl group-hover:bg-accent-blue/40 transition-colors">
                  <LinkedinIcon size={20} className="text-[#0077b5]" />
                </div>
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <a
            href={`mailto:${portfolioData.contact.email}`}
            className="px-10 py-4 bg-white text-slate-900 rounded-full font-bold flex items-center gap-3 hover:scale-105 transition-transform shadow-xl shadow-accent-blue/10"
          >
            Send a Message <Send size={20} />
          </a>
          <p className="mt-20 text-slate-500 text-sm">
            © {new Date().getFullYear()} {portfolioData.name}. Built with React, Tailwind & Framer Motion.
          </p>
        </div>
      </div>
    </Section>
  );
};
