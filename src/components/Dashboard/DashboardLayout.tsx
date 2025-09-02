// src/components/Dashboard/DashboardLayout.tsx
import { useEffect, useState } from "react";
import { DashboardProvider } from "./context";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import type { DashboardLayoutProps } from "./types";
import { cn } from "@/lib/utils";

export default function DashboardLayout({
  sidebarItems,
  topbarTitle,
  children,
}: DashboardLayoutProps) {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <DashboardProvider>
      <div className="flex h-screen overflow-hidden">
        {isDesktop && <Sidebar items={sidebarItems} />}
        <div className="flex flex-col flex-1 overflow-y-auto">
          <Topbar title={topbarTitle} items={sidebarItems} /> {/* Pass the `sidebarItems` prop here */}
          <main className={cn("flex-1 p-4", "bg-background")}>
            {children}
          </main>
        </div>
      </div>
    </DashboardProvider>
  );
}