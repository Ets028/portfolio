import React, { useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { skills } from "../../constants/projectsData";

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("journey");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const tabContent = {
    journey: {
      title: "My Journey",
      content: [
        "Started as a graphic designer, fell in love with code, and never looked back. My journey began with curiosity about how beautiful websites are built, leading me to dive deep into web development.",
        "With a Diploma in Information Management and 2+ years of hands-on experience, I've evolved from creating static designs to building dynamic, scalable web applications that solve real problems.",
        "The combination of my design background and development skills allows me to bridge the gap between aesthetics and functionality, creating experiences that are both beautiful and purposeful.",
      ],
    },
    skills: {
      title: "What I Do Best",
      content: [
        "🎨 **Frontend Development**: Crafting responsive, interactive user interfaces with React, Next.js, and modern CSS frameworks",
        "⚡ **Backend Solutions**: Building robust APIs and server-side logic with Node.js, Express, and database management",
        "🎯 **Problem Solving**: Turning complex business requirements into elegant, scalable technical solutions",
        "🔧 **Full-Stack Integration**: Seamlessly connecting frontend experiences with powerful backend systems",
      ],
    },
    passion: {
      title: "My Passion",
      content: [
        "I believe great software isn't just about clean code—it's about creating solutions that make people's lives easier and businesses more efficient.",
        "Every line of code I write is driven by the question: 'How can this create real value?' Whether it's optimizing load times, improving user experience, or solving complex business logic.",
        "Saat ini saya terbuka untuk peluang freelance dan kolaborasi, terutama dalam pengembangan aplikasi berbasis web. Mari buat sesuatu yang keren bersama! 🚀",
      ],
    },
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
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

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const tabVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      x: 20,
      transition: {
        duration: 0.3,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.1,
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
      x: [-5, 5, -5],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 0.8, 0.5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-xl"
        variants={pulseVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-20 right-10 w-48 h-48 bg-purple-500/5 rounded-full blur-xl"
        variants={pulseVariants}
        animate="animate"
        transition={{ delay: 1 }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header with Animation */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-sm font-medium mb-4"
            variants={itemVariants}
          >
            <motion.span
              className="w-2 h-2 bg-blue-500 rounded-full mr-2"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Get to know me
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4"
            variants={itemVariants}
          >
            About Me
          </motion.h2>
        </motion.div>

        {/* Tabbed Content */}
        <motion.div
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Tab Navigation */}
          <motion.div
            className="flex flex-wrap justify-center mb-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-2 border border-gray-200/50 dark:border-gray-700/50 max-w-md mx-auto"
            variants={itemVariants}
          >
            {Object.keys(tabContent).map((tab, index) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 capitalize relative overflow-hidden ${
                  activeTab === tab
                    ? "text-white"
                    : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeTab === tab && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl"
                    layoutId="activeTab"
                    transition={{ duration: 0.3 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Tab Content */}
          <motion.div
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50 dark:border-gray-700/50 max-w-4xl mx-auto"
            variants={itemVariants}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <motion.h3
                  className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {tabContent[activeTab].title}
                </motion.h3>
                <div className="space-y-6">
                  {tabContent[activeTab].content.map((paragraph, index) => (
                    <motion.p
                      key={index}
                      className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-center lg:text-left"
                      dangerouslySetInnerHTML={{
                        __html: paragraph.replace(
                          /\*\*(.*?)\*\*/g,
                          '<strong class="text-blue-600 dark:text-blue-400">$1</strong>'
                        ),
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2, duration: 0.5 }}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* Enhanced Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 p-8 relative overflow-hidden"
            variants={itemVariants}
          >
            {/* Background Pattern */}
            <motion.div className="absolute inset-0 opacity-5">
              <motion.div
                className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-3xl"
                variants={floatingVariants}
                animate="animate"
              />
              <motion.div
                className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl"
                variants={floatingVariants}
                animate="animate"
                transition={{ delay: 1 }}
              />
            </motion.div>

            <div className="relative z-10">
              <motion.div className="text-center mb-8" variants={itemVariants}>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Tech Stack & Tools
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Technologies I love working with
                </p>
              </motion.div>

              <motion.div
                className="flex flex-wrap justify-center gap-6 md:gap-8"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="group flex flex-col items-center cursor-pointer"
                    variants={skillVariants}
                    whileHover="hover"
                    custom={index}
                  >
                    <motion.div className="w-12 h-12 mb-2 flex items-center justify-center relative">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-700 dark:to-gray-800 rounded-full shadow-lg scale-110"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-full h-full object-contain relative z-10 filter"
                        loading="lazy"
                        whileHover={{
                          scale: 1.1,
                          filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                    <motion.span
                      className="text-xs font-medium text-gray-600 dark:text-gray-400 text-center transition-colors duration-300 group-hover:text-gray-900 dark:group-hover:text-white"
                      whileHover={{ scale: 1.1 }}
                    >
                      {skill.name}
                    </motion.span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <div className="relative z-10">
              <motion.h3
                className="text-2xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Let's Build Something Amazing Together!
              </motion.h3>
              <motion.p
                className="text-blue-100 mb-6 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Ready to turn your ideas into reality? I'm always excited to
                work on new projects and collaborate with awesome people.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <motion.a
                  href="mailto:elfriantrianas028@gmail.com"
                  className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgb(239 246 255)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    className="mr-2"
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    📧
                  </motion.span>
                  Get In Touch
                </motion.a>
                <motion.a
                  href="#projects"
                  className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "white",
                    color: "rgb(37 99 235)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    className="mr-2"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  >
                    👀
                  </motion.span>
                  View My Work
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
