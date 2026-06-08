import { Section } from "../components/Section";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";

export const About = () => {
  return (
    <Section id="about">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="glass-card"
        >
          <p className="text-lg leading-8 text-slate-600 text-justify">
            {portfolioData.summary}
          </p>
        </motion.div>
      </div>
    </Section>
  );
};
