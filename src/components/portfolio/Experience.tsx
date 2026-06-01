import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, Trophy } from "lucide-react";
import { Section } from "./Section";

const items = [
  { icon: GraduationCap, type: "Education", title: "BICT(Hons) - Information Communication Technology", org: "Rajarata University of Sri Lanka", date: "2021 — 2025", desc: "Focus on software engineering, algorithms, and human-computer interaction." },
  { icon: Briefcase, type: "Internship", title: "Web Developer - Intern", org: "Softwareplus Pvt Ltd", date: "May - November 2025", desc: "Gained hands-on experience in software development practices, version control, debugging, and working in a collaborative development environment." },
  { icon: Award, type: "Certification", title: "Full Stack E-Commerce Project", org: "GreatStack", date: "2025", desc: "Developed a full-stack e-commerce platform using modern web technologies." },
  { icon: Award, type: "Certification", title: "Introduction to Generative AI Studio", org: "GoogleCloud–Simplilearn", date: "2025", desc: "Learned the fundamentals of generative AI and its applications in creative workflows." },
  { icon: Award, type: "Certification", title: "Computer Science: Programming with a Purpose", org: "Coursera", date: "2025", desc: "Explored the principles of computer science through hands-on programming projects." },
  { icon: Trophy, type: "Achievement", title: "Python for Beginners", org: " MicrosoftLearn", date: "2024", desc: "Completed the course with distinction, demonstrating proficiency in Python programming." },
  //{ icon: Briefcase, type: "Freelance", title: "Frontend Developer", org: "Various Clients", date: "2023 — Present", desc: "Delivered 10+ marketing sites and web apps with a 100% on-time record." },
];

export const Experience = () => (
  <Section id="experience" eyebrow="// experience" title="My journey so far" subtitle="Education, work, and the milestones that shaped me.">
    <div className="relative max-w-4xl mx-auto">
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent -translate-x-1/2" />
      <div className="space-y-10">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`relative flex md:items-center gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
          >
            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[image:var(--gradient-primary)] grid place-items-center text-primary-foreground glow-primary z-10">
              <it.icon className="w-5 h-5" />
            </div>
            <div className="hidden md:block w-1/2" />
            <div className="ml-20 md:ml-0 md:w-1/2 glass rounded-2xl p-6 hover:shadow-elegant transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-primary">{it.type}</span>
                <span className="text-xs text-muted-foreground">{it.date}</span>
              </div>
              <h3 className="font-semibold text-lg">{it.title}</h3>
              <p className="text-sm text-secondary mb-2">{it.org}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </Section>
);
