
// src/pages/Dashboard.tsx
import { DashboardLayout } from "@/components/Dashboard";
import { Home, Users, Package, Workflow } from "lucide-react";

const sidebarItems = [
  { label: "Home", icon: Home, path: "/" },
  {
    label: "Users",
    icon: Users,
    children: [
      { label: "Products", path: "/users/products" },
      { label: "Workflow", path: "/users/workflow" },
    ],
  },
  { label: "Products", icon: Package, path: "/products" },
  { label: "Workflow", icon: Workflow, path: "/workflow" },
];

export default function App() {
  return (
    <DashboardLayout sidebarItems={sidebarItems} topbarTitle="My Dashboard">
      <h2 className="text-2xl font-bold">Welcome</h2>
    </DashboardLayout>
  );
}

