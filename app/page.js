import Header from "./components/header/header";
import HeroSection from "./components/hero-section/hero-section";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
export default function Home() {
  return (
    <main>
      {/* TODO Move header and footer to layout */}
      <Header />
      <HeroSection />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
