import { motion } from "framer-motion";
import { GraduationCap, Target, Heart, Rocket } from "lucide-react";
import { Section } from "./Section";

const cards = [
  { icon: GraduationCap, title: "IT Undergraduate", desc: "IT undergraduate and aspiring software developer focused on building modern web, mobile, and desktop applications." },
  { icon: Heart, title: "Passion", desc: "Obsessed with crafting delightful interfaces and writing maintainable, well-tested code." },
  { icon: Target, title: "Career Goals", desc: "Become a senior full-stack engineer building products used by millions worldwide." },
  { icon: Rocket, title: "Always Learning", desc: "Currently exploring AI integrations, system design, and cloud-native architectures." },
];

export const About = () => (
  <Section id="about" eyebrow="// about-me" title="Curious by nature, builder by craft" subtitle="A short story about who I am and where I'm headed.">
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((c, i) => (
        <motion.div
          key={c.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          whileHover={{ y: -8 }}
          className="glass rounded-2xl p-6 group hover:shadow-elegant transition-all"
        >
          <div className="w-12 h-12 rounded-xl bg-[image:var(--gradient-primary)] grid place-items-center text-primary-foreground mb-4 group-hover:scale-110 transition-transform">
            <c.icon className="w-5 h-5" />
          </div>
          <h3 className="font-semibold text-lg mb-2">{c.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
        </motion.div>
      ))}
    </div>
  </Section>
);
