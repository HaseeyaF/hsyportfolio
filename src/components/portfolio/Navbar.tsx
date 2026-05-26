import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, Code2 } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}
    >
      <nav className={`container-x flex items-center justify-between glass rounded-2xl px-5 py-3 transition-all ${scrolled ? "shadow-elegant" : ""}`}>
        <a href="#home" className="flex items-center gap-2 font-display font-bold text-lg">
          <span className="w-9 h-9 rounded-xl bg-[image:var(--gradient-primary)] grid place-items-center text-primary-foreground">
            <Code2 className="w-5 h-5" />
          </span>
          <span className="text-gradient">Alex.dev</span>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button onClick={toggle} aria-label="Toggle theme" className="w-10 h-10 rounded-xl glass grid place-items-center hover:scale-110 transition-transform">
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <Button asChild variant="default" className="hidden md:inline-flex bg-[image:var(--gradient-primary)] hover:opacity-90 border-0">
            <a href="#contact">Hire Me</a>
          </Button>
          <button className="lg:hidden w-10 h-10 rounded-xl glass grid place-items-center" onClick={() => setOpen(o => !o)} aria-label="Menu">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden container-x mt-2"
          >
            <ul className="glass rounded-2xl p-4 flex flex-col gap-1">
              {links.map(l => (
                <li key={l.href}>
                  <a onClick={() => setOpen(false)} href={l.href} className="block px-4 py-3 rounded-lg text-sm font-medium hover:bg-muted">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
