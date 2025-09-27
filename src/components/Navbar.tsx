import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import logo from '@/images/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToCostBreakdown = () => {
    if (location.pathname === '/') {
      const element = document.getElementById('cost-breakdown');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="Team Precisio" className="h-10 w-10" />
            <span className="text-xl font-bold text-foreground">Team Precisio</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={scrollToCostBreakdown}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Cost Breakdown
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-white/95 backdrop-blur-sm">
            <div className="flex flex-col space-y-4">
              <button
                onClick={scrollToCostBreakdown}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium px-4 text-left"
              >
                Cost Breakdown
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;