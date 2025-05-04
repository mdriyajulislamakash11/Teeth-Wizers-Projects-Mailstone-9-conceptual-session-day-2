import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayoute from "../layout/MainLayoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayoute />
  },
]);

export default router;
