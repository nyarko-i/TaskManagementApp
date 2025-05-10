import React from "react";
import ToggleMode from "./components/ToggleMode";
import AppRoutes from "./router/AppRoute";

const App = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <ToggleMode />
      <AppRoutes />
    </div>
  );
};

export default App;
