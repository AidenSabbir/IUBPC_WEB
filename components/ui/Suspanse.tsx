"use client";

import { useEffect, useState } from "react";

interface SplashScreenWrapperProps {
  children: React.ReactNode;
}

export default function SplashScreenWrapper({ children }: SplashScreenWrapperProps) {
  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(() => {
    const handleLoad = () => setIsLoaded(true);

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);
  if (!isLoaded) {
    return (
      <div
        className="h-screen w-full flex items-center justify-center gap-1 bg-black"
      >
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="splash-loader w-1 h-1 rounded-full"
            style={{ backgroundColor: "white", animationDelay: `${i * 323}ms`, animationDuration: "1s", animationIterationCount: "infinite", animationTimingFunction: "ease-in-out", animationName: "splash" }}
          />
        ))}
      </div>
    );
  }
  return <>{children}</>;
}
