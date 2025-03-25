
import React from 'react';

interface ContactInfoCardProps {
  icon: React.ReactNode;
  title: string;
  details: string[];
  delay?: number;
}

const ContactInfoCard: React.FC<ContactInfoCardProps> = ({
  icon,
  title,
  details,
  delay = 0
}) => {
  return (
    <div 
      className="glass-panel rounded-xl p-8 text-center animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="h-14 w-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
        {icon}
      </div>
      <h3 className="text-lg font-medium mb-3">{title}</h3>
      <div className="space-y-1">
        {details.map((detail, index) => (
          <p key={index} className={index === 0 ? "font-medium" : "text-sm text-foreground/80"}>
            {detail}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ContactInfoCard;
