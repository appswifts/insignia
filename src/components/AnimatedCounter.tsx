
import React, { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  title?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  suffix = '',
  prefix = '',
  duration = 2000,
  title = '',
}) => {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const end = value;
    const increment = end / 60;
    const stepTime = Math.floor(duration / 60);

    const timer = setInterval(() => {
      start += increment;
      setCount(Math.floor(start));

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, value, duration]);

  return (
    <div ref={counterRef} className="text-center">
      <p className="text-4xl md:text-5xl font-bold mb-2 font-serif tracking-tight">
        {prefix}{count}{suffix}
      </p>
      {title && <p className="text-muted-foreground">{title}</p>}
    </div>
  );
};

export default AnimatedCounter;
