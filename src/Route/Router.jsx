import { createBrowserRouter } from "react-router-dom";
import React from "react";
import MainLayout from "./MainLayout/MainLayout";
import Home from "./MainLayout/Home";

const myCreatedRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

export default myCreatedRouter;
