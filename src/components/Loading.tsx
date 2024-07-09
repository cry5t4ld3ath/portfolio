"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";


interface LoadingProps {
  children: React.ReactNode;
}

const Loading = ({ children }: LoadingProps) => {
  const [isLoading, setIsLoading] = useState<boolean | null>(false);

  

  useEffect(() => {

   const hasVisited = sessionStorage.getItem('hasVisited');
   
   if (!hasVisited) {
      setIsLoading(true);

      setTimeout(() => {
         setIsLoading(false);
         sessionStorage.setItem('hasVisited', 'true');
      }, 2000);
      
      } else {
      setIsLoading(false);
      };


  },[]);


  return (
    <>
      {isLoading ? (
        
        <div className="min-h-screen bg-red-950 flex items-center justify-center">
          <span className="text-white">Loading...</span>
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default dynamic(() => Promise.resolve(Loading), {ssr: false});
