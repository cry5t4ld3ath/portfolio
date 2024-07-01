"use client"

import Error from "next/error"


export default function NotFound() {
   return (
      <html>
         <body>
            <div className="min-h-screen bg-black text-white">
               <Error statusCode={404}/>
            </div>
         </body>
      </html>
   )
}