import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "LVS",
  description: "Projeto de front da LVS",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {

  return (
    <html lang="pt-br">
      <Head><link rel="icon" href="./favicon.ico" sizes="any"></link></Head>
      <body>
        {children}
      </body>
    </html>
  );
}