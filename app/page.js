import Header from "./components/header/header";
import HeroSection from "./components/hero-section/hero-section";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";
export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <Portfolio />
      <Contact />
    </main>
  );
}
