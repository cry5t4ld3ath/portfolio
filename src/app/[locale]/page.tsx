import { unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import StarsCanvas from "@/components/particles";

type Props = {
   params: {locale: string};
};


export default function IndexPage({params: {locale}}: Props) {

   unstable_setRequestLocale(locale)
   
   const t = useTranslations("home")
   

   return (
      <div className="h-[200dvh] w-full">
         <StarsCanvas />
         <h1 className="text-[5rem] text-white">{t("about")}</h1>
      </div>
   )
}