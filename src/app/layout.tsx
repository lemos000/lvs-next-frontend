import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LVS",
  description: "Projeto de front da LVS",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
