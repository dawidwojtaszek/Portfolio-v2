"use client";
import HeroSection from "./components/hero-section/hero-section";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";
import { useAppContext } from "./context/context";
import { useEffect } from "react";
import { loadData } from "./utilities/apiUtilities";

export default function Home() {
  const { projects, setProjects } = useAppContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await loadData();
        setProjects(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  console.log(projects);
  return (
    <main>
      <HeroSection />
      {/* <Portfolio /> */}
      <Contact />
    </main>
  );
}
