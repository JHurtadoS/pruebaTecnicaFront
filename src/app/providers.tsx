"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ModalProvider } from "./components/modals/contextModalAuth";
import { SessionProvider } from "./components/context/authContext";
import { MoviesProvider } from "./components/context/MoviesContext";

// eslint-disable-next-line no-undef
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      {" "}
      <NextUIProvider>
        <ModalProvider>
          <MoviesProvider>
            {children}
          </MoviesProvider>
        </ModalProvider>
      </NextUIProvider>
    </SessionProvider>
  );
}
