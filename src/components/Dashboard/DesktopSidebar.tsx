import SidebarItem from "./SidebarItem";
import type { SidebarItem as SidebarItemType } from "./types";
import { useDashboard } from "./context";
import { cn } from "@/lib/utils";

export default function DesktopSidebar({ items }: { items: SidebarItemType[] }) {
  const { isSidebarCollapsed } = useDashboard();

  return (
    <aside
      className={cn(
        "h-screen bg-card border-r p-4 overflow-y-auto transition-all duration-300",
        isSidebarCollapsed ? "w-20" : "w-64"
      )}
    >
      {items.map((item) => (
        <SidebarItem key={item.label} item={item}  />
      ))}
    </aside>
  );
}