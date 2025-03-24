
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon,
  link
}) => {
  return (
    <div className="border border-border bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all group">
      <div className="h-14 w-14 bg-primary/5 rounded-full flex items-center justify-center mb-6 text-primary">
        {icon}
      </div>
      <h3 className="heading-sm mb-4">{title}</h3>
      <p className="body-md text-muted-foreground mb-6">{description}</p>
      <Link 
        to={link}
        className="inline-flex items-center font-medium text-primary"
      >
        Learn more
        <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};

export default ServiceCard;
