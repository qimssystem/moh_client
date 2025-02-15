/**
=========================================================
* Otis Admin PRO - v2.0.2
=========================================================

* Product Page: https://material-ui.com/store/items/otis-admin-pro-material-dashboard-react/
* Copyright 2024 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "App";

// Soft UI Context Provider
import { MaterialUIControllerProvider } from "context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <MaterialUIControllerProvider>
      <App />
    </MaterialUIControllerProvider>
  </BrowserRouter>
);
