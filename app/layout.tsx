import type { Metadata } from "next";
import { DM_Sans as Fontstyle } from "next/font/google";
import "./globals.css";

const fontstyle = Fontstyle({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Victor Hugo",
  description: "Criando soluções para seus problemas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={fontstyle.className}>
        {children}
      </body>
    </html>
  );
}
