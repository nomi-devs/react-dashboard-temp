// src/components/Dashboard/Topbar.tsx
import Sidebar from "./Sidebar";
import type { SidebarItem } from "./types";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export default function Topbar({
  title,
  items,
}: {
  title?: string;
  items: SidebarItem[];
}) {
  return (
    <div className="flex items-center justify-between bg-white dark:bg-gray-900 border-b px-4 h-14">
      <div className="flex items-center gap-3">
        <h1 className="font-semibold text-lg">{title}</h1>
      </div>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <div className="lg:hidden">
          <Sidebar items={items} isMobile />
        </div>
      </div>
    </div>
  );
}
