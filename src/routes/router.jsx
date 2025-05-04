import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayoute from "../layout/MainLayoute";
import Home from "../pages/Home";
import AllTreatments from "../pages/AllTreatments";
import MyProfile from "../pages/MyProfile";
import MyAppointments from "../pages/MyAppointments";
import Details from "../pages/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayoute />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
            const servicesRes = await fetch("/service.json");
            const servicesData = await servicesRes.json()

            const feedBackRes = await fetch("/happyclients.json");
            const feedBackData = await feedBackRes.json()

            return {feedBackData, servicesData}
        }
      },
      {
        path: "/allTreatments",
        element: <AllTreatments />,
        loader: () => fetch("/service.json")
      },
      {
        path: "/myProfile",
        element: <MyProfile />,
      },
      {
        path: "myAppointments",
        element: <MyAppointments />,
      },
      {
        path: "/details/:id",
        element:<Details />
      }
    ],
  },
]);

export default router;
