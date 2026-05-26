import { ArrowUp, Github, Linkedin, Twitter, Mail, Code2 } from "lucide-react";

const links = ["About", "Skills", "Projects", "Experience", "Services", "Contact"];

export const Footer = () => (
  <footer className="border-t border-border/50 py-12 mt-12">
    <div className="container-x">
      <div className="grid md:grid-cols-3 gap-8 mb-10">
        <div>
          <a href="#home" className="flex items-center gap-2 font-display font-bold text-lg mb-3">
            <span className="w-9 h-9 rounded-xl bg-[image:var(--gradient-primary)] grid place-items-center text-primary-foreground">
              <Code2 className="w-5 h-5" />
            </span>
            <span className="text-gradient">Alex.dev</span>
          </a>
          <p className="text-sm text-muted-foreground max-w-sm">Building modern, accessible, and delightful software products.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm">Quick Links</h4>
          <ul className="grid grid-cols-2 gap-2">
            {links.map(l => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm">Connect</h4>
          <div className="flex gap-3">
            {[Github, Linkedin, Twitter, Mail].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-xl glass grid place-items-center hover:text-primary hover:scale-110 transition-all">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between pt-6 border-t border-border/50 text-sm text-muted-foreground">
        <span>© {new Date().getFullYear()} Alex Carter. Crafted with care.</span>
        <a href="#home" className="w-10 h-10 rounded-xl glass grid place-items-center hover:text-primary hover:scale-110 transition-all" aria-label="Back to top">
          <ArrowUp className="w-4 h-4" />
        </a>
      </div>
    </div>
  </footer>
);
