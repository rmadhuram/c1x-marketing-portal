
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";
import AuthButton from "./AuthButton";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white/80 dark:bg-c1x-dark-background/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img 
                src="https://c1exchange.com/images/stories/joomla/logo-c1x.png" 
                alt="C1X Logo" 
                className="h-10 mr-2"
              />
              <span className="font-medium text-lg dark:text-white">Marketing</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-c1x-blue dark:hover:text-c1x-orange font-medium transition-colors">
              Features
            </a>
            <a href="#integrations" className="text-gray-700 dark:text-gray-300 hover:text-c1x-blue dark:hover:text-c1x-orange font-medium transition-colors">
              Integrations
            </a>
            <a href="#howitworks" className="text-gray-700 dark:text-gray-300 hover:text-c1x-blue dark:hover:text-c1x-orange font-medium transition-colors">
              How It Works
            </a>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <AuthButton />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle Menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden absolute left-0 right-0 top-[100%] bg-white dark:bg-c1x-dark-background shadow-lg transition-all duration-300 ease-in-out overflow-hidden",
            isMenuOpen ? "max-h-[300px] py-4" : "max-h-0"
          )}
        >
          <div className="flex flex-col space-y-4 px-6 pb-4">
            <a 
              href="#features" 
              className="text-gray-700 dark:text-gray-300 hover:text-c1x-blue dark:hover:text-c1x-orange font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#integrations" 
              className="text-gray-700 dark:text-gray-300 hover:text-c1x-blue dark:hover:text-c1x-orange font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Integrations
            </a>
            <a 
              href="#howitworks" 
              className="text-gray-700 dark:text-gray-300 hover:text-c1x-blue dark:hover:text-c1x-orange font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <AuthButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
