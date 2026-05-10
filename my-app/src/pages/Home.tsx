import { Hero } from "../components/Hero";
import { Stats } from "../components/Stats";
import { TechStackPreview } from "../components/TechStackPreview";
import { Projects } from "../components/Projects";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Stats />
      <TechStackPreview />
      <Projects />
      <Footer />
    </div>
  );
}
