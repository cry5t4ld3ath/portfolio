import { unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import StarsCanvas from "@/components/particles";

type Props = {
   params: {locale: string};
};


export default function IndexPage({params: {locale}}: Props) {


   const t = useTranslations("home")
   

   return (
      <div className="min-h-screen w-full">
         <StarsCanvas />
         <h1 className="text-[5rem] text-white">{t("about")}</h1>
      </div>
   )
}