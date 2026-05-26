import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Services } from "@/components/portfolio/Services";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

const Index = () => (
  <div className="min-h-screen relative overflow-x-hidden">
    <Navbar />
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Services />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default Index;
