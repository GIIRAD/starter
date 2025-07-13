"use client"; // WICHTIG: Macht dies zu einer Client-Komponente

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from "react";
import React from "react";

import "./globals.css"; // Dieser Import lädt die Tailwind/Orbit-Stile

// Orbit-Importe
import { OrbitProvider } from "@kiwicom/orbit-components";
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTheme";
import "@kiwicom/orbit-components/lib/tailwind.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="de">
      <body>
        <QueryClientProvider client={queryClient}>
          <OrbitProvider theme={defaultTheme}>
            {children}
          </OrbitProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}