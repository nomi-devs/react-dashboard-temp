// src/components/layout/DashboardLayout.tsx
import Sidebar from "./Sidebar";
import TopBanner from "./TopBanner";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <TopBanner />
        <main className="flex-1 p-4">{children}</main>
      </div>
    </div>
  );
}
