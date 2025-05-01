
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setIsDarkMode(isDark);
    
    // Check for system preferences on initial load
    if (localStorage.theme === undefined && 
        window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    }
  }, []);
  
  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDarkMode(true);
    }
  };
  
  return (
    <Toggle 
      pressed={isDarkMode}
      onPressedChange={toggleTheme}
      aria-label="Toggle dark mode"
      className="rounded-full h-9 w-9 p-0"
    >
      {isDarkMode ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </Toggle>
  );
};

export default ThemeToggle;
