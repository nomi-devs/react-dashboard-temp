// src/components/layout/Sidebar.tsx
import { ROUTES } from "@/constants/routes";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-60 bg-primary dark:bg-gray-900 text-white min-h-screen transition-colors duration-300 p-4">
      <nav className="space-y-2">
        {ROUTES.map((route) => (
          <Link
            key={route.path}
            to={route.path}
            className="flex items-center gap-2 p-2 rounded hover:bg-secondary transition-colors"
          >
            <route.icon className="w-5 h-5" />
            {route.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
