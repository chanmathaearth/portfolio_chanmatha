import { Section } from "../components/Section";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";
import { Code2, Database, Terminal, Cloud, Layout } from "lucide-react";

const getIcon = (category: string) => {
  switch (category.toLowerCase()) {
    case "frontend": return <Layout size={20} className="text-accent-blue" />;
    case "backend": return <Terminal size={20} className="text-accent-purple" />;
    case "database": return <Database size={20} className="text-accent-cyan" />;
    case "tools": return <Code2 size={20} className="text-blue-500" />;
    case "cloud": return <Cloud size={20} className="text-purple-500" />;
    default: return <Code2 size={20} />;
  }
};

export const Skills = () => {
  return (
    <Section id="skills" className="bg-white/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.skills.map((group, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
              key={group.category}
              className="glass-card"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-slate-50 rounded-lg">
                  {getIcon(group.category)}
                </div>
                <h3 className="font-bold text-lg">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 + Math.random() * 0.2 }}
                    viewport={{ once: true }}
                    key={skill}
                    className="px-3 py-1 bg-white border border-slate-100 rounded-full text-sm font-medium text-slate-600 shadow-sm hover:shadow-md transition-shadow hover:text-accent-blue"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
