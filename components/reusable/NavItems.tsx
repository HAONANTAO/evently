"use client";
import { headerLinks } from "@/data";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
const NavItems = () => {
  const pathName = usePathname();
  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row cursor-pointer">
      {headerLinks.map((link, index) => {
        const isActive = pathName === link.route;
        return (
          <li
            key={index}
            className={`${
              isActive && "text-primary-500"
            } flex-center p-medium-16 `}>
            <Link href={link.route}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
