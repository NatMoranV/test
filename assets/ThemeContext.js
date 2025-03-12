import React, { createContext, useState, useContext, useEffect } from 'react';
import { Appearance, Platform } from 'react-native';
import {semanticColors} from './semanticColors';


const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

  const getSystemTheme = () => {
    if (Platform.OS === 'web') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return Appearance.getColorScheme() || 'light';
  };

  const [theme, setTheme] = useState(getSystemTheme);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const isDarkMode = theme === 'dark';

  useEffect(() => {
    if (Platform.OS === 'web') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e) => {
        setTheme(e.matches ? 'dark' : 'light');
      };
      mediaQuery.addEventListener('change', handleChange);

      return () => {
        mediaQuery.removeEventListener('change', handleChange);
      };
    } else {
      const subscription = Appearance.addChangeListener(({ colorScheme }) => {
        setTheme(colorScheme);
      });

      return () => subscription.remove();
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: semanticColors[theme], toggleTheme, isDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
