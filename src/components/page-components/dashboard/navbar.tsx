import { AccountButton } from "@/components/page-components/dashboard/account-button";
import { MobileSidebar } from "@/components/page-components/dashboard/mobile-sidebar";

export function Navbar() {
  return (
    <nav className="sticky inset-0 top-0 z-10 w-full bg-white shadow dark:bg-black">
      <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between gap-4 p-4 sm:justify-end">
        <MobileSidebar />
        <AccountButton />
      </div>
    </nav>
  );
}
