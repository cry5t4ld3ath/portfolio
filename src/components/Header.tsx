"use client"


import React, { useEffect, useRef, useState } from "react";
import LocaleSwitcher from "./LocaleSwitcher";
import NavigationLink from "./NavigationLink";
import gsap from "gsap";



const Header : React.FC = () => {

   const headerRef = useRef(null);
 
   useEffect(() => {

      const hasLoaded = sessionStorage.getItem('hasLoaded');
     
      if (!hasLoaded) {
         const header = headerRef.current;

         gsap.set(header, { opacity: 0, x: 100 });

         const tl = gsap.timeline({ delay: 2.5 });

         tl.to(header, {
            duration: 1,
            opacity: 1,
            x: 0,
            ease: "power3.out"
         })

         
         sessionStorage.setItem('hasLoaded', 'true');
      }


   }, []);


   return (
      <header 
      ref={headerRef}
      className="min-h-screen desktop:fixed top-0 right-0 w-[15vw] mobile:hidden z-50">
         <nav className="h-full w-full">
            <div>
               <div className="min-h-screen w-full px-2 text-[3rem] flex justify-end">
                  <div className="space-y-20 flex flex-col items-end justify-center font-[evance]">
                     {['home' , 'about' , 'projects'].map((item) => (
                        <NavigationLink 
                        key={item}
                        href={item === 'home' ? '/' : `/${item}`} 
                        >
                           {item}
                        </NavigationLink>
                     ))}
                  </div>
               </div>
               <div className="fixed bottom-0 right-5">
                  <LocaleSwitcher />
               </div>
            </div>
         </nav>
      </header>
   )
}

export default Header;