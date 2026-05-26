import { motion } from "framer-motion";
import { ReactNode } from "react";

export const Section = ({ id, eyebrow, title, subtitle, children }: {
  id: string; eyebrow: string; title: string; subtitle?: string; children: ReactNode;
}) => (
  <section id={id} className="py-24 relative">
    <div className="container-x">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <div className="inline-block glass px-4 py-1.5 rounded-full text-xs font-mono text-primary mb-4">
          {eyebrow}
        </div>
        <h2 className="text-4xl md:text-5xl font-bold">
          <span className="text-gradient">{title}</span>
        </h2>
        {subtitle && <p className="mt-4 text-muted-foreground text-lg">{subtitle}</p>}
      </motion.div>
      {children}
    </div>
  </section>
);
