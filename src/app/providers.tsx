"use client";

import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";
import { ModalProvider } from "./components/modals/contextModalAuth";

// eslint-disable-next-line no-undef
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      {" "}
      <NextUIProvider>
        <ModalProvider>
          {children}
        </ModalProvider>
      </NextUIProvider>
    </SessionProvider>
  );
}
