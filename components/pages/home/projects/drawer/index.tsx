"use client";

import PageProject from "@/components/pages/projects";
import { DrawerContent } from "@/components/ui/drawer";

export default function PageHomeProjectsDrawerContent() {

  return (
    <DrawerContent>
      <PageProject />
    </DrawerContent>
  );
}
