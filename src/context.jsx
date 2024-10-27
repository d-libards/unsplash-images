import { useContext, createContext, useState, useEffect } from 'react';

const AppContext = createContext();

function getInitialDarkMode() {
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;
  const storedDarkMode = localStorage.getItem('darkTheme');

  if (storedDarkMode === null) {
    return prefersDarkMode;
  }

  return storedDarkMode === 'true';
}

export function AppProvider({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
  const [searchTerm, setSearchTerm] = useState('dogs');

  function toggleDarkTheme() {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    localStorage.setItem('darkTheme', newDarkTheme);
  }

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkTheme);
  }, [isDarkTheme]);

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, setSearchTerm, searchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(AppContext);
}
