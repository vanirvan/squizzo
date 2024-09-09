import { DeleteAccount } from "@/components/page-components/dashboard/settings/delete-account";
import { SettingCard } from "@/components/page-components/dashboard/settings/setting-card";

export default function DashboardSettingsPage() {
  return (
    <main className="relative flex w-full flex-col gap-6">
      <SettingCard />
      <DeleteAccount />
    </main>
  );
}
