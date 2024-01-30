import React, { ReactNode, Suspense, lazy } from "react";
import { useUserAuth } from "../../UserAuthContext";
import { redirect } from "react-router-dom";
import { WebsiteRoutes } from "../../constants/routes";

const LazyAllProductsPage = lazy(() => import("../../pages/AllProductsPage"));

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const userContext = useUserAuth();

  if (!userContext?.user) {
    redirect(`${WebsiteRoutes.home}`);
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <LazyAllProductsPage />
      </Suspense>
    );
  }
  return <>{children}</>;
};
