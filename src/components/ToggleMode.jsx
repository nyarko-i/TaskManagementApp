import React, { useState, useEffect } from "react";

export default function ToggleMode() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    localStorage.setItem("theme", next ? "dark" : "light");
    document.documentElement.classList.toggle("dark", next);
  };

  return (
    <button
      onClick={toggle}
      className={`absolute top-4 right-4 sm:top-2 sm:right-2 flex items-center 
    p-2 sm:p-1 rounded-full transition-colors 
    w-14 h-8 sm:w-10 sm:h-5
    
    
    ${isDark ? "bg-indigo-600" : "bg-gray-400"}`}
    >
      <div
        className={`bg-white rounded-full transform transition-transform
      w-6 h-6 sm:w-4 sm:h-4
      ${isDark ? "translate-x-6 sm:translate-x-5" : ""}`}
      />
    </button>
  );
}
