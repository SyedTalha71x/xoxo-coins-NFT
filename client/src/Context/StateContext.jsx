/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState, useEffect } from "react";

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(prefersDark);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <StateContext.Provider value={{ isDarkMode, toggleDarkMode, isSidebarOpen, setIsSidebarOpen }}>
      <div className={isDarkMode ? "dark" : ""}>{children}</div>
    </StateContext.Provider>
  );
};

export const useDarkMode = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
};
