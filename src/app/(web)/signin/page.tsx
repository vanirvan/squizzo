"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { LoaderCircleIcon, LogOutIcon } from "lucide-react";

import { GoogleColoredIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";

export default function SigninPage() {
  const { status } = useSession();

  return (
    <main className="relative w-full">
      <div className="bg-img-signature flex h-full min-h-svh w-full flex-col items-center justify-center gap-4 p-4">
        <div className="flex flex-col gap-6 rounded-lg bg-white/50 p-6 shadow backdrop-blur-sm">
          <h1 className="text-2xl font-bold text-white dark:text-white">
            Signin to Squizzo to continue
          </h1>
          {status === "unauthenticated" ? (
            <Button
              className="flex items-center justify-start gap-4 rounded-md bg-white px-4 py-2 text-black transition-colors duration-200 hover:bg-neutral-300 dark:bg-white dark:text-black dark:hover:bg-neutral-300"
              onClick={() =>
                signIn("google", {
                  callbackUrl: "/dashboard",
                })
              }
            >
              <GoogleColoredIcon />
              Signin with Google
            </Button>
          ) : status === "authenticated" ? (
            <Button
              className="flex items-center justify-start gap-4 rounded-md bg-white px-4 py-2 text-black transition-colors duration-200 hover:bg-neutral-300 dark:bg-white dark:text-black dark:hover:bg-neutral-300"
              onClick={() =>
                signOut({
                  callbackUrl: "/",
                })
              }
            >
              <LogOutIcon />
              Signout
            </Button>
          ) : (
            <div className="mx-auto">
              <LoaderCircleIcon className="animate-spin" />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
