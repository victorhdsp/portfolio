import type { Metadata } from "next";
import { Anonymous_Pro } from '@next/font/google'

import "./tailwind.scss";
import "./globals.scss";

import MouseCursor from "@/components/Default/MouseCursor";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Victor H. S. Pereira - Desenvolvedor WEB",
  description: "Sou um desenvolvedor web com 3 anos de experiência, meu foco é frontend mas tenho experiência com backend em Node e PHP, além de algumas skills de DevOps como Docker e AWS.",
};

const anonymous_pro = Anonymous_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="light">
      <body className={`${anonymous_pro.className}`}>
        <Header />
        {children}
        <MouseCursor />
      </body>
    </html>
  );
}
