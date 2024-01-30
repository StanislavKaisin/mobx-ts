import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ProSidebarProvider } from "react-pro-sidebar";
import reportWebVitals from "./reportWebVitals";
import { rootStore, StoreContext } from "./hooks/useStore";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { UserAuthContextProvider } from "./UserAuthContext";
// import UserAuthContext from "./authContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <UserAuthContextProvider>
    <BrowserRouter>
      <StoreContext.Provider value={rootStore}>
        <ProSidebarProvider>
          <App />
        </ProSidebarProvider>
      </StoreContext.Provider>
    </BrowserRouter>
  </UserAuthContextProvider>
);

serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
