import type { SidebarItem } from "./types";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useDashboard } from "./context";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "./Sidebar";

export default function Topbar({
  title,
  items
}: {
  title?: string;
  items: SidebarItem[];
}) {
  const { isDesktop, toggleSidebar } = useDashboard();

  return (
    <div className="flex items-center justify-between bg-white dark:bg-gray-900 border-b px-4 h-14 sticky top-0 z-10">
      <div className="flex items-center gap-3">
        {!isDesktop ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <Sidebar items={items} /> {/* The SheetContent is now in Sidebar */}
          </Sheet>
        ) : (
          <Button variant="ghost" size="icon" onClick={toggleSidebar}>
            <Menu />
          </Button>
        )}
        <h1 className="font-semibold text-lg">{title}</h1>
      </div>
      <div className="flex items-center gap-2">
        <ThemeToggle />
      </div>
    </div>
  );
}