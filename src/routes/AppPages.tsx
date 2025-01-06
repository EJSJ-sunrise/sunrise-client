import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppRouteDef } from "./RouteDef";

const AppPages = () => {
  return (
    <div className="flex-1 overflow-y-auto overflow-x-hidden">
      <Routes>
        {Object.entries(AppRouteDef).map(([name, { path, element }]) => (
          <Route key={name} path={path} element={element} />
        ))}
      </Routes>
    </div>
  );
};

export default AppPages;
