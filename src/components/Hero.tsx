
import React from 'react';

interface HeroProps {
  title: string;
  subtitle?: string;
  image?: string;
  overlay?: boolean;
  centered?: boolean;
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ 
  title, 
  subtitle, 
  image = "/hero-bg.jpg", 
  overlay = true,
  centered = true,
  className = ""
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
        <div className="absolute inset-0 bg-black/40"></div>
      )}
      
      <div className="relative z-10 container-custom">
        <div className={`max-w-3xl ${centered ? 'mx-auto' : ''} animate-fade-in`}>
          <h1 className="heading-xl text-white mb-6">{title}</h1>
          {subtitle && (
            <p className="body-lg text-white/90 max-w-xl mx-auto">{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
