import { useState } from "react";
import { ChevronDown, ChevronRight, type LucideIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import type { SidebarItem as SidebarItemType } from "./types";
import { useDashboard } from "./context";
import { cn } from "@/lib/utils";

interface SidebarItemProps {
  item: SidebarItemType;
  isCollapsed?: boolean;
  onItemClick?: () => void;
}

export default function SidebarItem({ item, isCollapsed, onItemClick }: SidebarItemProps) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path?: string) => {
    if (!path) return false;
    return location.pathname === path || location.pathname.startsWith(path + "/");
  };

  const handleLinkClick = () => {
    if (onItemClick) {
      onItemClick();
    }
    // Handle sheet close from the mobile sidebar here
    // A better approach would be to pass the `SheetClose` component as a prop or child
  };

  const hasChildren = item.children && item.children.length > 0;
  const isParentActive = hasChildren && item.children?.some(child => isActive(child.path));

  return (
    <div className="mb-1">
      {hasChildren ? (
        <>
          <button
            onClick={() => setOpen(!open)}
            className={cn(
              "flex w-full items-center justify-between px-4 py-2 text-sm font-medium rounded-md transition-colors",
              "hover:bg-accent",
              isParentActive && "bg-accent",
              isCollapsed && "justify-center"
            )}
          >
            <span className={cn("flex items-center gap-2", isCollapsed && "justify-center")}>
              <item.icon className="h-4 w-4" />
              {!isCollapsed && item.label}
            </span>
            {hasChildren && !isCollapsed && (open ? <ChevronDown size={16} /> : <ChevronRight size={16} />)}
          </button>
          {open && !isCollapsed && (
            <div className="ml-6 border-l pl-4 space-y-1">
              {item.children.map((child) => (
                <Link
                  key={child.label}
                  to={child.path}
                  onClick={handleLinkClick}
                  className={cn(
                    "block text-sm py-1 rounded-md transition-colors",
                    "hover:text-primary",
                    isActive(child.path) ? "text-primary font-semibold" : "text-muted-foreground"
                  )}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          )}
        </>
      ) : (
        <Link
          to={item.path!}
          onClick={handleLinkClick}
          className={cn(
            "flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-colors",
            "hover:bg-accent",
            isActive(item.path) ? "bg-accent" : "",
            isCollapsed && "justify-center"
          )}
        >
          <item.icon className="h-4 w-4" />
          {!isCollapsed && item.label}
        </Link>
      )}
    </div>
  );
}