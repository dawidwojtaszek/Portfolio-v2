import HeroSection from "./components/hero-section/hero-section";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";
import { getSortedProjectsData } from "@/lib/fetchMarkdown";

export default function Home() {
  const data = getSortedProjectsData();
  return (
    <main>
      <HeroSection />
      <Portfolio data={data} />
      <Contact />
    </main>
  );
}
