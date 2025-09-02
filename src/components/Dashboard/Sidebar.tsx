import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SidebarItem from "./SidebarItem";
import type { SidebarItem as SidebarItemType } from "./types";
import { useDashboard } from "./context";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

export default function Sidebar({ items }: { items: SidebarItemType[] }) {
  const { isSidebarCollapsed, isDesktop } = useDashboard();

  if (!isMobile) {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <button className="p-2">
            <Menu />
          </button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-64">
          <div className="py-4">
            {items.map((item) => (
              <SidebarItem
                key={item.label}
                item={item}
                // onItemClick={() => document.querySelector<HTMLButtonElement>('[data-radix-sheet-close]')?.click()}
              />
            ))}
          </div>
          {/* Hidden SheetClose button for programmatic closing */}
          <SheetClose asChild>
            <button className="hidden" data-radix-sheet-close />
          </SheetClose>
        </SheetContent>
      </Sheet>
    );
  }

  if (isDesktop) {
    return (
      <aside
        className={cn(
          "h-screen bg-card border-r p-4 overflow-y-auto fixed top-0 left-0 transition-all duration-300 z-20",
          isSidebarCollapsed ? "w-20" : "w-64"
        )}
      >
        <div className="flex items-center justify-center h-14 mb-4">
          <h2 className={cn("text-xl font-bold", isSidebarCollapsed && "sr-only")}>
            Dashboard
          </h2>
        </div>
        <nav className="space-y-1">
          {items.map((item) => (
            <SidebarItem key={item.label} item={item} />
          ))}
        </nav>
      </aside>
    );
  }

  return (
    <Sheet>
      <SheetContent side="left" className="p-0 w-64 pt-14">
        <nav className="space-y-1 p-4">
          {items.map((item) => (
            <SidebarItem key={item.label} item={item} />
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}