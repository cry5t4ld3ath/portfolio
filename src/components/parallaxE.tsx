"use client";

import React, { useEffect, ReactNode } from 'react';
import { TweenMax, Power2 } from 'gsap';

interface ParallaxEffectProps {
  children: ReactNode;
}

const ParallaxEffect: React.FC<ParallaxEffectProps> = ({ children }) => {
  useEffect(() => {
    const container = document.getElementById('container');

    if (container) {
      container.addEventListener('mousemove', callParallax);
    }

    function callParallax(e: MouseEvent) {
      const childrenElements = container?.children;
      if (childrenElements) {
        for (let i = 0; i < childrenElements.length; i++) {
          const movement = (i + 1) * -50; 
          parallaxIt(e, childrenElements[i], movement);
        }
      }
    }

    function parallaxIt(e: MouseEvent, target: Element, movement: number) {
      const container = document.getElementById('container');
      if (!container) return;

      const relX = e.pageX - container.offsetLeft;
      const relY = e.pageY - container.offsetTop;

      TweenMax.to(target, 1, {
        x: ((relX - container.offsetWidth / 2) / container.offsetWidth) * movement,
        y: ((relY - container.offsetHeight / 2) / container.offsetHeight) * movement,
        ease: Power2.easeOut,
      });
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', callParallax);
      }
    };
  }, []);

  return (
    <div id="container">
      {children}
    </div>
  );
};

export default ParallaxEffect;
