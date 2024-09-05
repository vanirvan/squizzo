"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function SigninPage() {
  const { status } = useSession();
  console.log(status);

  return (
    <main className="relative w-full">
      <div className="bg-img-signature flex h-full min-h-svh w-full flex-col items-center justify-center gap-4 p-4">
        <button
          className="flex items-center justify-start gap-4 rounded-md bg-white px-4 py-2 text-black transition-colors duration-200 hover:bg-neutral-300 dark:bg-white dark:text-black dark:hover:bg-neutral-300"
          onClick={() =>
            signIn("google", {
              callbackUrl: "/",
            })
          }
        >
          Signin with Google
        </button>
        <button
          className="flex items-center justify-start gap-4 rounded-md bg-white px-4 py-2 text-black transition-colors duration-200 hover:bg-neutral-300 dark:bg-white dark:text-black dark:hover:bg-neutral-300"
          onClick={() =>
            signOut({
              callbackUrl: "/",
            })
          }
        >
          Signout
        </button>
      </div>
    </main>
  );
}
