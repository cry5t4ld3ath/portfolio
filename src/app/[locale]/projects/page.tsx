import { useTranslations } from "next-intl"
import { unstable_setRequestLocale } from "next-intl/server";


type Props = {
   params: {locale: string};
};


export default function AboutPage({params: {locale}}: Props) {

   unstable_setRequestLocale(locale);

   const t = useTranslations("projects");

   return (
      <div className="min-h-screen bg-indigo-900">
         <h1 className="text-[5rem] text-red-800">{t("title")}</h1>
      </div>
   )
}