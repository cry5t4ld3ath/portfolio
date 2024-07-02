import { useTranslations } from "next-intl"


export default function AboutPage() {

   const t = useTranslations('about');

   return (
      <div className="min-h-screen bg-slate-900">
         <h1 className="text-[5rem] text-red-900">{t('title')}</h1>
      </div>
   )
}