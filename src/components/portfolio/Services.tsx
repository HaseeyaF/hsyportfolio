import { motion } from "framer-motion";
import { Globe, Smartphone, Palette, Bug, Wrench } from "lucide-react";
import { Section } from "./Section";

const services = [
  { icon: Globe, title: "Web Development", desc: "Modern, fast, SEO-ready websites and full-stack apps with React, Next.js, and Node." },
  { icon: Smartphone, title: "Mobile App Development", desc: "Cross-platform iOS & Android apps with React Native and Flutter — shipped to the stores." },
  { icon: Palette, title: "UI Design", desc: "Pixel-perfect interfaces and design systems in Figma, ready for handoff and dev." },
  { icon: Bug, title: "Software Testing", desc: "Unit, integration, and E2E test suites with Jest, Playwright, and Cypress." },
  { icon: Wrench, title: "Bug Fixing", desc: "Quick diagnosis and surgical fixes on legacy code, with thorough regression checks." },
];

export const Services = () => (
  <Section id="services" eyebrow="// services" title="What I can do for you" subtitle="Pick a service or combine several — all delivered with craftsmanship and clear communication.">
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((s, i) => (
        <motion.div
          key={s.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          whileHover={{ y: -8 }}
          className="group relative glass rounded-2xl p-8 overflow-hidden hover:shadow-elegant transition-all"
        >
          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[image:var(--gradient-aurora)] opacity-0 group-hover:opacity-30 blur-3xl transition-opacity" />
          <div className="relative">
            <div className="w-14 h-14 rounded-2xl bg-[image:var(--gradient-primary)] grid place-items-center text-primary-foreground mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform">
              <s.icon className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-xl mb-3">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </Section>
);
