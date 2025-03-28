import React from 'react';

interface ImageGalleryProps {
  images: string[];
  title?: string;
  subtitle?: string;
  className?: string;
  onDarkBackground?: boolean;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ 
  images, 
  title, 
  subtitle,
  className = "",
  onDarkBackground = false
}) => {
  return (
    <div className={`${className}`}>
      {(title || subtitle) && (
        <div className="text-center mb-10 animate-fade-in">
          {title && <h2 className="heading-lg mb-4">{title}</h2>}
          {subtitle && <p className={`body-md ${onDarkBackground ? "text-white" : "text-muted-foreground"} max-w-2xl mx-auto`}>{subtitle}</p>}
        </div>
      )}
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="aspect-square overflow-hidden rounded-xl shadow-md animate-fade-in hover:shadow-lg transition-shadow"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <img 
              src={image} 
              alt={`Support image ${index + 1}`} 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
