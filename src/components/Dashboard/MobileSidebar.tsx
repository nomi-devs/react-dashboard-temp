import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import SidebarItem from "./SidebarItem";
import type { SidebarItem as SidebarItemType } from "./types";
import { useDashboard } from "./context";

export default function MobileSidebar({ items }: { items: SidebarItemType[] }) {
  const { toggleSidebar } = useDashboard();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 w-64">
        <div className="py-4">
          {items.map((item) => (
            <SidebarItem
              key={item.label}
              item={item}
              onItemClick={() => toggleSidebar()}
            />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}