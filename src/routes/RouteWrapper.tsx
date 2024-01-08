import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../views/Main";
import { ROUTES } from "./routes";
import RootWrapper from "../components/RootWrapper";

const RouteWrapper: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.MAIN} element={<RootWrapper />}>
        <Route path={ROUTES.MAIN} element={<Main />} />
      </Route>
    </Routes>
  );
};

export default RouteWrapper;
