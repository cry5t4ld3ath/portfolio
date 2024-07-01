import { unstable_setRequestLocale } from "next-intl/server";



type Props = {
   params: {locale: string};
};


export default function IndexPage({params: {locale}}: Props) {

   unstable_setRequestLocale(locale);

   return (
      <div className="min-h-screen bg-black w-full">
         <h1 className="text-[5rem] text-black"> hello</h1>
      </div>
   )
}