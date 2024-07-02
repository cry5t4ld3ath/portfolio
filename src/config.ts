import {Pathnames, LocalePrefix} from 'next-intl/routing';

export const defaultLocale = 'en' as const;
export const locales = ['en', 'fa'] as const;

export const pathnames: Pathnames<typeof locales> = {
  '/': '/',

  '/about': {
    en: '/about',
    fa: '/about'
  },

  '/projects' : {
    en: "/projects",
    fa: "/projects"
  }
  
}satisfies Pathnames<typeof locales>;

export const localePrefix: LocalePrefix<typeof locales> = 'always';