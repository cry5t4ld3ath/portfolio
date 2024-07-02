import React from 'react';
import { locales } from '@/config';
import LocaleLink from './LocaleSwitcherLinks';
import { useLocale, useTranslations } from 'next-intl';


export default function LocaleSwitcher() {

   const t = useTranslations('localeSwitcher')
   const locale = useLocale();

   return (
      <LocaleLink defaultValue={locale}>
         {locales.map((cur) => (
            <button key={cur} value={cur} className={`m-2 p-2 ${cur === locale ? ' text-white' : 'text-red-600'}`}>
               {t(cur)}
            </button>
         ))}
      </LocaleLink>
   )
}

