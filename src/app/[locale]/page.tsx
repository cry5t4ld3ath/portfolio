import { unstable_setRequestLocale } from "next-intl/server";



type Props = {
   params: {locale: string};
};


export default function IndexPage({params: {locale}}: Props) {

   unstable_setRequestLocale(locale);

   const t = useTranslations("Index")
   

   return (
      <div className="">
         <h1 className="tex text-[5rem] text-black">{t("about")}</h1>
      </div>
   )
}