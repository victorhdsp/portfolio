import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function OrganismContainer(props: Props) {
  const className = props.className || "";

  return (
    <DrawerContent>
      <DrawerHeader className="text-left">
        <DrawerTitle>Edit profile</DrawerTitle>
        <DrawerDescription>
          Make changes to your profile here. Click save when you're done.
        </DrawerDescription>
      </DrawerHeader>
      <ProfileForm className="px-4" />
      <DrawerFooter className="pt-2">
        <DrawerClose asChild>
          <Button variant="outline">Cancel</Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
    <Drawer open={open} onOpenChange={setOpen}>
    </Drawer>
  );
}
