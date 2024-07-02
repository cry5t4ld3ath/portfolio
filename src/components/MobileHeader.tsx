"use client"

import Image from "next/image";
import { useState } from "react";
import NavigationLink from "./NavigationLink";
import { useLocale, useTranslations } from "next-intl";
import LocaleLink from "./LocaleSwitcherLinks";
import { locales } from "@/config";
import { unstable_setRequestLocale } from "next-intl/server";






export default function MobileHeader() {

   const [menuOpen, setMenuOpen] = useState(false)


   const handleNav = () => {
      setMenuOpen(!menuOpen)
   }

   // const localee = useLocale();
   // const t = useTranslations('localeSwitcher')

   return (
      <div className="desktop:hidden fixed top-0 right-0">

         <div>
            {!menuOpen && (
               <div onClick={handleNav}>
                  <Image 
                  className="fixed top-5 right-5" 
                  src="./navbar.svg" 
                  alt="navbar" 
                  width={32} height={32}/>
               </div>
            )}

            <div className={`fixed top-0 right-0 w-full min-h-screen backdrop-blur-[2px] bg-red-950/20 transition-all duration-500 ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
               <div onClick={handleNav} className="h-screen">
                  <Image 
                  src="./navclos.svg" 
                  width={32} height={32} 
                  alt="close" 
                  className="mix-blend-difference absolute right-5 top-[0.8rem]"/>

                  <div className="w-full h-full flex flex-col justify-center items-center font-[evance] text-[2rem]">
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

                  {/* <div className="fixed bottom-3 right-10 border-red-900 border rounded-2xl">
                     <LocaleLink defaultValue={locale}>
                        {locales.map((cur) => (
                           <button key={cur} value={cur} className={`mx-4 my-2 ${cur === localee ? ' text-white' : 'text-red-600'}`}>
                           {t(cur)}
                           </button>
                        ))}
                     </LocaleLink>
                  </div> */}
                  
               </div>
            </div>

         </div>
      </div>
   )
}