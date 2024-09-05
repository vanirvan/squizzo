import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { AuthProvider } from "@/components/providers/auth-provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Makes Quizzes Effortlessly",
  description:
    "Squizzo is a simple and fun quiz app where you can create and share quizzes effortlessly. Just sign in to get started—no ads, no fees. Whether you want to challenge your friends or create a learning tool, Squizzo provides a seamless, ad-free experience for quiz makers of all skill levels.",
};

export default function WebLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} relative w-full`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
