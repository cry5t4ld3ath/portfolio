import { GetStaticPaths, GetStaticProps } from 'next';
import { useTranslations } from "next-intl";
import { getLangDir } from "rtl-detect";

type Params = {
  locale: string;
};

type Props = {
  locale: string;
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  return {
    paths: [
      { params: { locale: 'en' } },
      { params: { locale: 'fa' } }
    ],
    fallback: false
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  return {
    props: {
      locale: params!.locale
    }
  };
};

export default function AboutPage({ locale }: Props) {
  const t = useTranslations('about');
  const direction = getLangDir(locale);

  return (
    <div className={`h-[200vh] bg-green-950 text-black text-[5rem] ${direction === 'rtl' ? 'rtl' : 'ltr'}`}>
      <div className="min-h-screen">
        <h1 className="">{t('title')}</h1>
      </div>
    </div>
  );
}
