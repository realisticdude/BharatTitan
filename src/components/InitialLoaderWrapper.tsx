"use client";

import { useEffect, useState } from "react";
import { LoadingScreen } from "./LoadingScreen";

export function InitialLoaderWrapper({ children }: { children: React.ReactNode }) {
  const [showLoader, setShowLoader] = useState(true);

  return (
    <>
      {showLoader && <LoadingScreen onComplete={() => setShowLoader(false)} />}
      {children}
    </>
  );
}
