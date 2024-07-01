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
      <div className="">
         <h1 className={style.tex}>{t("about")}</h1>
      </div>
   )
}