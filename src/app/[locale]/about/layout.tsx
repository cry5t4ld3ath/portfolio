import { ReactNode } from 'react';
import { notFound } from 'next/navigation';

const SUPPORTED_LOCALES = ['en', 'fa'];

export async function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = params;
  return {
    title: locale === 'en' ? 'About Us' : 'درباره ما',
  };
}

type Props = {
  children: ReactNode;
  params: {
    locale: string;
  };
};

export default function LocaleLayout({ children, params: { locale } }: Props) {
  if (!SUPPORTED_LOCALES.includes(locale)) {
    notFound();
  }
  return <>{children}</>;
}
