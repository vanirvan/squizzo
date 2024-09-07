"use client";

import { usePathname } from "next/navigation";
import { MenuIcon, HouseIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeButton } from "@/components/theme-button";

import { navMenuList } from "@/data/nav-list";

export function MobileSidebar() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild className="sm:hidden">
        <Button variant={"outline"} size={"icon"}>
          <MenuIcon className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className="bg-card-light dark:bg-card-dark sm:hidden"
      >
        <SheetTitle />
        <SheetDescription />
        <div className="flex h-full flex-col justify-between">
          <nav className="grid gap-6">
            {navMenuList.map((nav, key) => (
              <a
                key={key}
                href={nav.href}
                className={`group flex w-full items-center gap-4 rounded-lg text-lg transition duration-200 ${pathname == nav.href ? "font-bold" : ""}`}
              >
                <nav.Icon className="h-6 w-6 transition-all duration-200" />
                <span className="transition-all duration-200 group-hover:font-bold">
                  {nav.title}
                </span>
              </a>
            ))}
          </nav>
          <ThemeButton padding={0} size={6} />
        </div>
      </SheetContent>
    </Sheet>
  );
}
