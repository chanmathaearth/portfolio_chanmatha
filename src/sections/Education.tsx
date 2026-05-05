import { Section } from "../components/Section";
import { portfolioData } from "../data/portfolio";
import { GraduationCap, Award, Languages } from "lucide-react";

export const Education = () => {
  return (
    <Section id="education">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Education */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <GraduationCap className="text-accent-blue" /> Education
          </h2>
          {portfolioData.education.map((edu, index) => (
            <div key={index} className="glass-card">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-lg text-slate-800">{edu.degree}</h3>
                  <p className="text-accent-blue font-medium">{edu.major}</p>
                </div>
                <div className="bg-blue-50 text-accent-blue px-3 py-1 rounded-full text-sm font-bold">
                  GPA {edu.gpa}
                </div>
              </div>
              <p className="text-slate-600">{edu.school}</p>
            </div>
          ))}
        </div>

        {/* Certifications & Languages */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Award className="text-accent-purple" /> Certifications
            </h2>
            {portfolioData.certifications.map((cert, index) => (
              <div key={index} className="glass-card mb-4 overflow-hidden group">
                <div className="flex flex-col md:flex-row gap-6">
                  {cert.image && (
                    <a 
                      href={cert.image} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-full md:w-40 h-24 rounded-lg overflow-hidden shrink-0 border border-slate-100 block group/img"
                    >
                      <img src={cert.image} alt={cert.name} className="w-full h-full object-contain bg-slate-50 transition-transform group-hover/img:scale-110" />
                    </a>
                  )}
                  <h3 className="font-bold text-slate-800 flex items-center">{cert.name}</h3>
                </div>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Languages className="text-accent-cyan" /> Languages
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {portfolioData.languages.map((lang, index) => (
                <div key={index} className="glass px-4 py-3 rounded-2xl flex flex-col">
                  <span className="font-bold text-slate-800">{lang.name}</span>
                  <span className="text-sm text-slate-500">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
