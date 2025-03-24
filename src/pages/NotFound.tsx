
import React from "react";
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-secondary/50 px-4">
      <div className="max-w-md w-full text-center animate-fade-in">
        <h1 className="text-9xl font-bold text-primary">404</h1>
        <h2 className="heading-md mb-6">Page Not Found</h2>
        <p className="body-md text-muted-foreground mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button asChild className="rounded-full inline-flex items-center">
          <Link to="/">
            <ArrowLeft size={16} className="mr-2" />
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
