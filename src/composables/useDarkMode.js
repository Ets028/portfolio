import { useState, useLayoutEffect, useCallback } from "react";

export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("darkMode");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "true") return true;
    if (savedTheme === "false") return false;

    return prefersDark;
  });

  const updateDarkMode = useCallback((enabled) => {
    const root = document.documentElement;

    if (enabled) {
      root.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, []);

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode((prev) => {
      const next = !prev;
      updateDarkMode(next);
      return next;
    });
  }, [updateDarkMode]);

  useLayoutEffect(() => {
    updateDarkMode(isDarkMode);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      // Hanya update jika user belum set manual
      if (localStorage.getItem("darkMode") === null) {
        setIsDarkMode(e.matches);
        updateDarkMode(e.matches);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [isDarkMode, updateDarkMode]);

  return { isDarkMode, toggleDarkMode };
}
