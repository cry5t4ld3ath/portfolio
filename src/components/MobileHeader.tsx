"use client"

import { useState } from "react";
import NavigationLink from "./NavigationLink";
import { useLocale, useTranslations } from "next-intl";
import LocaleLink from "./LocaleSwitcherLinks";
import { locales } from "@/config";



export default function MobileHeader () {

   const [menuOpen, setMenuOpen] = useState(false);


   const handleNav = () => {
      setMenuOpen(!menuOpen);

      if (!menuOpen) {
         document.body.classList.add("overflow-hidden");
      } else {
         document.body.classList.remove("overflow-hidden");
      }
   };

   const locale = useLocale();
   const t = useTranslations('localeSwitcher');

   return (
      <div className="desktop:hidden">
         <div onClick={handleNav} className="w-fit h-fit fixed top-8 right-8 z-50">
            <button className="w-fit h-fit relative grid place-items-center">
               <span className={`
                  w-[25px] h-[4px] absolute rounded-full bg-white transform duration-500 ease-in-out 
                  ${menuOpen ? "rotate-45 bg-red-800 w-[35px]" : "-translate-y-1.5"} `} 
                  />
               <span className={`
                  w-[35px] h-[4px] absolute rounded-full bg-white transform duration-500 ease-in-out 
                  ${menuOpen ? "scale-0" : ""}`} 
                  />
               <span className={`
                  w-[25px] h-[4px] absolute rounded-full bg-white transform duration-500 ease-in-out 
                  ${menuOpen ? "-rotate-45 bg-red-800 w-[35px]" : "translate-y-1.5"}`} 
                  />
            </button>
         </div>

         <div className={`
         fixed top-0 right-0 w-full min-h-screen backdrop-blur-2xl bg-red-950/20 transition-all duration-500 
         ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
         >
            <div onClick={handleNav} className="w-full min-h-screen relative">

               <div className="h-screen flex flex-col justify-center items-center font-[evance] text-[2rem]">
                  <NavigationLink href='/'>
                        Home
                     </NavigationLink>
                     <NavigationLink href='/about'>
                        About
                     </NavigationLink>
                     <NavigationLink href='/projects'>
                        Projects
                     </NavigationLink>
               </div>

               <div className="fixed top-2 left-2">
                  <LocaleLink defaultValue={locale}>
                     {locales.map((cur) => (
                        <button 
                        key={cur} 
                        value={cur} 
                        className={`mx-4 my-2 ${cur === locale ? ' text-white' : 'text-red-600'}`}>
                        {t(cur)}
                        </button>
                     ))}
                  </LocaleLink>
               </div>
            </div>
         </div>
      </div>
   );
};