// src/components/Dashboard/SidebarItem.tsx
import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import type { SidebarItem as SidebarItemType } from "./types";
import { useDashboard } from "./context";
import { cn } from "@/lib/utils";
import { SheetClose } from "@/components/ui/sheet";

interface SidebarItemProps {
  item: SidebarItemType;
}

export default function SidebarItem({ item }: SidebarItemProps) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { isSidebarCollapsed, isDesktop } = useDashboard();

  const isActive = (path?: string) => {
    if (!path) return false;
    return location.pathname === path || location.pathname.startsWith(path + "/");
  };

  const hasChildren = "children" in item && item.children && item.children.length > 0;
  const isParentActive = hasChildren && item.children?.some(child => isActive(child.path));

  const content = (
    <Link
      to={item?.path || "#"}
      className={cn(
        "flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-colors hover:bg-accent",
        "path" in item && isActive(item.path) && "bg-accent",
        isSidebarCollapsed && "justify-center"
      )}
    >
      <item.icon className="h-4 w-4" />
      {!isSidebarCollapsed && item.label}
    </Link>
  );

  if (!hasChildren) {
    if (!isDesktop) {
      return (
        <SheetClose asChild>
          {content}
        </SheetClose>
      );
    }
    return content;
  }

  // Rest of the component for items with children
  return (
    <div className="mb-1">
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "flex w-full items-center justify-between px-4 py-2 text-sm font-medium rounded-md transition-colors hover:bg-accent",
          isParentActive && "bg-accent",
          isSidebarCollapsed && "justify-center"
        )}
      >
        <span className={cn("flex items-center gap-2", isSidebarCollapsed && "justify-center")}>
          <item.icon className="h-4 w-4" />
          {!isSidebarCollapsed && item.label}
        </span>
        {hasChildren && !isSidebarCollapsed && (
          <ChevronDown size={16} className={cn("transition-transform", open && "rotate-180")} />
        )}
      </button>
      {open && !isSidebarCollapsed && (
        <div className="ml-6 border-l pl-4 space-y-1">
          {item.children.map((child) => (
            <SheetClose asChild key={child.label}>
              <Link
                to={child.path}
                className={cn(
                  "block text-sm py-1 rounded-md transition-colors hover:text-primary",
                  isActive(child.path) ? "text-primary font-semibold" : "text-muted-foreground"
                )}
              >
                {child.label}
              </Link>
            </SheetClose>
          ))}
        </div>
      )}
    </div>
  );
}