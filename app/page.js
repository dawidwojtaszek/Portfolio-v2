import HeroSection from "./components/hero-section/hero-section";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";
import { getSortedProjectsData } from "@/lib/fetchMarkdown";

export default function Home() {
  const data = getSortedProjectsData();
  console.log(data);
  return (
    <main>
      <HeroSection />
      <Portfolio />
      <Contact />
    </main>
  );
}
