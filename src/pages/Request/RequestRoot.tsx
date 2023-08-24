import React from "react";
import { Outlet } from "react-router-dom";
import RequestHeader from "../../components/Request/RequestHeader";

const RequestRoot: React.FC = () => {
  return (
    <>
      <RequestHeader />
      <Outlet />
    </>
  );
};

export default RequestRoot;
