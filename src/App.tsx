import React, { Suspense, lazy, useState } from "react";
import { observer } from "mobx-react-lite";
import { Route, Routes } from "react-router-dom";
import { WebsiteRoutes } from "./constants/routes";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Box, Container } from "@mui/material";
import { TopBar } from "./components/TopBar/TopBar";

const LazyCartsPage = lazy(() => import("./pages/CartsPage"));
const LazyProductsPage = lazy(() => import("./pages/ProductsPage"));
const LazyUsersPage = lazy(() => import("./pages/UsersPage"));
const LazyDashboardPage = lazy(() => import("./pages/DashboardPage"));

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
                  path={`${WebsiteRoutes.carts}/*`}
                  element={
                    <Suspense fallback={<div>Loading...</div>}>
                      <LazyCartsPage />
                    </Suspense>
                  }
                />
                <Route
                  path={`${WebsiteRoutes.users}/*`}
                  element={
                    <Suspense fallback={<div>Loading...</div>}>
                      <LazyUsersPage />
                    </Suspense>
                  }
                />
                <Route
                  path={`${WebsiteRoutes.products}/*`}
                  element={
                    <Suspense fallback={<div>Loading...</div>}>
                      <LazyProductsPage />
                    </Suspense>
                  }
                />
                <Route
                  path={`${WebsiteRoutes.home}/*`}
                  element={
                    <Suspense fallback={<div>Loading...</div>}>
                      <LazyDashboardPage />
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
