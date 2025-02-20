"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider 
      attribute="class" 
      defaultTheme="dark" 
      enableSystem={false} // Evita inconsistencias con el sistema operativo
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
