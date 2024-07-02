"use client"

import Error from "next/error"


export default function NotFound() {
   return (
      <html>
         <body>
            <div className="min-h-screen text-white/40 bg-gradient-to-t from-gray-900 to-rose-900 grid place-items-center select-none">
               <Error statusCode={404}/>
            </div>
         </body>
      </html>
   )
}