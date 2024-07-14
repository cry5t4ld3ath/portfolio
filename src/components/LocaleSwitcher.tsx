"use client"

import React, { useEffect, useRef, useState } from 'react';
import { locales } from '@/config';
import LocaleLink from './LocaleSwitcherLinks';
import { useLocale, useTranslations } from 'next-intl';
import gsap from 'gsap';


export default function LocaleSwitcher() {

   const [isVisible, setIsVisible] = useState(false);
   const buttonRef = useRef<HTMLDivElement>(null);
   const boxRef = useRef<HTMLDivElement>(null);

   const t = useTranslations('localeSwitcher')
   const locale = useLocale();


   useEffect(() => {
      const button = buttonRef.current;
      const box = boxRef.current;
      
      gsap.set(boxRef.current , { autoAlpha: 0})


      if (!button || !box) return;
  
      const updateBoxPosition = (e: MouseEvent) => {
          if (!isVisible) return;
  
          const rect = button.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
  
          gsap.to(box, {
              x: x / 2 - 20,
              y: y / 2 - 20,
              duration: 0.3,
              ease: "power2.out"
          });
      };
  
      button.addEventListener("mousemove", updateBoxPosition);
  
      return () => {
          button.removeEventListener('mousemove', updateBoxPosition);
      };
  }, [isVisible, buttonRef, boxRef]);



  const handleMouseEnter = () => {
   setIsVisible(true);
   gsap.to(boxRef.current, { autoAlpha: 1, duration: 0.3 });
};

const handleMouseLeave = () => {
   setIsVisible(false);
   gsap.to(boxRef.current, { autoAlpha: 0, duration: 0.3 });
};




   return (
      <React.Fragment>
         <div ref={buttonRef}>
            <LocaleLink defaultValue={locale}>
               {locales.map((cur) => (
                  <button 
                  key={cur} 
                  value={cur} 
                  className={`m-2 p-2 
                  ${cur === locale ? ' text-white' : 'text-red-600'}`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  >
                     {t(cur)}
                  </button>
               ))}
            </LocaleLink>

               <div
               ref={boxRef}
               className='absolute top-[-50px] left-0 w-30 h-10'
               >
                  <p className='text-white text-[2rem] font-[evance]'>Language</p>
               </div>
            </div>
      </React.Fragment>
   )
}

