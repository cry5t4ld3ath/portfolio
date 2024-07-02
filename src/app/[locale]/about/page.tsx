import { useTranslations } from "next-intl"
import { getLangDir } from "rtl-detect";



type Props = {
   params : {locale: string}
}



export default function AboutPage({
   params: {locale}
} : Props) {

   const t = useTranslations('about');
   const direction = getLangDir(locale);

   return (
      <div className="h-[200vh] bg-green-950 text-black text-[5rem]">
         <div className="min-h-screen">
            <h1 className="">{t('title')}</h1> 
         </div>
      </div>
   )
}