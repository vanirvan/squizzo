import { DashboardBreadcrumb } from "@/components/page-components/dashboard/dashboard-breadcrumb";
import { Navbar } from "@/components/page-components/dashboard/navbar";
import { Sidebar } from "@/components/page-components/dashboard/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex min-h-svh w-full bg-background-light dark:bg-background-dark">
      <Sidebar />
      <div className="flex w-full flex-col">
        <Navbar />
        <div className="relative mx-auto w-full max-w-7xl p-4">
          <DashboardBreadcrumb className="mb-6" />
          {children}
        </div>
      </div>
    </div>
  );
}
