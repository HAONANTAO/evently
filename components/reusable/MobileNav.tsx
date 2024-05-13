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
import Link from "next/link";
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
      
          {/* text with button */}
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">
              Host, Connect, Celebrate: Your Events, Our Platform!
            </h1>
            <p className="p-regular-20 md:p-regular-24">
              Book and learn helpful tips from 3,168+ mentors in world-class
              companies with our global community.
            </p>
           
          <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="/">Explore Now</Link>
            </Button>
          </div>
      </SheetContent>
    </Sheet>
  );
}
