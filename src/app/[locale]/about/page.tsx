import { useTranslations } from "next-intl"
import { unstable_setRequestLocale } from "next-intl/server";


type Props = {
   params: {locale: string};
};


export default function AboutPage({params: {locale}}: Props) {

   unstable_setRequestLocale(locale)


   const t = useTranslations('about');

   return (
      <div className="min-h-screen bg-slate-900">
         <h1 className="text-[5rem] text-red-900">{t('title')}</h1>
      </div>
   )
}