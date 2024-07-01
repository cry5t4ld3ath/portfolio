import { unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import style from "./styles.module.css"

type Props = {
   params: {locale: string};
};


export default function IndexPage({params: {locale}}: Props) {

   unstable_setRequestLocale(locale);

   const t = useTranslations("Index")
   

   return (
      <div className="min-h-screen w-full bg-black">
         <h1 className="text-[5rem] text-white">{t("about")}</h1>
      </div>
   )
}