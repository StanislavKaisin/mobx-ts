import React, { Suspense, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "./hooks/useStore";
import { Route, Routes } from "react-router-dom";
import { WebsiteRoutes } from "./constants/routes";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Box, Container } from "@mui/material";
import { TopBar } from "./components/TopBar/TopBar";

function App() {
  const { cartStore } = useStore();
  useEffect(() => {
    cartStore.getAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Container component="body" sx={{ padding: "64px 0px !important" }}>
        <TopBar />
        <Container
          component="main"
          sx={{ display: "flex", padding: " 0px !important" }}
        >
          <Sidebar />
          <Box>
            <Suspense fallback={<h1>Loading...</h1>}>
              <Routes>
                <Route
                  path={`${WebsiteRoutes.carts}/*`}
                  element={<h1>Carts...</h1>}
                />
                <Route
                  path={`${WebsiteRoutes.users}/*`}
                  element={<h1>users...</h1>}
                />
                <Route
                  path={`${WebsiteRoutes.products}/*`}
                  element={<h1>products...</h1>}
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
