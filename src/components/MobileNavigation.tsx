import LocaleLink from "./LocaleSwitcherLinks";
import { useLocale, useTranslations } from "next-intl";
import { locales } from "@/config";
import { unstable_setRequestLocale } from "next-intl/server";



type Props = {
   params: {locale: string};
};


const LocaleSwitcher: React.FC<Props> = ({params: {locale}}: Props) => {


   unstable_setRequestLocale(locale);

   const localee = useLocale();
   const t = useTranslations('localeSwitcher');


   return (
      <LocaleLink defaultValue={locale}>
      {locales.map((cur) => (
         <button 
         key={cur} 
         value={cur} 
         className={`mx-4 my-2 ${cur === localee ? ' text-white' : 'text-red-600'}`}
         onClick={() => unstable_setRequestLocale(cur)}>
         {t(cur)}
         </button>
      ))}
   </LocaleLink>
   )
}

export default LocaleSwitcher;