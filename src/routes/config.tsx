import type { ReactElement } from "react";

// Pages
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import Dashboard from "../pages/Dashboard/Dashboard";
import Contact from "../pages/Contact/Contact";

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
        path: "/contact-us",
        element: <Contact />,
    },
];
