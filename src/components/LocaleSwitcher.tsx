import React from 'react';
import { locales } from '@/config';
import LocaleLink from './LocaleSwitcherLinks';
import { useLocale, useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';


type Props = {
   params: {locale: string};
};


export default function LocaleSwitcher({params: {locale}}: Props) {


   unstable_setRequestLocale(locale)

   const t = useTranslations('localeSwitcher')
   const localee = useLocale();

   return (
      <LocaleLink defaultValue={locale}>
         {locales.map((cur) => (
            <button key={cur} value={cur} className={`m-2 p-2 ${cur === localee ? ' text-white' : 'text-red-600'}`}>
               {t(cur)}
            </button>
         ))}
      </LocaleLink>
   )
}

