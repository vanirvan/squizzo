import { HomeIcon, PuzzleIcon, GemIcon } from "lucide-react";

interface NavMenu {
  Icon: React.ElementType;
  title: string;
  href: string;
}

export const navMenuList = [
  {
    Icon: HomeIcon,
    title: "Home",
    href: "/dashboard",
  },
  {
    Icon: PuzzleIcon,
    title: "Quiz",
    href: "/quiz",
  },
  {
    Icon: GemIcon,
    title: "Score",
    href: "/score",
  },
] satisfies NavMenu[];
