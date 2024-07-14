"use client"

import gsap from "gsap";
import React, { useEffect, useState } from "react";


interface CursorProps {

}
 
const Cursor: React.FC<CursorProps> = () => {

   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {

      const handleMouseMove = (event : MouseEvent) => {

         const { clientY , clientX } = event;

         if (!isVisible) {
            setIsVisible(true);
         }

         gsap.to("#cursor" , {
            x: clientX - 20 / 2,
            y: clientY - 20 / 2,
            duration: 1,
            delay: 0,
            ease: "power4.out"
         });
      };
      
      window.addEventListener("mousemove" , handleMouseMove);

      return () => {
         window.removeEventListener("mousemove" , handleMouseMove);
      }
   },[isVisible])


   return ( 
      <div 
      id="cursor"
      className={`fixed top-0 left-0 w-[20px] h-[20px] rounded-full z-10 pointer-events-none mix-blend-difference`} />
    );
}
  
export default Cursor;