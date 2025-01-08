import React from "react";
import MainPage from "../pages/MainPage";
import LoginPage from "../pages/LoginPage";

export const AppRouteDef = {
  Main: {
    path: "/",
    element: <LoginPage />,
  },
};
