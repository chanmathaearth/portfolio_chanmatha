import { Section } from "../components/Section";
import { portfolioData } from "../data/portfolio";
import { Briefcase, Calendar, CheckCircle2, ExternalLink } from "lucide-react";

export const Experience = () => {
  return (
    <Section id="experience" className="bg-white/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>
        <div className="space-y-8">
          {portfolioData.experience.map((exp, index) => (
            <div key={index} className="glass-card">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                <div>
                  <div className="flex items-center gap-2 text-accent-purple mb-1">
                    <Briefcase size={18} />
                    <span className="font-bold">{exp.role}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">{exp.company}</h3>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-slate-500 bg-slate-100 px-4 py-2 rounded-full h-fit">
                  <Calendar size={16} />
                  {exp.date}
                </div>
              </div>
              
              <p className="text-slate-600 mb-6">{exp.description}</p>
              
              <div className="space-y-3 mb-8">
                {exp.highlights.map((highlight, hIndex) => (
                  <div key={hIndex} className="flex gap-3 text-sm text-slate-600">
                    <CheckCircle2 size={18} className="text-accent-purple shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span key={t} className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-lg text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {t}
                  </span>
                ))}
              </div>
              
              {exp.links?.demo && (
                <div className="mt-6 flex">
                  <a href={exp.links.demo} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-accent-blue hover:text-accent-purple transition-colors flex items-center gap-2">
                    View Video Demo <ExternalLink size={16} />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
