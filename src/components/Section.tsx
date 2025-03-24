
import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: React.ElementType;
  container?: boolean;
  background?: 'white' | 'light' | 'dark';
}

const Section: React.FC<SectionProps> = ({ 
  children, 
  className = "", 
  id,
  as: Component = "section",
  container = true,
  background = "white"
}) => {
  const getBgColor = () => {
    switch (background) {
      case 'light': return 'bg-secondary text-white';
      case 'dark': return 'bg-black text-white';
      default: return 'bg-white text-white';
    }
  };
  
  return (
    <Component 
      id={id} 
      className={`section ${getBgColor()} ${className}`}
    >
      {container ? (
        <div className="container-custom">{children}</div>
      ) : children}
    </Component>
  );
};

export default Section;
