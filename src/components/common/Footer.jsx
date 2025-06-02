import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com",
      icon: <FaGithub size={20} />,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: <FaLinkedin size={20} />,
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: <FaInstagram size={20} />,
    },
    {
      name: "Mail",
      href: "mailto:you@example.com",
      icon: <FaEnvelope size={20} />,
    },
  ];

  const footerLinks = [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Sitemap", href: "#sitemap" },
  ];

  const scrollToSection = (event, href) => {
    event.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 64;
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 lg:col-span-2">
            <div className="mb-4">
              <a
                href="#"
                className="text-2xl font-bold text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Portfolio
              </a>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 max-w-md">
              Passionate developer creating innovative solutions with modern
              technologies. Let's build something amazing together.
            </p>

            <div className="flex space-x-6">
              {socialLinks.map(({ name, href, icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="text-gray-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-6">
              Navigation
            </h3>
            <ul className="space-y-4">
              {navigation.map(({ name, href }) => (
                <li key={name}>
                  <a
                    href={href}
                    onClick={(e) => scrollToSection(e, href)}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-6">
              More
            </h3>
            <ul className="space-y-4">
              {footerLinks.map(({ name, href }) => (
                <li key={name}>
                  <a
                    href={href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-700 py-6 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 md:mb-0">
          © {currentYear} Your Name. All rights reserved.
        </p>
        <button
          onClick={scrollToTop}
          className="text-sm text-primary-600 dark:text-primary-400 hover:underline transition"
        >
          Back to top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
