import { Account, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";

import { prisma } from "@/lib/db/prisma";
import { emailToUsername } from "@/lib/utils/email-to-username";

interface CallbackProps {
  user: User | AdapterUser;
  account: Account | null;
}

export async function signinCallback({ user, account }: CallbackProps) {
  try {
    const findUser = await prisma.account.findUnique({
      where: {
        email: user.email!,
      },
    });

    if (findUser) {
      return false;
    }

    // create new user
    await prisma.user.create({
      data: {
        name: user.name!,
        username: emailToUsername(user.email!),
        image: user.image!,
        account: {
          create: {
            email: user.email!,
            provider: account?.provider!,
            providerId: account?.providerAccountId!,
          },
        },
      },
    });

    return true;
  } catch (e) {
    console.error("=== SIGNIN ERROR ===", e);
    return false;
  } finally {
    await prisma.$disconnect();
  }
}
