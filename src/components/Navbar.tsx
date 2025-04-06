import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/button';

const navLinks = [
  { title: "Home", path: "/" },
  { title: "About Us", path: "/about" },
  { title: "Services", path: "/services" },
  { title: "Tenants", path: "/tenants" },
  { title: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const isHomePage = location.pathname === '/';

  const toggleMenu = () => setIsOpen(!isOpen);

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : isHomePage ? 'bg-transparent' : 'bg-white shadow-md'}`}>
      <div className="container-custom">
        <nav className="flex items-center justify-between h-32">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/718c3d4f-f297-4b6b-a382-ad66dc8df314.png" 
              alt="Insignia Housing Logo" 
              className="h-32 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className={`link-hover text-sm font-medium ${(!scrolled && isHomePage) ? 'text-white' : 'text-black'}`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
              <li>
                <Button className={`flex items-center gap-1.5 px-4 py-1.5 text-sm ${scrolled ? 'bg-primary text-white' : 'bg-white text-primary'} rounded-full hover:bg-primary/90 hover:text-white`}>
                  <Phone size={14} />
                  <span>0207 1172 588</span>
                </Button>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className={`md:hidden ${scrolled ? 'text-gray-800' : isHomePage ? 'text-white' : 'text-black'}`}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out text-foreground ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="container-custom py-6">
          <ul className="space-y-6">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  to={link.path} 
                  className="text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </Link>
              </li>
            ))}
            <li>
              <Button className="flex items-center gap-1.5 px-4 py-1.5 text-sm w-full justify-center bg-primary text-white rounded-full hover:bg-primary/90">
                <Phone size={14} />
                <span>0207 1172 588</span>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
