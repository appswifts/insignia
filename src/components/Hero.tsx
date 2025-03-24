
import React from 'react';

interface HeroProps {
  title: string;
  subtitle?: string;
  image?: string;
  overlay?: boolean;
  centered?: boolean;
  className?: string;
  address?: boolean; // New prop to display address
}

const Hero: React.FC<HeroProps> = ({ 
  title, 
  subtitle, 
  image = "/hero-bg.jpg", 
  overlay = true,
  centered = true,
  className = "",
  address = false
}) => {
  return (
    <div 
      className={`relative min-h-[70vh] flex items-center ${centered ? 'justify-center text-center' : 'justify-start text-left'} ${className}`}
      style={{ 
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {overlay && (
        <div className="absolute inset-0 bg-black/50"></div>
      )}
      
      <div className="relative z-10 container-custom">
        <div className={`max-w-3xl ${centered ? 'mx-auto' : ''} animate-fade-in`}>
          <h1 className="heading-xl text-white mb-6">{title}</h1>
          {subtitle && (
            <p className="body-lg text-white/90 max-w-2xl mx-auto mb-6">{subtitle}</p>
          )}
          {address && (
            <div className="inline-flex items-center bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span>3 Holt Road, Wembley, England, HA0 3PT</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
