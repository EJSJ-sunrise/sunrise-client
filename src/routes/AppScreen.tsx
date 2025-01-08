import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppPages from "./AppPages";

const AppScreen: React.FC = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-100 text-center">
      <BrowserRouter>
        <AppPages />
      </BrowserRouter>
    </div>
  );
};

export default AppScreen;
