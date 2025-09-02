import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import SidebarItem from "./SidebarItem";
import type { SidebarItem as SidebarItemType } from "./types";

export default function MobileSidebar({ items }: { items: SidebarItemType[] }) {

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
               
            />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}