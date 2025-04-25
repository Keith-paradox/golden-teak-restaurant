
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed w-full bg-cream/90 backdrop-blur-sm z-50 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-teak text-2xl font-bold">GOLDEN TEAK</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('menu')} className="text-sage hover:text-teak transition-colors">
              Menu
            </button>
            <button onClick={() => scrollToSection('about')} className="text-sage hover:text-teak transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-sage hover:text-teak transition-colors">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('menu')}
                className="text-sage hover:text-teak transition-colors text-left px-2"
              >
                Menu
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-sage hover:text-teak transition-colors text-left px-2"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-sage hover:text-teak transition-colors text-left px-2"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
