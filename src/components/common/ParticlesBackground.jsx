// components/common/ParticlesBackground.jsx
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useDarkMode } from "../../composables/useDarkMode";

const ParticlesBackground = () => {
  const { isDarkMode } = useDarkMode();

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 z-10"
      options={{
        fullScreen: { enable: false },
        background: { color: { value: "transparent" } },
        particles: {
          number: { value: 50, density: { enable: true, area: 800 } },
          color: { value: isDarkMode ? "#ffffff" : "#000000" },
          shape: { type: "circle" },
          opacity: { value: 0.4 },
          size: { value: 2, random: true },
          move: {
            enable: true,
            speed: 0.6,
            direction: "none",
            outMode: "out",
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
