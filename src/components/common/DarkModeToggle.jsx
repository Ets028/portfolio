import React, { useState } from "react";

const DarkModeToggle = ({ isDark, onToggle }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggle = () => {
    setIsAnimating(true);
    onToggle();

    // Reset animation state after transition completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };

  // Sun Icon Component
  const SunIcon = ({ className }) => (
    <svg
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );

  // Moon Icon Component
  const MoonIcon = ({ className }) => (
    <svg
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  );

  return (
    <button
      onClick={handleToggle}
      className="group relative p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:scale-110 backdrop-blur-lg"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      style={{
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        boxShadow: isDark
          ? "0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)"
          : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      }}
      onMouseEnter={(e) => {
        e.target.style.boxShadow = isDark
          ? "0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.3)"
          : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)";
      }}
      onMouseLeave={(e) => {
        e.target.style.boxShadow = isDark
          ? "0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)"
          : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
      }}
    >
      {/* Sun Icon with Animation */}
      <div
        className={`absolute inset-3 transition-all duration-300 ease-out ${
          !isDark
            ? "opacity-100 rotate-0 scale-100"
            : "opacity-0 -rotate-90 scale-50"
        }`}
      >
        <SunIcon className="w-6 h-6 text-yellow-500 group-hover:text-yellow-600 transition-colors duration-200" />
      </div>

      {/* Moon Icon with Animation */}
      <div
        className={`absolute inset-3 transition-all duration-300 ease-out ${
          isDark
            ? "opacity-100 rotate-0 scale-100"
            : "opacity-0 rotate-90 scale-50"
        }`}
      >
        <MoonIcon className="w-6 h-6 text-indigo-400 group-hover:text-indigo-300 transition-colors duration-200" />
      </div>

      {/* Invisible placeholder to maintain button size */}
      <div className="w-6 h-6 opacity-0">
        <SunIcon className="w-6 h-6" />
      </div>

      {/* Ripple Effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-indigo-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
    </button>
  );
};

export default DarkModeToggle;
