
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: About */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <span className="font-serif text-2xl font-bold tracking-tight">INSIGNIA</span>
              <span className="text-xs bg-white text-black px-1.5 py-0.5">HOUSING CIC</span>
            </div>
            <p className="body-sm opacity-80 max-w-xs">
              We provide quality homes with additional support to vulnerable and homeless adults in Birmingham.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Our Services', 'Tenants', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center group">
                    <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="link-hover">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold">Our Services</h3>
            <ul className="space-y-3">
              {['Housing', 'Support', 'Solutions', 'Referrals', 'Landlords'].map((item) => (
                <li key={item}>
                  <Link to={`/services/${item.toLowerCase()}`} className="flex items-center group">
                    <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="link-hover">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={18} className="mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">0121 729 5002</p>
                  <p className="text-xs opacity-80">Lines open 24/7</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">info@insigniahousing.org</p>
                  <p className="text-xs opacity-80">Email us anytime</p>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Birmingham Office</p>
                  <p className="text-xs opacity-80">123 Main Street, Birmingham, B1 2AB</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm opacity-80">&copy; {new Date().getFullYear()} Insignia Housing CIC. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100">Privacy Policy</a></li>
                <li><a href="#" className="hover:opacity-100">Terms of Service</a></li>
                <li><a href="#" className="hover:opacity-100">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
