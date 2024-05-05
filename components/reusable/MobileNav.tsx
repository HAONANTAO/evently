import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import NavItems from "./NavItems";
export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="" size="sm">
          <Image
            src="/assets/icons/menu.svg"
            alt="menu"
            width="24"
            height="24"
            className="cursor-pointer"
          />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-white">
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width="145"
          height="30"
          className="py-4"
        />
        <Separator className="border border-gray-500 " />

        <NavItems />
      </SheetContent>
    </Sheet>
  );
}
