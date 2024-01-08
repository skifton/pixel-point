import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";

const RootWrapper: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default RootWrapper;
