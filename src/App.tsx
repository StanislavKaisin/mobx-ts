import React, { Suspense, useState } from "react";
import { observer } from "mobx-react-lite";
import { Route, Routes } from "react-router-dom";
import { WebsiteRoutes } from "./constants/routes";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Box, Container } from "@mui/material";
import { TopBar } from "./components/TopBar/TopBar";
import CartsPage from "./pages/CartsPage";
import ProductsPage from "./pages/ProductsPage";
import UsersPage from "./pages/UsersPage";
import DashboardPage from "./pages/DashboardPage";

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
                  element={<CartsPage />}
                />
                <Route
                  path={`${WebsiteRoutes.users}/*`}
                  element={<UsersPage />}
                />
                <Route
                  path={`${WebsiteRoutes.products}/*`}
                  element={<ProductsPage />}
                />
                <Route
                  path={`${WebsiteRoutes.home}/*`}
                  element={<DashboardPage />}
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
