import { Home, Settings, LogOut } from "lucide-react";
import HomePage from "@/pages/HomePage";
import SettingsPage from "@/pages/SettingsPage";

export const ROUTES = [
  {
    path: "/",
    name: "Home",
    icon: Home,
    element: <HomePage />,
    protected: true,
  },
  {
    path: "/settings",
    name: "Settings",
    icon: Settings,
    element: <SettingsPage />,
    protected: true,
  },
  {
    path: "/logout",
    name: "Logout",
    icon: LogOut,
    element: <div>Logging out...</div>,
    protected: true,
  },
];
