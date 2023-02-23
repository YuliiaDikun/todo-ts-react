import React from "react";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "./Components/SharedLayout";
import Todos from "./Pages/Todos";
import Canban from "./Pages/Canban";
const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Todos />} />
        <Route path="canban" element={<Canban />} />
      </Route>
    </Routes>
  );
};

export default App;
