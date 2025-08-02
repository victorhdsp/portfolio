import Clarity from '@microsoft/clarity';
import "./globals.css";

import type { Metadata } from "next";
import { DM_Sans as Fontstyle } from "next/font/google";
import { Toaster } from "@/components/ui/sonner"
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'
import { cn } from '@/lib/utils';


const fontstyle = Fontstyle({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Victor Hugo",
  description: "Criando soluções para seus problemas",
};

function getClarityScript() {
  const projectId = process.env.CLARITY_PROJECT_ID;
  if (!projectId) {
    console.warn("Clarity project ID is not set. Skipping Clarity script generation.");
    return null;
  }
  return projectId;
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const projectId = getClarityScript()

  if (projectId) {
    Clarity.init(projectId);
    console.log("Clarity initialized with project");
  }

  return (
    <html lang="pt-BR">
      <GoogleTagManager gtmId='GTM-PS78HTW6'/>
      <GoogleAnalytics gaId='G-8J4KC8E62Q' />
      <body className={cn(fontstyle.className)}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
