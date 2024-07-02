
"use client"

import type { pathnames } from "@/config";
import { Link } from "@/navigation";
import { motion } from "framer-motion";
import { useSelectedLayoutSegment } from "next/navigation";
import { ComponentProps, useEffect, useState } from "react";


export default function NavigationLink<
Pathname extends keyof typeof pathnames
> ({href, ...rest} : ComponentProps<typeof Link<Pathname>>) {

   const [isMobile, setIsMobile] = useState(false);
   const selectedLayoutSegment = useSelectedLayoutSegment();

   const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/" ;


   const isActive = pathname === href;

   useEffect(() => {
      const handleResize = () => {
         setIsMobile(window.innerWidth < 800);
      }

      handleResize();
      window.addEventListener('resize' , handleResize);

      return() => {
         window.removeEventListener('resize' , handleResize);
      }
   });

   


   return (
      <motion.div
      initial={true}
      animate={isActive ? {scale: 1.5, x: isMobile ? 0 : -70} : {scale: 1}}>
         <Link 
         aria-current={isActive ? 'page' : undefined}
         href={href}
         {...rest}
         className={` ${isMobile ? "text-[2.5rem]" : "text-[3.5rem]"} text-red-800 ${isActive ? "text-red-800" : "text-white"}`}
         />
      </motion.div>

   )

}


