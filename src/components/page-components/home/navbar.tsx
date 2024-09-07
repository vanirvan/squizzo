import { Button } from "@/components/ui/button";
import { ThemeButton } from "@/components/theme-button";

export function Navbar() {
  return (
    <nav className="absolute inset-0 z-10 h-max w-full">
      <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-2">
        <a href="/">
          <h1 className="text-2xl font-bold text-white dark:text-white">
            Squizzo
          </h1>
        </a>
        <div className="flex items-center gap-4">
          <ThemeButton
            size={6}
            className="text-white hover:bg-transparent hover:text-white dark:text-white dark:hover:bg-transparent dark:hover:text-white"
          />
          <a href="/signin">
            <Button className="bg-neutral-50 text-neutral-900 hover:bg-neutral-50/90">
              Signin
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
}
