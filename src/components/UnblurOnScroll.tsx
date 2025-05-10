// components/UnblurOnScroll.jsx
import React, { useEffect, useRef, ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface UnblurOnScrollProps {
  children: ReactNode;
  className?: string;
}

export default function UnblurOnScroll({ children, className = '' }: UnblurOnScrollProps) {
  const elRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = elRef.current;

    gsap.fromTo(
      element,
      { filter: 'blur(8px)' },
      {
        filter: 'blur(0px)',
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'bottom bottom',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <div ref={elRef} className={`transition-all duration-1000 ${className}`}>
      {children}
    </div>
  );
}
