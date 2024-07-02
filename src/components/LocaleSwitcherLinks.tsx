"use client"

import { useRouter , usePathname } from '@/navigation';
import { useParams } from 'next/navigation';
import React,{ ChangeEvent , ReactNode , useTransition } from 'react';

type Props = {
   children: ReactNode; 
   defaultValue: string;
 };


export default function LocaleLink({
   children,
   defaultValue
 }: Props) {

   const router = useRouter();
   const [isPending, startTransition] = useTransition();
   const pathname = usePathname();
   const params = useParams();
 

   function onButtonClick(nextLocale: string) {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }

  return (
    <div className={`relative text-gray-700 ${isPending && 'transition-opacity [&:disabled]:opacity-30'}`}>
      {React.Children.map(children, child => 
        React.cloneElement(child as React.ReactElement, {
          onClick: () => onButtonClick((child as React.ReactElement).props.value),
          disabled: isPending
        })
      )}
    </div>
  );
};

