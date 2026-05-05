import { Section } from "../components/Section";
import { portfolioData } from "../data/portfolio";
import { GraduationCap, Award, Languages, Users, CheckCircle2 } from "lucide-react";
import HccdaPic from "../assets/HWENDCTEDA884134.png";

export const Education = () => {
  return (
    <Section id="education">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Education & Background</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Education */}
          <div className="glass-card rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col h-full">
            <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
              <GraduationCap className="text-accent-blue" /> Education
            </h3>
            <div className="space-y-6 flex-grow">
              {portfolioData.education.map((edu, index) => (
                <div key={index} className="relative pl-0">
                  <div className="flex justify-between items-start mb-2 gap-4">
                    <h4 className="font-bold text-lg text-slate-800 leading-tight">{edu.degree}</h4>
                    <div className="bg-blue-50 text-accent-blue px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                      GPA {edu.gpa}
                    </div>
                  </div>
                  <p className="text-accent-blue font-medium text-sm mb-2">{edu.major}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{edu.school}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Certifications */}
          <div className="glass-card rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col h-full">
            <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
              <Award className="text-accent-purple" /> Certifications
            </h3>
            <div className="space-y-4 flex-grow">
              {portfolioData.certifications.map((cert, index) => (
                <div key={index} className="group">
                  <div className="flex gap-4 items-center">
                    {cert.image && (
                      <a 
                        href={HccdaPic} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-20 h-14 rounded-xl overflow-hidden shrink-0 border border-slate-100 block group/img bg-slate-50"
                      >
                        <img 
                          src={HccdaPic} 
                          alt={cert.name} 
                          className="w-full h-full object-cover transition-transform group-hover/img:scale-110" 
                        />
                      </a>
                    )}
                    <p className="font-bold text-sm text-slate-800 leading-snug">
                      {cert.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Activities & Involvement */}
          <div className="glass-card rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col h-full">
            <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
              <Users className="text-accent-purple" /> Activities & Involvement
            </h3>
            <ul className="space-y-4 flex-grow">
              {portfolioData.activities.map((activity, index) => (
                <li key={index} className="flex gap-3 group">
                  <div className="mt-1 shrink-0">
                    <CheckCircle2 size={16} className="text-accent-purple/40 group-hover:text-accent-purple transition-colors" />
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {activity}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 4: Languages */}
          <div className="glass-card rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col h-full">
            <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
              <Languages className="text-accent-cyan" /> Languages
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow content-start">
              {portfolioData.languages.map((lang, index) => (
                <div key={index} className="bg-slate-50 border border-slate-100 p-4 rounded-2xl flex flex-col justify-center">
                  <span className="font-bold text-slate-800">{lang.name}</span>
                  <span className="text-accent-cyan font-medium text-xs mt-1 uppercase tracking-wider">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
};
