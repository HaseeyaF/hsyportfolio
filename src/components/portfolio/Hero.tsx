import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import portrait from "@/assets/hero-portrait.jpg";

const titles = [
  "Software Developer",
  "Mobile App Developer",
  "Full Stack Engineer",
  "QA Engineer",
];

const useTyping = () => {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const cur = titles[i];
    const t = setTimeout(() => {
      if (!del) {
        setText(cur.slice(0, text.length + 1));
        if (text.length + 1 === cur.length) setTimeout(() => setDel(true), 1400);
      } else {
        setText(cur.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDel(false);
          setI((i + 1) % titles.length);
        }
      }
    }, del ? 40 : 90);
    return () => clearTimeout(t);
  }, [text, del, i]);

  return text;
};

export const Hero = () => {
  const typed = useTyping();

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* particles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {Array.from({ length: 40 }).map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${4 + Math.random() * 6}s ease-in-out ${Math.random() * 5}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-xs font-mono mb-6">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            Available for internships, entry-level opportunities, and freelance projects
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
            Hi, I'm <span className="text-gradient">Haseeya Farwin</span>
          </h1>

          <h2 className="mt-4 text-2xl md:text-3xl font-display text-muted-foreground h-[1.5em]">
            <span className="text-foreground">{typed}</span>
            <span className="inline-block w-[3px] h-7 ml-1 bg-primary align-middle animate-blink" />
          </h2>

          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            IT undergraduate & aspiring developer building modern web and mobile applications with a focus on clean code, performance, and user experience.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-[image:var(--gradient-primary)] hover:opacity-90 border-0 shadow-elegant">
              <a href="#contact">Hire Me <ArrowRight className="ml-2 w-4 h-4" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="glass border-border">
              <a href="/cv.pdf" download><Download className="mr-2 w-4 h-4" /> Download CV</a>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <a href="#contact"><Mail className="mr-2 w-4 h-4" /> Contact</a>
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-4">
            {[Github, Linkedin, Twitter].map((Icon, idx) => (
              <a key={idx} href="#" className="w-11 h-11 rounded-xl glass grid place-items-center hover:text-primary hover:scale-110 transition-all">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative mx-auto"
        >
          <div className="absolute inset-0 -m-6 rounded-full bg-[image:var(--gradient-aurora)] blur-3xl opacity-50 animate-glow-pulse" />
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden ring-4 ring-primary/30 glow-primary">
            <img src={portrait} alt="Haseeya Farwin portrait" width={768} height={896} className="w-full h-full object-cover" />
          </div>
          <div className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-3 text-sm font-mono">
            <div className="text-secondary">{"<dev/>"}</div>
            <div className="text-xs text-muted-foreground">2+ years coding</div>
          </div>
          <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-3 text-sm font-mono">
            <div className="text-accent">10+ projects</div>
            {/* <div className="text-xs text-muted-foreground">shipped</div>*/}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
