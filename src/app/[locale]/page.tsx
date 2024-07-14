import { unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import StarsCanvas from "@/components/particles";
import ParallaxEffect from "@/components/parallaxE";
import GlowEffect from "@/components/Glow";
import React from "react";


type Props = {
   params: {locale: string};
};


export default function IndexPage({params: {locale}}: Props) {

   unstable_setRequestLocale(locale)
   
   const t = useTranslations("home")
   

   return (
      <div className="min-h-screen w-full grid place-items-center">
         <StarsCanvas />
         <ParallaxEffect>
            <GlowEffect>
            <h1 className="text-[5rem] text-nowrap text-stone-600 pointer-events-none glow glow:text-white glow:drop-shadow-[5px_5px_4px_rgba(255,0,0,1)]">{t("about")}</h1>
               <div className="glow-overlay" style={{"--glow-color" : "#ff0000"} as React.CSSProperties} />
            </GlowEffect>
         </ParallaxEffect>
         <h1 className="text-[3rem] text-stone-600 pointer-events-none desktop:hidden">{t("about")}</h1>
      </div>
   )
}