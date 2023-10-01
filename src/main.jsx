import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import myCreatedRouter from "./Route/Router.jsx";
import Auth from "./Route/authentications/Auth";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth>
      <RouterProvider router={myCreatedRouter} />
    </Auth>
  </React.StrictMode>
);
