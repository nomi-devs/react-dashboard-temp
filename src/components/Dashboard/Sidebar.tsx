// src/components/Dashboard/Sidebar.tsx
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import SidebarItem from "./SidebarItem";
import type { SidebarItem as SidebarItemType } from "./types";

export default function Sidebar({
  items,
  isMobile,
}: {
  items: SidebarItemType[];
  isMobile?: boolean;
}) {
  if (isMobile) {
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
                onItemClick={() => document.querySelector<HTMLButtonElement>('[data-radix-sheet-close]')?.click()}
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

  return (
    <aside className="w-64 bg-white dark:bg-gray-900 border-r h-screen p-4 overflow-y-auto">
      {items.map((item) => (
        <SidebarItem key={item.label} item={item} />
      ))}
    </aside>
  );
}
