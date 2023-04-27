import React, { Suspense } from "react";
import { observer } from "mobx-react-lite";
import { Route, Routes } from "react-router-dom";
import { WebsiteRoutes } from "./constants/routes";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Box, Container } from "@mui/material";
import { TopBar } from "./components/TopBar/TopBar";
import CartsPage from "./pages/CartsPage";
import ProductsPage from "./pages/ProductsPage";
import UsersPage from "./pages/UsersPage";

function App() {
  // const { cartStore } = useStore();
  // useEffect(() => {
  // cartStore.getAll();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  return (
    <>
      <Container sx={{ padding: "64px 0px !important" }}>
        <TopBar />
        <Container
          component="main"
          sx={{ display: "flex", padding: " 0px !important" }}
        >
          <Sidebar />
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
                  element={<h1>dashboard...</h1>}
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
