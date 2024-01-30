import React, { Suspense, lazy, useState } from "react";
import { observer } from "mobx-react-lite";
import { Route, Routes } from "react-router-dom";
import { WebsiteRoutes } from "./constants/routes";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Box, Container } from "@mui/material";
import { TopBar } from "./components/TopBar/TopBar";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
// import { LoginPage } from "./pages/LoginPage";

const LazyCartsPage = lazy(() => import("./pages/CartsPage"));
const LazyProductsPage = lazy(() => import("./pages/ProductsPage"));
const LazyUsersPage = lazy(() => import("./pages/UsersPage"));
const LazyDashboardPage = lazy(() => import("./pages/DashboardPage"));
const LazyAllProductsPage = lazy(() => import("./pages/AllProductsPage"));
const LazyLoginPage = lazy(() => import("./pages/LoginPage"));

function App() {
  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <>
      <Container sx={{ padding: "64px 0px !important" }}>
        <TopBar
          isSideBarOpen={openSideBar}
          openSideBar={(c) => setOpenSideBar(c)}
        />
        <Container
          component="main"
          sx={{ display: "flex", padding: " 0px !important" }}
        >
          <Sidebar isSideBarOpen={openSideBar} />
          <Box sx={{ width: "100%" }}>
            <Suspense fallback={<h1>Loading...</h1>}>
              <Routes>
                <Route
                  path={`${WebsiteRoutes.home}`}
                  element={
                    <Suspense fallback={<div>Loading...</div>}>
                      <LazyAllProductsPage />
                    </Suspense>
                  }
                />
                <Route
                  path={`${WebsiteRoutes.carts}`}
                  element={
                    <ProtectedRoute>
                      <Suspense fallback={<div>Loading...</div>}>
                        <LazyCartsPage />
                      </Suspense>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path={`${WebsiteRoutes.users}`}
                  element={
                    <ProtectedRoute>
                      <Suspense fallback={<div>Loading...</div>}>
                        <LazyUsersPage />
                      </Suspense>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path={`${WebsiteRoutes.products}`}
                  element={
                    <ProtectedRoute>
                      <Suspense fallback={<div>Loading...</div>}>
                        <LazyProductsPage />
                      </Suspense>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path={`${WebsiteRoutes.dashboard}`}
                  element={
                    <ProtectedRoute>
                      <Suspense fallback={<div>Loading...</div>}>
                        <LazyDashboardPage />
                      </Suspense>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path={`${WebsiteRoutes.login}`}
                  element={
                    <Suspense fallback={<div>Loading...</div>}>
                      <LazyLoginPage />
                    </Suspense>
                  }
                />
              </Routes>
            </Suspense>
          </Box>
        </Container>
      </Container>
    </>
  );
}

export default observer(App);
