// src/components/Dashboard/types.ts
import type { LucideIcon } from "lucide-react";

export interface SidebarChild {
  label: string;
  path: string;
}
export interface SidebarParent {
  label: string;
  icon: LucideIcon;
  children: SidebarChild[];
  path?: undefined;
}

export interface SidebarLink {
  label: string;
  icon: LucideIcon;
  path: string;
  children?: undefined;
}

export type SidebarItem = SidebarParent | SidebarLink; 
export interface DashboardLayoutProps {
  sidebarItems: SidebarItem[];
  topbarTitle?: string;
  children: React.ReactNode;
}
