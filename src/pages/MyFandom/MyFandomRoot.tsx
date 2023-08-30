import React from "react";
import { Outlet } from "react-router-dom";
import MyFandom from "./MyFandom";

const MyFamdomRoot: React.FC = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default MyFamdomRoot;
