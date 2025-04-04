
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-eluvie-gold via-eluvie-teal to-eluvie-blue">
                eluvie
              </span>
            </a>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 text-sm font-medium">How it works</a>
            <a href="#features" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Pricing</a>
            <div className="relative group">
              <button className="flex items-center text-gray-600 hover:text-gray-900 text-sm font-medium">
                Resources <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-2">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">Blog</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">Help Center</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">Community</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
              Login
            </a>
            <Button className="bg-eluvie-blue hover:opacity-90">
              Start for Free
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Nav */}
        {isOpen && (
          <div className="mt-4 md:hidden">
            <div className="flex flex-col space-y-3 py-4">
              <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 text-base font-medium" onClick={() => setIsOpen(false)}>
                How it works
              </a>
              <a href="#features" className="text-gray-600 hover:text-gray-900 text-base font-medium" onClick={() => setIsOpen(false)}>
                Features
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 text-base font-medium" onClick={() => setIsOpen(false)}>
                Pricing
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-base font-medium" onClick={() => setIsOpen(false)}>
                Resources
              </a>
              <div className="pt-4 flex flex-col space-y-3">
                <a href="#" className="text-gray-700 hover:text-gray-900 text-base font-medium">
                  Login
                </a>
                <Button className="bg-eluvie-blue hover:opacity-90">
                  Start for Free
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
