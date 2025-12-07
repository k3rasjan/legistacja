import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AccessibilityProvider } from "@/contexts/AccessibilityContext";
import { AccessibilityWidget } from "@/components/layout/AccessibilityWidget";
import { DebugPanel } from "@/components/debug/DebugPanel";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Legistacja - Nowe prawo wszystkich polaków",
  description:
    "Kompleksowe narzędzie do monitorowania procesów legislacyjnych w Polsce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AccessibilityProvider>
          {children}
          <AccessibilityWidget />
          <DebugPanel />
        </AccessibilityProvider>
      </body>
    </html>
  );
}
