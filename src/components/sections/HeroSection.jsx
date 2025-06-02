import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import profileImage from "../../assets/images/Profile2.jpeg";

export default function HeroSection() {
  const [name] = useState("Elfrian");
  const [englishDescription] = useState(
    "Passionate developer with hands-on experience building inventory management apps using the modern JavaScript stack."
  );
  const [indonesianDescription] = useState(
    "Developer yang antusias dan berpengalaman membangun aplikasi manajemen inventaris dengan stack JavaScript modern."
  );

  const titles = [
    "Web Developer",
    "Frontend Specialist",
    "UI/UX Design",
    "Problem Solver",
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/ets028",
      icon: <FaGithub className="text-xl" />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/",
      icon: <FaLinkedin className="text-xl" />,
    },
    {
      name: "Instagram",
      url: "https://instagram.com/elfrian028_",
      icon: <FaInstagram className="text-xl" />,
    },
    {
      name: "Email",
      url: "mailto:elfriantrianas028@gmail.com",
      icon: <FaEnvelope className="text-xl" />,
    },
  ];

  // Typewriter effect
  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentTitle.length) {
            setDisplayText(currentTitle.substring(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.substring(0, displayText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
          }
        }
      },
      isDeleting ? 50 : 150
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTitleIndex, titles]);

  const scrollToSection = (selector) => {
    const element = document.querySelector(selector);
    if (element) {
      const offset = 64;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 3,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      rotate: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const socialVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const socialItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
    hover: {
      scale: 1.2,
      y: -5,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-40 px-4 overflow-hidden"
      style={{
        background: "rgba(255, 255, 255, 0.05)",
      }}
    >
      {/* Animated Background Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-blue-900/20 dark:from-gray-900/30 dark:via-transparent dark:to-blue-900/30 pointer-events-none z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Mobile Image */}
      <motion.div
        className="absolute top-16 left-[30%] transform -translate-x-[30%] z-10 md:hidden"
        initial={{ opacity: 0, y: -50, scale: 0.5 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative w-56 h-56 rounded-full overflow-hidden ring-4 ring-blue-500/30 shadow-2xl">
          <img
            src={profileImage}
            alt="Elfrian Triana Setiawan"
            className="w-full h-full object-cover"
          />
          <motion.div
            className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-green-500 rounded-full border-4 border-white dark:border-gray-900"
            variants={pulseVariants}
            animate="animate"
          />
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-0 relative z-10">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="text-center lg:text-left mt-20 md:mt-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 drop-shadow-lg"
              variants={itemVariants}
            >
              Hi, I'm{" "}
              <motion.span
                className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                {name}
              </motion.span>
            </motion.h1>

            <motion.div
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 min-h-[3rem] flex items-center justify-center lg:justify-start"
              variants={itemVariants}
            >
              <span className="mr-2 drop-shadow-sm">I'm a</span>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold drop-shadow-sm">
                {displayText}
              </span>
              <motion.span
                className="text-blue-600 dark:text-blue-400 ml-1"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                |
              </motion.span>
            </motion.div>

            {/* English Description */}
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300 mb-4 max-w-2xl mx-auto lg:mx-0 leading-relaxed drop-shadow-sm"
              variants={itemVariants}
            >
              {englishDescription}
            </motion.p>

            {/* Indonesian Description */}
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium drop-shadow-sm"
              variants={itemVariants}
            >
              {indonesianDescription}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <motion.button
                onClick={() => scrollToSection("#projects")}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg relative overflow-hidden backdrop-blur-sm group"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center justify-center">
                  View My Portfolio
                  <motion.svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </motion.svg>
                </span>
              </motion.button>

              <motion.a
                href="/cv-elfrian.pdf"
                download
                className="px-6 py-3 border-2 border-gray-300/80 dark:border-gray-600/80 bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm text-gray-700 dark:text-gray-200 font-medium rounded-lg group"
                variants={buttonVariants}
                whileHover={{
                  scale: 1.05,
                  borderColor: "rgb(59 130 246)",
                  color: "rgb(37 99 235)",
                }}
                whileTap="tap"
              >
                <span className="flex items-center justify-center">
                  Download CV
                  <motion.svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    whileHover={{ y: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                    />
                  </motion.svg>
                </span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex space-x-6 justify-center lg:justify-start mt-8"
              variants={socialVariants}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors drop-shadow-sm"
                  aria-label={social.name}
                  variants={socialItemVariants}
                  whileHover="hover"
                  custom={index}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Desktop Image */}
          <motion.div
            className="hidden md:flex justify-center lg:justify-end relative z-10"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <div className="relative">
              <motion.div
                className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/10 dark:bg-blue-400/10 rounded-full"
                variants={floatingVariants}
                animate="animate"
              />
              <motion.div
                className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-500/10 dark:bg-purple-400/10 rounded-full"
                variants={floatingVariants}
                animate="animate"
                transition={{ delay: 1 }}
              />

              <div className="relative z-10">
                <motion.div
                  className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden ring-8 ring-blue-500/20 shadow-2xl backdrop-blur-sm"
                  variants={imageVariants}
                  whileHover="hover"
                >
                  <motion.img
                    src={profileImage}
                    alt={`${name} - Profile`}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 1.5, duration: 0.5 },
        }}
      >
        <motion.button
          onClick={() => scrollToSection("#about")}
          aria-label="Scroll to about section"
          className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 drop-shadow-sm"
          animate={{
            y: [0, 10, 0],
            transition: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          whileHover={{ scale: 1.2 }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.button>
      </motion.div>
    </section>
  );
}
