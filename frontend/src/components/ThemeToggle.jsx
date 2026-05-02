import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="theme-toggle-btn"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="toggle-track">
        <motion.div 
          className="toggle-thumb"
          animate={{ x: theme === 'dark' ? 28 : 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
          {theme === 'light' ? (
            <Sun size={16} className="sun-icon" />
          ) : (
            <Moon size={16} className="moon-icon" />
          )}
        </motion.div>
      </div>
    </motion.button>
  );
};

export default ThemeToggle;
