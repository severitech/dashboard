
import type { Metadata } from "next";
import { Noto_Sans_Display } from "next/font/google";
import "./globals.css";
import { ClerkProvider, SignedIn } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";
const notoSansDisplay = Noto_Sans_Display({
  variable: "--font-noto-sans-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dashboard Empresarial - Severitech",
  description: "Creado por Severitech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${notoSansDisplay.variable} `}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SignedIn></SignedIn>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
