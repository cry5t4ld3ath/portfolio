"use client"

import Image from "next/image";
import { useState } from "react";
import NavigationLink from "./NavigationLink";
import { IntlProvider, useLocale, useTranslations } from "next-intl";
import { locales } from "@/config";
import { unstable_setRequestLocale } from "next-intl/server";
import LocaleSwitcher from "./MobileNavigation";
import { AppProps } from "next/app";






const MobileHeader =({ Component , pageProps }: AppProps) => {

   const [menuOpen, setMenuOpen] = useState(false)


   const handleNav = () => {
      setMenuOpen(!menuOpen)
   }


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

                  <div className="fixed bottom-3 right-10 border-red-900 border rounded-2xl">
                  <IntlProvider
                     messages={{
                     // Define your translations here if necessary
                     localeSwitcher: {
                        en: 'English',
                        fa: 'Farsi',
                        // Add more locales as needed
                     },
                     }}
                     locale={pageProps.locale || locales[0]} // Default locale
                  >
                     <LocaleSwitcher params={{ locale: pageProps.locale }} />
                     <Component {...pageProps} />
                  </IntlProvider>
                  </div>
                  
               </div>
            </div>

         </div>
      </div>
   )
}