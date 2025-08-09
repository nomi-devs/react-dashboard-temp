// /routers/index.tsx

import { Routes, Route, Navigate } from "react-router-dom";
import { routes } from "./config";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

const AppRoutes = () => {
    return (
        <Routes>
            {routes.map(({ path, element, protected: isProtected, publicOnly }) => {
                let finalElement = element;

                if (isProtected) {
                    finalElement = <ProtectedRoute>{element}</ProtectedRoute>;
                } else if (publicOnly) {
                    finalElement = <PublicRoute>{element}</PublicRoute>;
                }

                return <Route key={path} path={path} element={finalElement} />;
            })}
            <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
    );
};

export default AppRoutes;
