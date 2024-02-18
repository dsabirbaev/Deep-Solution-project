import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Law chatbot",
  description: "Chatbot atmosphere",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        > 
            {children}
        </ThemeProvider>
        
      </body>
    </html>
  );
}
