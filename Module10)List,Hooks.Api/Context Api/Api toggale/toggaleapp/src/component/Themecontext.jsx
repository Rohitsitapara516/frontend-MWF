import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const loadTheme = async () => {
      const apiTheme = await fetchTheme();
      setTheme(apiTheme);
      setLoading(false);
    };
    loadTheme();
  }, []);


  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
   
  };

  if (loading) return <p>Loading theme...</p>;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}