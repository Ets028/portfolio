import { useEffect } from "react";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import ProjectSection from "../components/sections/ProjectSection";
import Navbar from "../components/common/Navbar";
import ContactSection from "../components/sections/ContactSection";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (window.AOS) {
      window.AOS.refresh();
    }
  }, []);

  return (
    <>
      {/* Jangan render ParticlesBackground di sini */}
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
    </>
  );
};

export default Home;
