import HeroSection from "./components/hero-section/hero-section";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";
export default function Home() {
  return (
    <main>
      <HeroSection />
      <Portfolio />
      <Contact />
    </main>
  );
}
