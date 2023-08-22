import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import IconWithText from "./IconWithText";

const FooterNavBarWrapper = styled.div`
  width: 100%;
  height: 83px;

  border-top: 1px solid #a5a8b8;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: white;

  position: fixed;
  bottom: 0;
  z-index: 99;
`;

const TabIconWrapper = styled.div`
  width: 100%;

  margin-top: 7px;
  padding-left: 15px;
  padding-right: 15px;

  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
`;

const LinkItem = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;

const FooterNavBar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <FooterNavBarWrapper>
      <TabIconWrapper>
        <LinkItem to="/">
          <IconWithText text="홈" pathname={pathname} />
        </LinkItem>
        <LinkItem to="/feed">
          <IconWithText text="피드" pathname={pathname} />
        </LinkItem>
        <LinkItem to="/minsooItem">
          <IconWithText text="손민수템" pathname={pathname} />
        </LinkItem>
        <LinkItem to="/chatting">
          <IconWithText text="채팅방" pathname={pathname} />
        </LinkItem>
        <LinkItem to="/myPage">
          <IconWithText text="마이페이지" pathname={pathname} />
        </LinkItem>
      </TabIconWrapper>
    </FooterNavBarWrapper>
  );
};

export default FooterNavBar;
