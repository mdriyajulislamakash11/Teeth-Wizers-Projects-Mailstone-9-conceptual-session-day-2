import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayoute from "../layout/MainLayoute";
import Home from "../pages/Home";
import AllTreatments from "../pages/AllTreatments";
import MyProfile from "../pages/MyProfile";
import MyAppointments from "../pages/MyAppointments";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayoute />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allTreatments",
        element: <AllTreatments />,
      },
      {
        path: "/myProfile",
        element: <MyProfile />,
      },
      {
        path: "myAppointments",
        element: <MyAppointments />,
      },
    ],
  },
]);

export default router;
