
import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  image?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  image
}) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md">
      <svg 
        className="h-10 w-10 text-primary/20 mb-4" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
      </svg>
      
      <p className="mb-6 text-foreground leading-relaxed">{quote}</p>
      
      <div className="flex items-center">
        {image && (
          <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
            <img 
              src={image} 
              alt={author} 
              className="h-full w-full object-cover"
            />
          </div>
        )}
        <div>
          <h4 className="font-medium text-foreground">{author}</h4>
          {role && <p className="text-sm text-muted-foreground">{role}</p>}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
