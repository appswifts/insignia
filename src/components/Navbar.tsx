
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/button';

const navLinks = [
  { title: "Home", path: "/" },
  { title: "About Us", path: "/about" },
  { title: "Our Services", path: "/services" },
  { title: "Tenants", path: "/tenants" },
  { title: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container-custom py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-serif text-2xl font-bold tracking-tight">INSIGNIA</span>
            <span className="text-xs bg-black text-white px-1.5 py-0.5">HOUSING CIC</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="link-hover text-sm font-medium">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
            <Button className="flex items-center gap-2 bg-black text-white rounded-full hover:bg-black/80">
              <Phone size={16} />
              <span>0121 729 5002</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-gray-800">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
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
              <Button className="flex items-center gap-2 w-full justify-center bg-black text-white rounded-full hover:bg-black/80">
                <Phone size={16} />
                <span>0121 729 5002</span>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
