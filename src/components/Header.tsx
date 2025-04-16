
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="font-bold text-xl text-c1x-blue mr-1">C1X</span>
              <span className="font-medium text-lg">Marketing</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#features" className="text-gray-700 hover:text-c1x-blue font-medium transition-colors">
              Features
            </a>
            <a href="#integrations" className="text-gray-700 hover:text-c1x-blue font-medium transition-colors">
              Integrations
            </a>
            <a href="#howitworks" className="text-gray-700 hover:text-c1x-blue font-medium transition-colors">
              How It Works
            </a>
            <Button className="bg-c1x-blue hover:bg-c1x-darkBlue">Get Started</Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle Menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden absolute left-0 right-0 top-[100%] bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden",
            isMenuOpen ? "max-h-[300px] py-4" : "max-h-0"
          )}
        >
          <div className="flex flex-col space-y-4 px-6 pb-4">
            <a 
              href="#features" 
              className="text-gray-700 hover:text-c1x-blue font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#integrations" 
              className="text-gray-700 hover:text-c1x-blue font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Integrations
            </a>
            <a 
              href="#howitworks" 
              className="text-gray-700 hover:text-c1x-blue font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <Button className="bg-c1x-blue hover:bg-c1x-darkBlue w-full">Get Started</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
