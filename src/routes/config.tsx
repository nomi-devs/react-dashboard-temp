// /routers/config.tsx
import type { ReactElement } from "react";

// Pages
import Login from "../pages/auth/Login";
import HomePage from "@/pages/HomePage";
import Register from "../pages/auth/Register";
import SettingsPage from "@/pages/SettingsPage";
import Contact from "../pages/Contact/Contact";
import Dashboard from "../pages/Dashboard/Dashboard";
import ForgotPassword from "../pages/auth/ForgotPassword";

export interface AppRoute {
    path: string;
    element: ReactElement;
    protected?: boolean; // requires auth
    publicOnly?: boolean; // block when logged in
}

export const routes: AppRoute[] = [
    {
        path: "/login",
        element: <Login />,
        publicOnly: true,
    },
    {
        path: "/register",
        element: <Register />,
        publicOnly: true,
    },
    {
        path: "/forgot-password",
        element: <ForgotPassword />,
        publicOnly: true,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        protected: true,
    },
    {
        path: "/Home",
        element: <HomePage />,
        protected: true,
    },
    {
        path: "/settings",
        element: <SettingsPage />,
        protected: true,
    },
    {
        path: "/contact-us",
        element: <Contact />,
    },
];
