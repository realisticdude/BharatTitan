"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { LoadingScreen } from "./LoadingScreen";

export function InitialLoaderWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  // Only gate the home page on a fresh load/refresh; other routes render
  // immediately so a refresh there doesn't force visitors back through the intro.
  const [showLoader, setShowLoader] = useState(() => pathname === "/");

  return (
    <>
      {showLoader && <LoadingScreen onComplete={() => setShowLoader(false)} />}
      {children}
    </>
  );
}
