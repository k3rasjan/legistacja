import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AccessibilityProvider } from "@/contexts/AccessibilityContext";
import { OnboardingRedirect } from "@/components/OnboardingRedirect";
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
  title: "Legislacja Tracker - Śledź zmiany w prawie",
  description: "Kompleksowe narzędzie do monitorowania procesów legislacyjnych w Polsce",
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
          <OnboardingRedirect>
            {children}
          </OnboardingRedirect>
        </AccessibilityProvider>
      </body>
    </html>
  );
}
