import React from "react";
import { Outlet, Link } from "react-router-dom";
const SharedLayout: React.FC = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Todos</Link>
          <Link to="/canban">Canban</Link>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default SharedLayout;
