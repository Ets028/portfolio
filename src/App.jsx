import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import ParticlesBackground from "./components/common/ParticlesBackground";
import Footer from "./components/common/Footer";
import DarkModeToggle from "./components/common/DarkModeToggle";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetail";
import { useDarkMode } from "./composables/useDarkMode";

export default function App() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
      mirror: false,
      anchorPlacement: "top-bottom",
      disable: () => window.innerWidth < 768,
    });

    document.documentElement.style.scrollBehavior = "smooth";
    document.body.style.overflowX = "hidden";
  }, []);

  return (
    <div>
      <main className="relative pt-20 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen transition-colors duration-300">
        {/* Partikel latar belakang */}
        <ParticlesBackground />

        {/* Konten utama */}
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
          </Routes>
        </div>
      </main>

      {/* Footer dan tombol toggle */}
      <Footer />
    </div>
  );
}
