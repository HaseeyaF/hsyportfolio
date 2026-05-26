import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Section } from "./Section";
import { Badge } from "@/components/ui/badge";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";

type Cat = "All" | "Web" | "Mobile" | "UI/UX" | "QA";

const projects = [
  { img: p1, title: "Nova Analytics", cat: "Web", desc: "Real-time analytics dashboard with customizable widgets and live data streams.", tech: ["Next.js", "TypeScript", "tRPC", "PostgreSQL"], gh: "#", live: "#" },
  { img: p2, title: "PulseFit Tracker", cat: "Mobile", desc: "Cross-platform fitness tracking app with workout plans and social features.", tech: ["React Native", "Expo", "Supabase"], gh: "#", live: "#" },
  { img: p3, title: "Aurora Design System", cat: "UI/UX", desc: "A modular design system with 80+ components and dark mode support.", tech: ["Figma", "Storybook", "Tokens Studio"], gh: "#", live: "#" },
  { img: p4, title: "TestFlow QA Suite", cat: "QA", desc: "End-to-end automated testing platform with visual regression diffs.", tech: ["Playwright", "Jest", "Docker"], gh: "#", live: "#" },
  { img: p5, title: "Lumen Commerce", cat: "Web", desc: "Headless e-commerce storefront with Stripe checkout and CMS integration.", tech: ["Next.js", "Stripe", "Sanity"], gh: "#", live: "#" },
  { img: p6, title: "Ripple Chat", cat: "Mobile", desc: "Real-time chat app with end-to-end encryption and rich media support.", tech: ["Flutter", "Firebase", "WebRTC"], gh: "#", live: "#" },
] as const;

const cats: Cat[] = ["All", "Web", "Mobile", "UI/UX", "QA"];

export const Projects = () => {
  const [active, setActive] = useState<Cat>("All");
  const filtered = active === "All" ? projects : projects.filter(p => p.cat === active);

  return (
    <Section id="projects" eyebrow="// projects" title="Selected work" subtitle="A handful of recent projects I've designed, built, and shipped.">
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {cats.map(c => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              active === c
                ? "bg-[image:var(--gradient-primary)] text-primary-foreground shadow-elegant"
                : "glass hover:text-primary"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.article
              key={p.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -8 }}
              className="group glass rounded-2xl overflow-hidden hover:shadow-elegant transition-all"
            >
              <div className="relative aspect-video overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" width={800} height={600} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-end p-4 gap-2">
                  <a href={p.gh} className="w-10 h-10 rounded-xl glass grid place-items-center hover:text-primary"><Github className="w-4 h-4" /></a>
                  <a href={p.live} className="w-10 h-10 rounded-xl glass grid place-items-center hover:text-primary"><ExternalLink className="w-4 h-4" /></a>
                </div>
                <Badge className="absolute top-3 left-3 bg-[image:var(--gradient-primary)] border-0">{p.cat}</Badge>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map(t => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-muted text-muted-foreground font-mono">{t}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
};
