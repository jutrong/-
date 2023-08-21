import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import RequestHeader from "../../components/Request/RequestHeader";

const Wrap = styled.div`
  width: 100%;
  height: 100%;
`;

const RequestRoot: React.FC = () => {
  return (
    <Wrap>
      <RequestHeader />
      <Outlet />
    </Wrap>
  );
};

export default RequestRoot;
