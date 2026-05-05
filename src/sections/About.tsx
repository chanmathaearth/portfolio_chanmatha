import { Section } from "../components/Section";
import { portfolioData } from "../data/portfolio";

export const About = () => {
  return (
    <Section id="about">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="glass-card">
          <p className="text-lg leading-relaxed text-slate-600 italic">
            "{portfolioData.summary}"
          </p>
        </div>
      </div>
    </Section>
  );
};
