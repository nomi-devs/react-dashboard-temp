
// src/pages/Dashboard.tsx
import DashboardLayout from "@/components/layout/DashboardLayout";

export default function Dashboard() {
  console.log("Dashboard component loaded");
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold">Dashboard </h1>
    </DashboardLayout>
  );
}

