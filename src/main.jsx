import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import router from "./components/router/Router.jsx";
import { RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthProvider from "./components/provider/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
