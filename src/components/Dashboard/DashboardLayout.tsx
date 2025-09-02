import { DashboardProvider, useDashboard } from "./context";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import type { DashboardLayoutProps } from "./types";
import { cn } from "@/lib/utils";

function DashboardContent({
  sidebarItems,
  topbarTitle,
  children,
}: DashboardLayoutProps) {
  const { isSidebarCollapsed, isDesktop } = useDashboard();

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar items={sidebarItems} />
      <div
        className={cn(
          "flex flex-col flex-1 overflow-y-auto transition-all duration-300",
          isDesktop && !isSidebarCollapsed && "ml-64", // Only apply ml-64 on desktop when sidebar is expanded
          isDesktop && isSidebarCollapsed && "ml-20"   // Only apply ml-20 on desktop when sidebar is collapsed
        )}
      >
        <Topbar title={topbarTitle} items={sidebarItems} />
        <main className={cn("flex-1 p-4", "bg-background")}>
          {children}
        </main>
      </div>
    </div>
  );
}

export default function DashboardLayout(props: DashboardLayoutProps) {
  return (
    <DashboardProvider>
      <DashboardContent {...props} />
    </DashboardProvider>
  );
}