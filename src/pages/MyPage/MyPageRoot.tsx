import React from "react";
import { Outlet } from "react-router-dom";
import MypageHeader from "../../components/MyPage/MypageHeader";

const MyPageRoot: React.FC = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default MyPageRoot;
