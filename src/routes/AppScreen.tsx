import React from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import Header from "../components/common/Header";
import AppPages from "./AppPages";

const AppLayout: React.FC = () => {
  const location = useLocation();

  return (
    <div className="w-full min-h-screen flex justify-center bg-gray-100">
      <div className="w-full max-w-xl bg-white border border-gray-200 rounded-lg shadow-lg flex flex-col">
        {location.pathname !== "/login" && <Header />}

        <div className="flex-grow overflow-auto">
          <AppPages />
        </div>
      </div>
    </div>
  );
};

const AppScreen: React.FC = () => {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
};

export default AppScreen;
