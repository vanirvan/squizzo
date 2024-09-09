"use client";

import { useSession, signOut } from "next-auth/react";
import { SettingsIcon, LogOutIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { emailToUsername } from "@/lib/utils/email-to-username";

export function AccountButton() {
  const { data: session, status } = useSession();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>
          <Avatar>
            <AvatarImage
              src={status === "authenticated" ? session.user?.image! : ""}
            />
            <AvatarFallback>
              {emailToUsername(session?.user?.name!)}
            </AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="">
        <DropdownMenuLabel>{session?.user?.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <a href="/dashboard/settings">
          <DropdownMenuItem className="flex cursor-pointer items-center gap-4">
            <SettingsIcon className="h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
        </a>
        <DropdownMenuItem
          onClick={() => signOut()}
          className="flex cursor-pointer items-center gap-4"
        >
          <LogOutIcon className="h-4 w-4" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
