'use client'


import React, { useEffect } from "react";

interface GlowEffectProps {
   children : React.ReactNode
}
 
const GlowEffect: React.FC<GlowEffectProps> = ({ children}) => {

   useEffect(() => {
      const captures: NodeListOf<HTMLElement> = document.querySelectorAll(".glow-capture");
  
      captures.forEach((capture : HTMLElement) => {
        // Clone a child element. For example, we can clone the first child.
        const clonedChild = capture.children[0].cloneNode(true) as HTMLElement;
        const overlay = capture.querySelector(".glow-overlay") as HTMLElement;
  
        // Append the cloned child to the overlay.
        overlay.appendChild(clonedChild);
  
        capture.addEventListener("mousemove", (event : MouseEvent) => {
          const x = event.pageX - capture.offsetLeft;
          const y = event.pageY - capture.offsetTop;
  
          overlay.style.setProperty("--glow-x", `${x}px`);
          overlay.style.setProperty("--glow-y", `${y}px`);
          overlay.style.setProperty("--glow-opacity", "1");
        });
  
        // Add mouseleave event to remove the glow effect
        capture.addEventListener("mouseleave", () => {
          overlay.style.setProperty("--glow-opacity", "0");
        });
      });
    }, []);
  
  
    return (
         <div className="relative glow-capture mobile:hidden">
            {children}
         </div>
    );
}
 
export default GlowEffect;