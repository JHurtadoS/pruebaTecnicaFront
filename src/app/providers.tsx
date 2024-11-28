"use client";

import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";

// eslint-disable-next-line no-undef
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      {" "}
      <NextUIProvider>{children}</NextUIProvider>
    </SessionProvider>
  );
}
