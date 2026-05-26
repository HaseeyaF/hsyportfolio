import { motion } from "framer-motion";
import { Code, Layout, Server, Smartphone, Database, Bug, Wrench } from "lucide-react";
import { Section } from "./Section";

const groups = [
  { icon: Code, title: "Languages", items: [["TypeScript", 92], ["Python", 85], ["Java", 78], ["Dart", 70]] },
  { icon: Layout, title: "Frontend", items: [["React", 95], ["Next.js", 88], ["Tailwind CSS", 92], ["Framer Motion", 80]] },
  { icon: Server, title: "Backend", items: [["Node.js", 88], ["Express", 85], ["FastAPI", 75], ["GraphQL", 70]] },
  { icon: Smartphone, title: "Mobile", items: [["React Native", 82], ["Flutter", 75], ["Expo", 88]] },
  { icon: Database, title: "Databases", items: [["PostgreSQL", 85], ["MongoDB", 80], ["Supabase", 90], ["Redis", 70]] },
  { icon: Bug, title: "QA Testing", items: [["Jest", 88], ["Cypress", 82], ["Playwright", 78], ["Postman", 90]] },
  { icon: Wrench, title: "Tools", items: [["Git", 95], ["Docker", 75], ["Figma", 85], ["Vercel", 90]] },
];

export const Skills = () => (
  <Section id="skills" eyebrow="// skills" title="My toolkit & tech stack" subtitle="Technologies I use to bring ideas to life — from prototype to production.">
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {groups.map((g, i) => (
        <motion.div
          key={g.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
          whileHover={{ y: -6 }}
          className="glass rounded-2xl p-6 hover:shadow-elegant transition-all"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 rounded-xl bg-[image:var(--gradient-primary)] grid place-items-center text-primary-foreground">
              <g.icon className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-lg">{g.title}</h3>
          </div>
          <div className="space-y-3">
            {g.items.map(([name, val]) => (
              <div key={name as string}>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="font-medium">{name}</span>
                  <span className="text-muted-foreground font-mono">{val}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${val}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full rounded-full bg-[image:var(--gradient-aurora)]"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </Section>
);
