import { useTranslations } from "next-intl"



export default function AboutPage() {

   const t = useTranslations('about');

   return (
      <div className="h-[200vh] bg-green-950 text-black text-[5rem]">
         <div className="min-h-screen">
            <h1 className="">{t('title')}</h1> 
         </div>
      </div>
   )
}